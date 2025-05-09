"use client";

import { useState, useEffect } from "react";
import { db } from "@/app/lib/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc,
  getDocs,
  where,
  writeBatch,
} from "firebase/firestore";
import { Bell } from "lucide-react";

export default function AdminPage() {
  const [sessions, setSessions] = useState([]);
  const [sessionMap, setSessionMap] = useState({});
  const [selectedSession, setSelectedSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [selectedSessions, setSelectedSessions] = useState(new Set());
  const [notificationCount, setNotificationCount] = useState(0);
  const [firstUserMessageTimes, setFirstUserMessageTimes] = useState({});

  const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

  useEffect(() => {
    if (authenticated) return;

    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const userStartedSessions = new Map();

      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        if (data.sender === "user") {
          const existing = userStartedSessions.get(data.sessionId);
          if (!existing || data.timestamp?.toMillis() < existing) {
            userStartedSessions.set(data.sessionId, data.timestamp?.toMillis?.());
          }
        }
      });

      setNotificationCount(userStartedSessions.size);
    });

    return () => unsubscribe();
  }, [authenticated]);

  useEffect(() => {
    if (!authenticated) return;

    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      const sessionOrder = [];
      const seen = new Set();
      const validSessions = {};
      const userMessageTimes = {};

      msgs.forEach((msg) => {
        if (msg.sender === "user") {
          if (!seen.has(msg.sessionId)) {
            seen.add(msg.sessionId);
            sessionOrder.push(msg.sessionId);
            userMessageTimes[msg.sessionId] = msg.timestamp?.toDate?.();
          }
          validSessions[msg.sessionId] = true;
        }
      });

      const numberedMap = {};
      sessionOrder.forEach((id, index) => {
        numberedMap[id] = `Session ${index + 1}`;
      });

      setSessions(sessionOrder);
      setSessionMap(numberedMap);
      setFirstUserMessageTimes(userMessageTimes);

      if (selectedSession) {
        const filtered = msgs.filter((msg) => msg.sessionId === selectedSession);
        setMessages(filtered);
      }
    });

    return () => unsubscribe();
  }, [selectedSession, authenticated]);

  const sendReply = async () => {
    if (!reply.trim() || !selectedSession) return;
    await addDoc(collection(db, "messages"), {
      text: reply,
      sender: "admin",
      sessionId: selectedSession,
      timestamp: serverTimestamp(),
    });
    setReply("");
  };

  const handleLogin = () => {
    if (
      loginData.username === ADMIN_CREDENTIALS.username &&
      loginData.password === ADMIN_CREDENTIALS.password
    ) {
      setAuthenticated(true);
      setNotificationCount(0);
    } else {
      alert("Invalid credentials");
    }
  };

  const deleteMessage = async (id) => {
    await deleteDoc(doc(db, "messages", id));
  };

  const deleteSession = async (sessionId) => {
    const messagesQuery = query(
      collection(db, "messages"),
      where("sessionId", "==", sessionId)
    );
    const snapshot = await getDocs(messagesQuery);
    const batch = writeBatch(db);

    snapshot.forEach((docSnap) => {
      batch.delete(doc(db, "messages", docSnap.id));
    });
    await batch.commit();
    setSessions((prev) => prev.filter((s) => s !== sessionId));
    if (selectedSession === sessionId) {
      setSelectedSession(null);
      setMessages([]);
    }
    setSelectedSessions((prev) => {
      const updated = new Set(prev);
      updated.delete(sessionId);
      return updated;
    });
  };

  const deleteSelectedSessions = async () => {
    for (let id of selectedSessions) await deleteSession(id);
    setSelectedSessions(new Set());
  };

  const toggleSessionSelection = (id) => {
    setSelectedSessions((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) updated.delete(id);
      else updated.add(id);
      return updated;
    });
  };

  if (!authenticated) {
    return (
      <div
        style={{
          height: "100vh",
          background: "url('/bg-login.jpg') center / cover no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#f1f5f9",
        }}
      >
        <div style={{ position: "absolute", top: 20, right: 30 }}>
          <Bell size={24} />
          {notificationCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: -10,
                right: -10,
                backgroundColor: "#ef4444",
                borderRadius: "9999px",
                padding: "2px 8px",
                fontSize: "0.75rem",
                color: "white",
              }}
            >
              {notificationCount}
            </span>
          )}
        </div>
        <h2 style={{ marginBottom: 20, fontSize: "1.5rem" }}>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={loginData.username}
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
          style={{
            marginBottom: 10,
            padding: 10,
            borderRadius: 6,
            border: "none",
            width: 250,
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          style={{
            marginBottom: 10,
            padding: 10,
            borderRadius: 6,
            border: "none",
            width: 250,
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        padding: 20,
        minHeight: "100vh",
        backgroundColor: "#1e293b",
        color: "#f8fafc",
      }}
    >
      <div
        style={{
          width: "270px",
          borderRight: "2px solid #334155",
          paddingRight: 20,
        }}
      >
        <h2 style={{ marginBottom: 20, color: "#e2e8f0" }}>User Sessions</h2>
        <button
          onClick={deleteSelectedSessions}
          style={{
            marginBottom: 10,
            padding: "8px 12px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Delete Selected
        </button>
        {sessions.map((id) => (
          <div
            key={id}
            style={{
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
              backgroundColor:
                selectedSession === id ? "#334155" : "#475569",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              checked={selectedSessions.has(id)}
              onChange={() => toggleSessionSelection(id)}
              style={{ marginRight: 5 }}
            />
            <span
              onClick={() => setSelectedSession(id)}
              style={{ flex: 1 }}
            >
              {sessionMap[id]}
              <br />
              <small style={{ color: "#94a3b8" }}>
                {firstUserMessageTimes[id]?.toLocaleString?.() || ""}
              </small>
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteSession(id);
              }}
              style={{
                marginLeft: 10,
                background: "transparent",
                border: "none",
                color: "#f87171",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, paddingLeft: 20 }}>
        <h2 style={{ marginBottom: 10, color: "#f1f5f9" }}>
          Chat with:{" "}
          <span style={{ color: "#94a3b8" }}>
            {sessionMap[selectedSession] || "Select a session"}
          </span>
        </h2>
        <div
          style={{
            height: 400,
            overflowY: "auto",
            border: "1px solid #334155",
            padding: 10,
            marginBottom: 10,
            borderRadius: 6,
            background: "#0f172a",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {messages.length === 0 && selectedSession ? (
            <p style={{ color: "#94a3b8" }}>No messages yet...</p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  backgroundColor:
                    msg.sender === "admin" ? "#1e40af" : "#0369a1",
                  padding: "8px 12px",
                  borderRadius: 6,
                  maxWidth: "80%",
                  alignSelf: msg.sender === "admin" ? "flex-end" : "flex-start",
                  color: "white",
                  position: "relative",
                }}
              >
                <div>
                  <strong>{msg.sender === "admin" ? "Admin" : "User"}:</strong>{" "}
                  {msg.text}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#cbd5e1",
                    marginTop: 4,
                  }}
                >
                  {msg.timestamp?.toDate?.().toLocaleString?.() || "Just now"}
                </div>
                <button
                  onClick={() => deleteMessage(msg.id)}
                  style={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    background: "transparent",
                    border: "none",
                    color: "#f87171",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
        {selectedSession && (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <input
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply..."
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 6,
                border: "1px solid #334155",
                backgroundColor: "#f1f5f9",
                color: "#0f172a",
              }}
            />
            <button
              onClick={sendReply}
              style={{
                padding: "10px 20px",
                backgroundColor: "#22c55e",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

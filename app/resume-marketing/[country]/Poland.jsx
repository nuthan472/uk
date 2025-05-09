import React from "react";

const PolandResumeMarketing = () => {
  return (
    <div style={{ fontFamily: "Times New Roman"}}>
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Poland Resume Marketing Services for <span className="text-orange-500">VJC Overseas</span>
      </h1>
      <p className="text-lg text-gray-700 mt-6 text-center">
        Welcome to <span className="text-orange-500 font-semibold">VJC Overseas</span>, your trusted partner in advancing your career in Poland!
      </p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
        <p className="text-gray-700 mt-4">
          Our expert resume marketing services ensure you stand out in Poland’s job market with tailored resumes, cover letters, and interview coaching.
        </p>
      </section>
      
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">Salary Structure in Poland</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li><strong>IT Professionals</strong>: €3,000 - €5,500 per month</li>
          <li><strong>Engineers</strong>: €2,500 - €4,500 per month</li>
          <li><strong>Finance and Accounting</strong>: €2,000 - €4,000 per month</li>
          <li><strong>Marketing and Sales</strong>: €2,200 - €3,500 per month</li>
          <li><strong>Healthcare</strong>: €2,500 - €4,500 per month</li>
        </ul>
      </section>
      
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">Work Opportunities & Benefits</h2>
        <p className="text-gray-700 mt-4">
          Poland offers growing job opportunities, competitive benefits, and English-speaking roles in top industries like IT, finance, and healthcare.
        </p>
      </section>
      
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">How Our Resume Marketing Services Work</h2>
        <ol className="mt-4 list-decimal pl-6 text-gray-700">
          <li><strong>Consultation</strong>: Understanding your career goals.</li>
          <li><strong>Resume Writing</strong>: Crafting an ATS-friendly resume.</li>
          <li><strong>Cover Letter</strong>: Creating a personalized cover letter.</li>
          <li><strong>Job Search Strategy</strong>: Helping you target the right jobs.</li>
          <li><strong>Interview Coaching</strong>: Preparing you to ace your interviews.</li>
        </ol>
      </section>
      
      <div className="mt-10 text-center">
        <p className="text-lg text-gray-700">Take the next step in your career with <span className="text-orange-500 font-semibold">VJC Overseas</span>!</p>
        <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
          Contact Us Now
        </button>
      </div>
    </div>
  );
};

export default PolandResumeMarketing;

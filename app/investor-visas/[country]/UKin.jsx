import React from "react";
import Link from "next/link";

const UKInnovatorVisa = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-black font-times-new-roman">
      <h1 className="text-3xl font-bold text-center mb-6">Unlocking Opportunities with the UK Innovator Visa</h1>
      <p className="text-lg text-justify mb-4">
        In today’s fast-paced global economy, the United Kingdom stands as a beacon for innovation, offering a wealth of opportunities
        for entrepreneurs looking to expand their businesses and make an impact on the world. If you’re an ambitious individual with a
        groundbreaking idea, the UK Innovator Visa could be your key to success.
      </p>
      <p className="text-lg text-justify mb-6">
        At <span className="text-orange-500 font-bold">VJC Overseas</span>, we specialize in guiding dynamic entrepreneurs like you through the UK’s immigration process.
        Whether you’re starting a new venture or scaling an existing one, the Innovator Visa offers you the chance to bring your vision
        to life in one of the most vibrant business environments on the planet.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">What is the UK Innovator Visa?</h2>
      <p className="mb-4">The Innovator Visa is designed for experienced entrepreneurs who wish to establish or run a business in the UK. It requires:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Endorsement from an approved UK organization</li>
        <li>A unique, innovative, and scalable business idea</li>
        <li>A clear contribution to the UK economy</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Key Benefits of the UK Innovator Visa</h2>
      <ul className="list-none space-y-3">
        <li>➤ <strong>Flexible Entry Requirements:</strong> No need for a large amount of capital upfront.</li>
        <li>➤ <strong>Path to Permanent Residency:</strong> Eligible for Indefinite Leave to Remain (ILR) after 3 years.</li>
        <li>➤ <strong>Access to UK’s Startup Ecosystem:</strong> Connections with investors and business accelerators.</li>
        <li>➤ <strong>Family Inclusion:</strong> Bring your spouse and children under 18 to the UK.</li>
        <li>➤ <strong>No Minimum Investment Requirement:</strong> Only a viable business plan is required.</li>
        <li>➤ <strong>Freedom to Grow Your Business:</strong> No work restrictions.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Eligibility Criteria</h2>
      <ul className="list-none space-y-3">
        <li>➤ <strong>Endorsement:</strong> A recognized UK body must approve your business idea.</li>
        <li>➤ <strong>Innovation & Scalability:</strong> Your idea must be unique and capable of growth.</li>
        <li>➤ <strong>English Proficiency:</strong> Minimum CEFR Level B2 required.</li>
        <li>➤ <strong>Financial Proof:</strong> At least £1,270 in your account for 28 days before applying.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">How <span className="text-orange-500">VJC Overseas</span> Can Help</h2>
      <ul className="list-none space-y-3">
        <li>➤ <strong>Business Idea Validation:</strong> Ensuring your idea meets UK immigration standards.</li>
        <li>➤ <strong>Visa Application Support:</strong> Assistance with documentation and submission.</li>
        <li>➤ <strong>Business Plan Development:</strong> Creating a compelling plan for endorsement.</li>
        <li>➤ <strong>Post-Visa Support:</strong> Helping you settle and expand your business in the UK.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
      <p className="mb-4">
        The UK Innovator Visa offers an exciting opportunity for entrepreneurs to bring their ideas to life in one of the world’s most dynamic economies.
        At <span className="text-orange-500 font-bold">VJC Overseas</span>, we’re committed to supporting your journey. Contact us today to get started!
      </p>
      <div className="text-center mt-6">
        <Link href="/contact">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-orange-600 transition-all">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UKInnovatorVisa;

import Head from 'next/head';

export default function AustraliaResumeMarketing() {
  return (
    <div style={{ 
      fontFamily: 'Times New Roman, serif', 
      padding: '24px', 
      fontSize: '18px', 
      lineHeight: '1.6', 
      maxWidth: '900px', 
      margin: '0 auto' // Centers the content
    }}>
      <Head>
        <title>Australia Resume Marketing Services | VJC Overseas</title>
        <meta name="description" content="Get expert Australia Resume Marketing Services from VJC Overseas. Optimize your resume for the Australian job market and land your dream job." />
      </Head>

      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        fontWeight: 'bold', 
        fontSize: '36px',
        marginBottom: '20px'
      }}>
        <h1 style={{ color: 'orange', margin: 0 }}>VJC Overseas</h1>
        <h2 style={{ margin: 0, fontSize: '22px' }}>- Australia Resume Marketing Services</h2>
      </div>

      {/* Content Section */}
      <p>
        At <span style={{ color: 'orange', fontWeight: 'bold' }}>VJC Overseas</span>, we specialize in Australia Resume Marketing Services, helping you land your dream job in Australia’s thriving job market. Whether you're a skilled professional, a recent graduate, or someone looking to relocate to Australia, we offer tailor-made resume marketing solutions to make sure your application stands out.
      </p>

      {/* Why Choose Section */}
      <h3 style={{ marginTop: '30px', color: 'black' }}>
        Why Choose <span style={{ color: 'orange' }}>VJC Overseas</span> for Your Resume Marketing?
      </h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Expert Resume Writers:</strong> Our team consists of experienced professionals who know exactly what Australian employers are looking for.</li>
        <li><strong>Tailored to Australian Standards:</strong> We ensure your resume meets Australian format and expectations.</li>
        <li><strong>ATS Optimization:</strong> We optimize your resume to pass Applicant Tracking Systems (ATS).</li>
      </ul>

      {/* Salary Section */}
      <h3 style={{ marginTop: '30px', color: 'black' }}>Salary Structure in Australia</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Healthcare & Medical Professionals:</strong> AUD $60,000 - $150,000 annually</li>
        <li><strong>IT & Technology Professionals:</strong> AUD $80,000 - $150,000 per year</li>
        <li><strong>Trades & Construction:</strong> AUD $60,000 - $100,000 annually</li>
        <li><strong>Education & Teaching:</strong> AUD $60,000 - $90,000 a year</li>
      </ul>

      {/* Work Opportunities */}
      <h3 style={{ marginTop: '30px', color: 'black' }}>Work Opportunities in Australia</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Technology & IT:</strong> High demand for cybersecurity and software developers.</li>
        <li><strong>Healthcare:</strong> Rising need for doctors and nurses.</li>
        <li><strong>Engineering & Construction:</strong> Demand for engineers and architects.</li>
        <li><strong>Education:</strong> Constant demand for educators.</li>
      </ul>

      {/* Benefits Section */}
      <h3 style={{ marginTop: '30px', color: 'black' }}>Benefits of Working in Australia</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Competitive Salaries:</strong> High earnings in various fields.</li>
        <li><strong>Superannuation:</strong> 10.5% employer contribution to retirement funds.</li>
        <li><strong>Healthcare:</strong> Access to free/subsidized Medicare.</li>
        <li><strong>Paid Leave:</strong> Minimum four weeks annual leave.</li>
        <li><strong>Workplace Rights:</strong> Strong labor laws for fair wages and anti-discrimination.</li>
      </ul>

      {/* How We Help */}
      <h3 style={{ marginTop: '30px', color: 'black' }}>How <span style={{ color: 'orange' }}>VJC Overseas</span> Can Help You</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Resume Writing:</strong> Tailored to your profession.</li>
        <li><strong>LinkedIn Profile Optimization:</strong> Build a strong online presence.</li>
        <li><strong>Cover Letter Writing:</strong> Highlighting your strengths.</li>
        <li><strong>Job Search Assistance:</strong> Connecting you with top employers.</li>
        <li><strong>Interview Preparation:</strong> Coaching for Australian job interviews.</li>
      </ul>

      {/* Contact Section */}
      <h3 style={{ marginTop: '30px', color: 'black' }}>Contact Us Today</h3>
      <p>
        Ready to take the next step in your Australian career? Reach out to <span style={{ color: 'orange', fontWeight: 'bold' }}>VJC Overseas</span> for expert resume marketing services.
      </p>

      {/* Contact Details */}
      <p style={{ marginTop: '10px' }}>
        <strong>Phone:</strong> +91-9160449000 <br />
        <strong>Email:</strong> info@vjcoverseas.com <br />
        <strong>Website:</strong> <a href="https://www.vjcoverseas.com" target="_blank" rel="noopener noreferrer">www.vjcoverseas.com</a>
      </p>
    </div>
  );
}

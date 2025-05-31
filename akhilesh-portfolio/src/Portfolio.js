import React from "react";

export default function Portfolio() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Akhilesh Pillai</h1>
          <p>Pune, India | akhi47963@gmail.com | 9588653683</p>
          <a href="https://www.linkedin.com/in/akhilesh-pillai-8522b222a" className="underline">LinkedIn Profile</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Professional Summary</h2>
          <p>
            Proactive and results-driven HR Executive with solid experience in onboarding, HR operations,
            and employee engagement. Proven track record of improving onboarding efficiency, enhancing
            documentation processes, and serving as a trusted point of contact for HR-related matters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Professional Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">HR Executive</h3>
            <p>HD Hyundai Construction Equipments India Pvt Ltd (via Randstad) | Jan 2024 – Present</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Coordinated onboarding lifecycle, ensuring timely document collection and salary discussions.</li>
              <li>Acted as liaison between candidates, TA, and internal teams.</li>
              <li>Managed HR trackers and verified reimbursements.</li>
              <li>Conducted induction sessions and resolved HR queries efficiently.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">HR Intern</h3>
            <p>Aviruddha Productivity Pvt Ltd | Sep 2022 – Dec 2022</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Supported recruitment lifecycle through screening and communication.</li>
              <li>Maintained employee files and developed HR policy presentations.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Key Achievements</h2>
          <ul className="list-disc ml-6">
            <li>Reduced documentation delays by 40% with a new checklist.</li>
            <li>Increased candidate response rate with standardized templates.</li>
            <li>Improved data visibility with centralized HR action templates.</li>
            <li>Aligned notice periods for better compliance.</li>
            <li>Established strong relationships with client-side HR managers.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <ul className="list-disc ml-6">
            <li>MBA – Human Resource Management, S.B Patil Institute of Management</li>
            <li>Bachelor of Computer Science, ATSS College</li>
            <li>H.S.C & S.S.C, Jai Hind Junior College & High School</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Core Competencies</h2>
          <p>Onboarding & Recruitment, HR Operations, Stakeholder Communication, Tracker Management, Query Resolution, Employee Engagement, MS Excel</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Projects</h2>
          <p><strong>Manpower Planning and Recruitment</strong> – Aviruddha Productivity Pvt Ltd</p>
          <p>Structured recruitment lifecycle to align with business needs and delivered actionable strategies.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Certifications</h2>
          <ul className="list-disc ml-6">
            <li>Fundamentals of Data Analysis in Excel – Corporate Finance Institute</li>
            <li>Build a Presentation with Macabacus – Corporate Finance Institute</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Languages</h2>
          <ul className="list-disc ml-6">
            <li>English – Full Professional Proficiency</li>
            <li>Hindi – Native Proficiency</li>
            <li>Malayalam – Native Proficiency</li>
            <li>Marathi – Professional Working Proficiency</li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-900 text-white text-center p-4 mt-8">
        <p>&copy; {new Date().getFullYear()} Akhilesh Pillai | Portfolio Website</p>
      </footer>
    </div>
  );
}

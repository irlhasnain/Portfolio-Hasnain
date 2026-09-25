
import { ArrowUpRight } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';
import { AnimLine } from '../components/AnimLine';
import aboutImg from '../assets/about_illustration.jpg';

export function About() {
  return (
    <div className="w-full pb-20">
      <FadeUp delay={0}>
        <h1 className="font-hn text-[8vh] sm:text-[12vh] leading-none text-cream mb-8 sm:mb-12">About</h1>
      </FadeUp>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-12 sm:mb-20">
        <FadeUp delay={60} className="w-full lg:w-1/2">
          <p className="text-lg sm:text-2xl leading-relaxed font-hn text-cream mb-6">
            Data Science student at LNCT Group of Colleges, Bhopal, with hands-on experience across the full data pipeline — SQL, Machine Learning, Power BI, and now applied AI systems. I like combining solid ML/analytics fundamentals with newer generative and agentic AI tools to build things that are actually usable.
          </p>
          <p className="text-cream/60">
            Aspiring Data Scientist &middot; Python, SQL, Machine Learning &amp; BI &middot; Bhopal, Madhya Pradesh
          </p>
        </FadeUp>
        
        <FadeUp delay={100} className="w-full lg:w-1/2 hidden sm:block">
           <div className="relative rounded-2xl overflow-hidden aspect-video border border-cream/10 bg-cream/5">
             <img src={aboutImg} alt="Workspace illustration" className="w-full h-full object-cover mix-blend-screen opacity-70" />
           </div>
        </FadeUp>
      </div>

      <FadeUp delay={120} className="mt-16">
        <h2 className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-6">What I've built</h2>
        <ul className="flex flex-col gap-3 text-cream/80">
          <li>&ndash; CLV Prediction Platform — production-style ML system with a SQL-based feature pipeline and a real-time FastAPI serving layer (Random Forest)</li>
          <li>&ndash; Retail Sales Analytics Pipeline — end-to-end SQL + ETL + EDA workflow with Prophet forecasting and an interactive Streamlit dashboard</li>
          <li>&ndash; Customer Churn Prediction App — Scikit-learn + Streamlit, 91% F1-score</li>
          <li>&ndash; HR Analytics Dashboard — Power BI on 9,000+ employee records, covering attrition and workforce trends</li>
        </ul>
      </FadeUp>

      <div className="my-16">
        <AnimLine className="h-px bg-cream/20" />
      </div>

      <div>
        <FadeUp delay={0}>
          <h2 className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-8">Experience</h2>
        </FadeUp>
        
        <div className="flex flex-col">
          {[
            {
              role: 'Generative AI Intern',
              company: 'Samatrix Consulting Private Limited',
              date: 'Aug 2026 – Present',
              location: 'Bhopal, Madhya Pradesh · On-site',
              desc: 'Working on Retrieval-Augmented Generation (RAG) applications as part of a Generative AI internship.',
            },
            {
              role: 'AI Automation Intern',
              company: 'Seagull AI (Seagull Venture Private Limited)',
              date: 'Jun 2026 – Aug 2026',
              location: 'Bhopal, Madhya Pradesh · On-site',
              desc: 'Automated structured data collection via web scraping scripts, reducing manual retrieval effort. Built an RSS feed manager and automated content-aggregation pipelines. Handled domain/server infrastructure — nameserver configuration, SSL setup, deployment support. Developed client-facing features in PHP, participated in client meetings, and co-hosted an MSME Summit.',
            },
            {
              role: 'Data Science Intern',
              company: 'Cognifyz Technologies',
              date: 'Mar 2026 – Apr 2026',
              location: 'Remote',
              desc: 'Labeled and encoded categorical restaurant attributes (cuisine, price range, booking status) via structured feature engineering. Built and compared regression models (Linear Regression, Decision Tree, Random Forest) to predict restaurant ratings; analyzed customer preferences by cuisine type across cities. Delivered accurate outputs across 3 comparative analyses with zero rework cycles.\nTools: Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn',
            },
            {
              role: 'Data Analyst Intern',
              company: 'Ypsilon IT Solutions Pvt. Ltd.',
              date: 'Mar 2025',
              location: 'Bhopal, Madhya Pradesh · On-site',
              desc: 'Ensured accuracy across 9,000+ audit-verified employee records using Pivot Tables, VLOOKUP, and conditional formatting. Maintained confidentiality handling sensitive HR data with zero compliance incidents. Built an interactive Power BI dashboard tracking attrition trends and departmental performance — directly adopted by supervisor.',
            }
          ].map((job, i) => (
            <FadeUp key={job.company} delay={i * 60} className={`flex flex-col sm:flex-row justify-between py-6 border-t border-cream/20 gap-4 sm:gap-8`}>
              <div className="sm:w-1/2">
                <h3 className="text-xl sm:text-2xl font-hn text-cream mb-1">{job.role}</h3>
                <p className="text-cream/60">{job.company}</p>
              </div>
              <div className="sm:w-1/2 flex flex-col sm:text-right">
                <p className="text-cream/80 text-sm mb-1">{job.date}</p>
                <p className="text-cream/50 text-xs mb-3">{job.location}</p>
                <p className="text-sm text-cream/70 leading-relaxed whitespace-pre-wrap sm:text-right sm:ml-auto max-w-md">{job.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <div className="my-16">
        <AnimLine className="h-px bg-cream/20" />
      </div>

      <div>
        <FadeUp delay={0}>
          <h2 className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-8">Education</h2>
        </FadeUp>
        
        <FadeUp delay={60} className="flex flex-col sm:flex-row justify-between py-6 border-t border-cream/20 gap-4 sm:gap-8">
          <div className="sm:w-1/2">
            <h3 className="text-xl sm:text-2xl font-hn text-cream mb-1">Bachelor of Computer Application (BCA)</h3>
            <p className="text-cream/60">LNCT Group of College, Bhopal, Madhya Pradesh</p>
          </div>
          <div className="sm:w-1/2 flex flex-col sm:text-right">
            <p className="text-cream/80 text-sm mb-1">Sep 2024 – Expected Jun 2027</p>
            <p className="text-cream/50 text-xs mb-3">CGPA 8.4 / 10.0</p>
            <p className="text-sm text-cream/70 leading-relaxed sm:text-right sm:ml-auto max-w-md">Coursework: Machine Learning, Data Structures, Statistics, DBMS, Data Mining</p>
          </div>
        </FadeUp>
      </div>

      <div className="my-16">
        <AnimLine className="h-px bg-cream/20" />
      </div>

      <FadeUp delay={0}>
        <h2 className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-8">Skills</h2>
        <p className="text-cream/80 leading-relaxed mb-12 max-w-4xl">
          Python (Pandas, NumPy, Scikit-learn) &middot; SQL &middot; R &middot; Classification &middot; Regression &middot; Clustering (k-means, RFM) &middot; Time-series Forecasting (Prophet) &middot; EDA &amp; Feature Engineering &middot; Statistical Validation &middot; ETL Pipeline Design &middot; Model Evaluation (F1, MAE) &middot; Power BI &middot; Tableau &middot; Streamlit &middot; Excel (Pivot Tables, VLOOKUP) &middot; MySQL &middot; PostgreSQL &middot; SQLite &middot; Git/GitHub &middot; Prompt Engineering &middot; RAG &middot; AI Agent Design &amp; Workflow Automation
        </p>

        <h2 className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-4">Languages</h2>
        <p className="text-cream/80 leading-relaxed mb-16 max-w-4xl">
          English (Professional) &middot; Hindi (Native)
        </p>

        <div className="flex flex-wrap gap-8 items-center">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-cream border-b border-cream pb-1 hover:opacity-60 duration-300">
            Download Resume <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a href="https://linkedin.com/in/hasnainkhan3011" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-cream hover:opacity-60 duration-300">
            View LinkedIn <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </FadeUp>

    </div>
  );
}

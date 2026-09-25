
import { ArrowUpRight } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';

const projects = [
  {
    title: 'Retail Sales Analytics',
    url: 'https://github.com/irlhasnain/retail-sales-analytics',
    desc: 'End-to-end retail sales analytics pipeline — normalized SQL schema, idempotent ETL for 10,000+ transactions, RFM segmentation, Prophet forecasting (61% MAE reduction vs. moving-average baseline), interactive Streamlit dashboard.',
    stack: 'Python · SQL · SQLite · Prophet · Streamlit',
  },
  {
    title: 'CLV Prediction Platform',
    url: 'https://github.com/irlhasnain/clv-prediction-platform',
    desc: 'Production-style ML system for predicting Customer Lifetime Value — SQL-based feature pipeline, Random Forest model, real-time FastAPI serving layer.',
    stack: 'Python · SQL · Scikit-learn · FastAPI',
  },
  {
    title: 'Customer Churn Prediction App',
    url: 'https://github.com/irlhasnain/Churn-Prediction-App',
    desc: 'ML model to predict customer churn from historical data to flag at-risk customers before they leave — 91% F1-score after careful data validation.',
    stack: 'Python · Scikit-learn · Streamlit',
  },
  {
    title: 'Trader Performance vs. Market Sentiment',
    url: 'https://github.com/irlhasnain/Trader-Performance-vs-Market-Sentiment',
    desc: 'Analysis of trader performance against market sentiment signals, completed as a real-world data project for PrimeTrade.ai via Internshala.',
    stack: 'Python · Pandas · Data Visualization',
  },
  {
    title: 'RAG Project',
    url: 'https://github.com/irlhasnain/RAG-project',
    desc: 'Applied Retrieval-Augmented Generation experiments — prompt engineering and LLM-based retrieval tooling.',
    stack: 'Python · Jupyter Notebook',
  },
  {
    title: 'Cognifyz Data Science Internship',
    url: 'https://github.com/irlhasnain/cognifyz-data-science-internship',
    desc: 'Restaurant dataset analysis for the Cognifyz Technologies internship — feature engineering, predictive modeling, and visualization across booking, delivery, and rating data.',
    stack: 'Python · Pandas · Scikit-learn · Matplotlib/Seaborn',
  },
  {
    title: 'cPanel Malware Scanner',
    url: 'https://github.com/irlhasnain/cpanel-malware-scanner',
    desc: 'Defensive malware scanning tool for cPanel / shared hosting environments — scans for webshells and suspicious files on servers you own or manage.',
    stack: 'Python',
  },
  {
    title: 'RSS Feed Manager',
    url: 'https://github.com/irlhasnain/mp-rss-feed-manager',
    desc: 'Python tool to fetch, parse, and manage RSS feeds from multiple sources in one place.',
    stack: 'Python',
  },
];

export function Projects() {
  return (
    <div className="w-full">
      <FadeUp delay={0}>
        <h1 className="font-hn text-[8vh] sm:text-[12vh] leading-none text-cream mb-12 sm:mb-20">Projects</h1>
      </FadeUp>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <FadeUp 
            key={project.title} 
            delay={i * 60} 
            as="a" 
            {...{ href: project.url, target: "_blank", rel: "noopener noreferrer" }}
            className={`flex flex-col sm:flex-row sm:items-baseline justify-between py-6 sm:py-8 group cursor-pointer border-t border-cream/20 ${i === projects.length - 1 ? 'border-b' : ''}`}
          >
            <div className="flex items-center gap-4">
              <h2 className="text-2xl sm:text-4xl font-hn transition-opacity duration-300 group-hover:opacity-60">{project.title}</h2>
              <ArrowUpRight size={24} strokeWidth={1.5} className="opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
            
            <div className="mt-2 sm:mt-0 flex flex-col sm:text-right text-xs sm:text-sm text-cream/60 max-w-xl">
              <p className="mb-1 leading-relaxed">{project.desc}</p>
              <p className="tracking-wide text-cream/40 uppercase">{project.stack}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

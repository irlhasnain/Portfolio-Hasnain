
import { ExternalLink } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';

const ibmBadges = [
  { title: 'AI Literacy', date: '20 Aug 2026', url: 'https://www.credly.com/go/OLfD5S0s' },
  { title: 'Getting Started with Generative AI', date: '19 Aug 2026', url: 'https://www.credly.com/go/mjI4NmDE' },
  { title: 'Make Agentic AI Work for You', date: '20 Aug 2026', url: 'https://www.credly.com/go/jGpWUpGx' },
  { title: 'Build an AI Agent', date: '21 Aug 2026', url: 'https://www.credly.com/go/L94S55w7' },
];

const otherCerts = [
  { title: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic' },
  { title: 'Certificate of Accomplishment — Data Analysis Using Python', issuer: 'Samatrix Consulting Pvt. Ltd.' },
  { title: 'Deloitte Data Analyst Job Simulation', issuer: 'Forage (Data Analysis, Dashboard & Business Insights)' },
  { title: 'AWS Job Simulation', issuer: 'Forage' },
];

export function Certificates() {
  return (
    <div className="w-full pb-20">
      <FadeUp delay={0}>
        <h1 className="font-hn text-[8vh] sm:text-[12vh] leading-none text-cream mb-12 sm:mb-20">Certificates</h1>
      </FadeUp>

      <div className="mb-20">
        <FadeUp delay={60}>
          <h2 className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-8">IBM SkillsBuild</h2>
        </FadeUp>
        
        <div className="flex flex-col border-t border-cream/20">
          {ibmBadges.map((badge, i) => (
            <FadeUp 
              key={badge.title} 
              delay={(i + 1) * 60} 
              className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-cream/20 gap-4"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-hn text-cream">{badge.title}</h3>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <p className="text-cream/60 text-sm">Issued {badge.date}</p>
                <a 
                  href={badge.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-1.5 text-sm text-cream/80 hover:opacity-60 duration-300"
                >
                  Verify <ExternalLink size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <div>
        <FadeUp delay={0}>
          <h2 className="text-sm uppercase tracking-[0.2em] text-cream/50 mb-8">Other Certifications</h2>
        </FadeUp>
        
        <div className="flex flex-col border-t border-cream/20">
          {otherCerts.map((cert, i) => (
            <FadeUp 
              key={cert.title} 
              delay={(i + 1) * 60} 
              className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-cream/20 gap-4"
            >
              <h3 className="text-xl sm:text-2xl font-hn text-cream">{cert.title}</h3>
              <p className="text-cream/60 text-sm sm:text-right max-w-sm">{cert.issuer}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}

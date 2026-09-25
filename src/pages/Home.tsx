import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <>
      <img 
        src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85" 
        alt="" 
        className="absolute inset-0 h-full w-full object-cover anim-fade-in" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 pointer-events-none"></div>

      <div className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden anim-fade-up" style={{ animationDelay: '500ms' }}>
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream">
          <span className="pr-[6vw]">Hasnain &mdash; Khan</span>
          <span className="pr-[6vw]">Hasnain &mdash; Khan</span>
        </div>
      </div>

      <div className="absolute inset-x-6 sm:inset-x-10 top-[35vh] sm:top-[45vh] z-10 anim-fade-up" style={{ animationDelay: '800ms' }}>
        <div className="max-w-2xl backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-cream/5">
          <p className="text-lg sm:text-2xl text-cream/90 font-light mb-3">
            Data Scientist & AI Enthusiast
          </p>
          <p className="text-sm sm:text-base text-cream/60 max-w-lg mb-6 leading-relaxed">
            I combine solid machine learning and analytics fundamentals with generative AI to build practical, intelligent systems.
          </p>
          
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-cream hover:text-cream/70 transition-colors group">
            Explore My Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div 
        className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-px bg-cream/40 anim-line" 
        style={{ animationDelay: '1200ms' }}
      />
    </>
  );
}

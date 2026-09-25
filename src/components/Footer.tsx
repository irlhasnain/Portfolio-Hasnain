import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer 
      className={clsx(
        "flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn",
        isHome ? "absolute inset-x-0 bottom-0 z-30" : "mt-24 w-full"
      )}
    >
      <div className="anim-fade-up flex flex-col" style={{ animationDelay: '1400ms' }}>
        {isHome ? (
          <>
            <span>Aspiring Data Scientist</span>
            <span>Python · SQL · Machine Learning</span>
            <span>Building with Agentic AI</span>
          </>
        ) : (
          <a href="https://github.com/irlhasnain" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:opacity-60 duration-300">
            More on GitHub &rarr;
          </a>
        )}
      </div>

      {isHome && (
        <div className="anim-fade-up text-right flex flex-col" style={{ animationDelay: '1550ms' }}>
          <span>Based in</span>
          <span>Bhopal, India</span>
        </div>
      )}
    </footer>
  );
}

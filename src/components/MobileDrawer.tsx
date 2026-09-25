import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import clsx from 'clsx';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Projects', to: '/projects' },
    { name: 'About', to: '/about' },
    { name: 'Certificates', to: '/certificates' },
    { name: 'Contact', to: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', to: 'https://github.com/irlhasnain' },
    { name: 'LinkedIn', to: 'https://linkedin.com/in/hasnainkhan3011' },
    { name: 'Email', to: 'mailto:hasnainkh3011@gmail.com' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={clsx(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div 
        className={clsx(
          "fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 transition-transform duration-600 sm:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
      >
        <button 
          onClick={onClose}
          className={clsx(
            "absolute right-6 top-6 text-cream transition-all duration-300 delay-300",
            isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          )}
          aria-label="Close menu"
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        <div className="mt-16 flex flex-col gap-12">
          {/* Site Index */}
          <div>
            <h2 className={clsx(
              "text-sm uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 delay-250",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              Site Index
            </h2>
            <nav className="mt-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <Link 
                  key={link.name} 
                  to={link.to}
                  className={clsx(
                    "font-hn text-4xl text-cream transition-all duration-500 hover:opacity-60",
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  )}
                  style={{ transitionDelay: isOpen ? `${300 + i * 80}ms` : '0ms' }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Find Me */}
          <div>
            <h2 className={clsx(
              "text-sm uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 delay-500",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              Find Me
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link, i) => (
                <a 
                  key={link.name} 
                  href={link.to}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={clsx(
                    "text-sm text-cream transition-all duration-500 hover:opacity-60",
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: isOpen ? `${550 + i * 60}ms` : '0ms' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenDrawer: () => void;
}

export function Header({ onOpenDrawer }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8 anim-fade-up" style={{ animationDelay: '800ms' }}>
      <Link to="/" className="font-hn text-lg tracking-wide hover:opacity-60 duration-300">
        Hasnain
      </Link>

      {/* Desktop Right Cluster */}
      <div className="hidden sm:flex items-start gap-16 lg:gap-24">
        <span className="text-sm">2026</span>
        
        <nav className="flex flex-col gap-0.5 text-sm" style={{ animationDelay: '1000ms' }}>
          <Link to="/projects" className="hover:opacity-60 duration-300">Projects</Link>
          <Link to="/about" className="hover:opacity-60 duration-300">About</Link>
          <Link to="/certificates" className="hover:opacity-60 duration-300">Certificates</Link>
          <Link to="/contact" className="hover:opacity-60 duration-300">Contact</Link>
        </nav>

        <div className="flex flex-col gap-0.5 text-sm" style={{ animationDelay: '1150ms' }}>
          <a href="https://github.com/irlhasnain" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 duration-300">GitHub</a>
          <a href="https://linkedin.com/in/hasnainkhan3011" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 duration-300">LinkedIn</a>
          <a href="mailto:hasnainkh3011@gmail.com" className="hover:opacity-60 duration-300">Email</a>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button 
        onClick={onOpenDrawer}
        className="sm:hidden flex h-10 w-10 flex-col items-end justify-center gap-1.5 focus:outline-none"
        aria-label="Open menu"
        style={{ animationDelay: '900ms' }}
      >
        <span className="h-[2px] w-6 bg-cream block"></span>
        <span className="h-[2px] w-6 bg-cream block"></span>
        <span className="h-[2px] w-6 bg-cream block"></span>
      </button>
    </header>
  );
}

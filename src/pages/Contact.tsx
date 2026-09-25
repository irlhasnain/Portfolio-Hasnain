import { ArrowUpRight } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';

export function Contact() {
  return (
    <div className="w-full pb-20">
      <FadeUp delay={0}>
        <h1 className="font-hn text-[8vh] sm:text-[12vh] leading-none text-cream mb-6 sm:mb-8">Contact</h1>
      </FadeUp>

      <FadeUp delay={60} className="max-w-[60ch] mb-16">
        <p className="text-lg sm:text-2xl leading-relaxed font-hn text-cream/90">
          Have a project in mind? Let's talk!
        </p>
      </FadeUp>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 border-t border-cream/20 pt-16">
        <FadeUp delay={100} className="w-full lg:w-1/2">
           <form className="flex flex-col gap-8" action="mailto:hasnainkh3011@gmail.com" method="POST" encType="text/plain">
             <div className="flex flex-col gap-2">
               <label htmlFor="name" className="text-xs uppercase tracking-widest text-cream/50">Name</label>
               <input 
                 type="text" 
                 id="name" 
                 name="name" 
                 required 
                 className="bg-transparent border-b border-cream/20 pb-2 text-cream focus:outline-none focus:border-cream transition-colors rounded-none placeholder:text-cream/20"
                 placeholder="Your name"
               />
             </div>
             <div className="flex flex-col gap-2">
               <label htmlFor="email" className="text-xs uppercase tracking-widest text-cream/50">Email</label>
               <input 
                 type="email" 
                 id="email" 
                 name="email" 
                 required 
                 className="bg-transparent border-b border-cream/20 pb-2 text-cream focus:outline-none focus:border-cream transition-colors rounded-none placeholder:text-cream/20"
                 placeholder="your@email.com"
               />
             </div>
             <div className="flex flex-col gap-2">
               <label htmlFor="message" className="text-xs uppercase tracking-widest text-cream/50">Message</label>
               <textarea 
                 id="message" 
                 name="message" 
                 required 
                 rows={4}
                 className="bg-transparent border-b border-cream/20 pb-2 text-cream focus:outline-none focus:border-cream transition-colors rounded-none resize-none placeholder:text-cream/20"
                 placeholder="Tell me about your project..."
               />
             </div>
             <button type="submit" className="group flex items-center justify-between border border-cream/20 px-6 py-4 rounded-full text-sm uppercase tracking-widest text-cream hover:bg-cream hover:text-black transition-colors duration-300 w-full sm:w-max min-w-[200px]">
               <span>Send Message</span>
               <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
             </button>
           </form>
        </FadeUp>

        <FadeUp delay={140} className="w-full lg:w-1/3 flex flex-col gap-12">
           <div>
             <h2 className="text-xs uppercase tracking-widest text-cream/50 mb-6">Contact Details</h2>
             <a href="mailto:hasnainkh3011@gmail.com" className="text-lg text-cream hover:opacity-60 transition-opacity block mb-2">hasnainkh3011@gmail.com</a>
             <p className="text-cream/60">Bhopal, Madhya Pradesh</p>
           </div>
           
           <div>
             <h2 className="text-xs uppercase tracking-widest text-cream/50 mb-6">Socials</h2>
             <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/hasnainkhan3011" target="_blank" rel="noopener noreferrer" className="text-cream hover:opacity-60 transition-opacity flex items-center gap-2 w-max">
                  LinkedIn <ArrowUpRight size={14} className="opacity-50" />
                </a>
                <a href="https://github.com/irlhasnain" target="_blank" rel="noopener noreferrer" className="text-cream hover:opacity-60 transition-opacity flex items-center gap-2 w-max">
                  GitHub <ArrowUpRight size={14} className="opacity-50" />
                </a>
             </div>
           </div>
        </FadeUp>
      </div>

    </div>
  );
}

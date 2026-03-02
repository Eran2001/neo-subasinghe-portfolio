import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Camera } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white/60 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <Camera size={20} />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              LUMINA
            </span>
          </Link>
          <p className="max-w-sm mb-8 text-lg">
            Capturing timeless moments through a lens of elegance and precision. Based in London, available worldwide.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-dark transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-dark transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-dark transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
            <li><Link to="/collections" className="hover:text-accent transition-colors">Collections</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2"><Mail size={16} /> hello@lumina.studio</li>
            <li>123 Creative Lane, Studio 4B<br />London, UK</li>
            <li>+44 20 7946 0123</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2024 Lumina Photography Studio. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/common/Common';
import { Button } from '@/src/components/ui/button';
import { Mail, Phone, MapPin, Instagram, Twitter, Send } from 'lucide-react';
import { useState } from 'react';
import { useContentStore } from '@/src/stores/stores';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Portrait',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const addSubmission = useContentStore(state => state.addContactSubmission);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubmission(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', type: 'Portrait', date: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <SectionHeading subtitle="Get in Touch" title="Let's Start a Conversation" className="mb-12" />
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Whether you have a specific project in mind or just want to say hello, I'd love to hear from you.
            </p>
            
            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                  <p className="text-lg font-bold">hello@lumina.studio</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                  <p className="text-lg font-bold">+44 20 7946 0123</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Studio</p>
                  <p className="text-lg font-bold">London, United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-dark hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-dark hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-muted/30 p-8 md:p-12 rounded-[3rem] border border-border/50"
            >
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-6 py-4 rounded-2xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-6 py-4 rounded-2xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest ml-1">Shoot Type</label>
                      <select 
                        className="w-full px-6 py-4 rounded-2xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                        value={formData.type}
                        onChange={e => setFormData({...formData, type: e.target.value})}
                      >
                        <option>Portrait</option>
                        <option>Wedding</option>
                        <option>Editorial</option>
                        <option>Commercial</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest ml-1">Preferred Date</label>
                      <input 
                        type="date" 
                        className="w-full px-6 py-4 rounded-2xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-6 py-4 rounded-2xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full py-8 text-lg font-bold">
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

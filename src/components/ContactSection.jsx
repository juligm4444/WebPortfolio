import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  // State for form fields
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: 'Message Sent!!!',
        description: "Thanks for your message. I'll answer you soon.",
      });
      setSubmitting(false);
      setForm({ name: '', email: '', message: '' }); // Clear fields
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary"> Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Want to colaborate or have an idea in mind? Get in touch. New opportunities and horizons
          are always welcomed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="flex flex-col items-center space-y-6 justify-center">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:julian_gm4@hotmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  julian_gm4@hotmail.com
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+573163863322"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +57 (316) 386-3322
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground hover:text-primary transition-colors">
                  Bogotá, Colombia
                </span>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center"> Follow Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/juligm4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/juligm4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <a href="https://x.com/Xx_juligm4_xX" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
                <a
                  href="https://www.youtube.com/@juligm4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Jack Stevenson..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="jackStv@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'm interested in..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={cn('general-button w-full flex items-center justify-center gap-2')}
              >
                {submitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

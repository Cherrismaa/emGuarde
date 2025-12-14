// src/pages/Contact.tsx

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Mail, Phone, PhoneCall, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  console.log("Contact component FROM FILE A is rendering");
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">

      <Helmet>
        <title>
          Contact emGuarde™ | Official Enagic Distributor | Enquiries & Orders
        </title>
        <meta
          name="description"
          content="Get in touch with an authorized Enagic distributor for emGuarde™. Ask questions, request pricing, orders, business collaboration or product details."
        />
        <link rel="canonical" href="https://emguarde.shop/contact" />

        <meta property="og:title" content="Contact emGuarde™ | Official Enagic Distributor" />
        <meta
          property="og:description"
          content="Reach out to enquire about emGuarde™, distribution, sales, bulk orders, pricing and support."
        />
        
        <meta property="og:image" content="https://emguarde.shop/preview.jpg" />
        <meta property="og:url" content="https://emguarde.shop/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Contact a local ENAGIC distributor today to learn more about emGuarde™
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-gold">Contact</span> Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      India Office<br />
                      emGaurd
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+918328668046" className="text-muted-foreground hover:text-gold transition-colors">
                      +91 83286 68046
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Landline</h3>
                    <a
                      href="tel:+914031715200"
                      className="text-muted-foreground hover:text-gold transition-colors">
                      040 3171 5200
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:channakya12@gmail.com" className="text-muted-foreground hover:text-gold transition-colors">
                      [channakya12@gmail.com]
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-muted rounded-lg h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.392616880265!2d78.42157157493598!3d17.440912583455354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9126a7a64d6d%3A0x820ede72c9e0cbe7!2s4%20Life%20Transfer%20Factor%20Hyderabad!5e0!3m2!1sen!2sin!4v1765272145656!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-gold/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a <span className="text-gold">Message</span></h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary border-gold/20 focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary border-gold/20 focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary border-gold/20 focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-secondary border-gold/20 focus:border-gold"
                  />
                </div>
                <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-black font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

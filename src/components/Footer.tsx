import { Mail, Phone, PhoneCall, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneForwarded } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-black border-t border-gold/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div>
          <h3 className="text-lg font-bold mb-4">
            <img
              src="/emguarde-logo.png"
              alt="emGuarde"
              className="h-8 w-auto"
            />
          </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Premium electromagnetic protection for your home and family.
            </p>
            {/* Download Brochure Button */}
            <a
              href="/emguarde-brochure.pdf"
              download="emGuarde-Brochure.pdf"
              className="inline-block"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-gold/50 text-gold hover:bg-gold/10 text-xs"
              >
                <Download className="w-3 h-3 mr-2" />
                Download Brochure
              </Button>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  About emGuarde™
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("specifications")}
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Specifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("certifications")}
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* More from Enagic */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm">More from Enagic</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://enagickangen.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Enagic India Home
                </a>
              </li>
              <li>
                <a
                  href="https://enagickangen.co.in/kangen-water/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  What is Kangen Water
                </a>
              </li>
              <li>
                <a
                  href="https://enagickangen.co.in/products/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  All Enagic Machines
                </a>
              </li>
              <li>
                <a
                  href="https://enagickangen.co.in/store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Enagic Store
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm">Contact</h4>
            <div className="space-y-2 text-sm">

              <div className="flex items-center space-x-2">
                <PhoneCall className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+918328668046"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  +91 83286 68046
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+914031715200"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  +91 (40) 3171 5200
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@enagickangen.co.in"
                  className="text-muted-foreground hover:text-gold transition-colors break-all"
                >
                  info@enagickangen.co.in
                </a>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Yousufguda, Hyderabad, Telangana, India.
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Distributor Disclaimer */}
        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto mb-6">
            This website is operated by an independent Enagic emGuarde™ distributor based in India. 
            It is not the official emGuarde™ corporate website.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} emGuard™. All rights reserved. A product by Enagic.
          </p>
        </div>
      </div>
    </footer>
  );
};

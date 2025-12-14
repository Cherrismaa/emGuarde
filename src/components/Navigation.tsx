import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", sectionId: "hero", external: false },
    { name: "Specs", sectionId: "specifications", external: false },
    { name: "About", sectionId: "about", external: false },
    { name: "How It Works", sectionId: "how-it-works", external: false },
    { name: "Certifications", sectionId: "certifications", external: false },
  
    { name: "Enagic", url: "https://enagickangen.co.in/", external: true },
    { name: "Kangen Water", url: "https://enagickangen.co.in/kangen-water/#what-is-kangen", external: true },
    
    { name: "Contact", sectionId: "contact", external: false },
    { name: "FAQs", sectionId: "faqs", external: false },

  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-black/95 backdrop-blur-lg border-b border-gold/20"
            : "bg-black/90 lg:bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname === "/") {
                  scrollToSection("hero");
                } else {
                  window.location.href = "/";
                }
              }}
              className="flex items-center space-x-2 flex-shrink-0"
            >
              <img
                src="/emguarde-logo.png"
                alt="emGuarde"
                className="h-8 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-nowrap">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm text-foreground hover:text-gold transition-colors duration-200 whitespace-nowrap
                  after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0
                  after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300
                  hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={`/#${link.sectionId}`}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="relative text-sm text-foreground hover:text-gold transition-colors duration-200 whitespace-nowrap
                  after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0
                  after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300
                  hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link.name}
                </a>
              )
            )}
          </div>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden w-11 h-11 border border-gold/40 rounded-full
                ${isMobileMenuOpen ? "bg-black text-gold" : "bg-black/80 text-foreground"}
                hover:bg-black hover:text-gold`}
              onClick={() => setIsMobileMenuOpen((open) => !open)}>
              
              <Menu size={28} />
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in bg-black/95 border-t border-gold/20 rounded-b-lg">
              <div className="flex flex-col space-y-2 pt-3">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-gold/10 hover:text-gold transition-colors rounded-md text-foreground text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      key={link.name}
                      href={`/#${link.sectionId}`}
                      onClick={(e) => handleNavClick(e, link.sectionId)}
                      className="block px-4 py-3 hover:bg-gold/10 hover:text-gold transition-colors rounded-md text-foreground text-sm">
                      {link.name}
                    </a>
                  )
                )}

                {/* Mobile-only contact info */}
                <div className="mt-4 px-4 pt-4 border-t border-gold/20 lg:hidden">
                  <p className="text-s text-muted-foreground mb-2">
                    Contact us
                  </p>

                  <a
                    href="tel:+918328668046"
                    className="block text-sm text-foreground hover:text-gold transition-colors"
                  >
                    📞 +91 83286 68046
                  </a>

                  <a
                    href="mailto:info@enagickangen.co.in"
                    className="block text-sm text-foreground hover:text-gold transition-colors mt-1"
                  >
                    ✉️ info@enagickangen.co.in
                  </a>
                </div>

              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Click-outside overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/40 lg:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

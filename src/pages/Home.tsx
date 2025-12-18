// src/pages/Home.tsx

import { Helmet } from "react-helmet-async";
import { useState, useRef, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import {
  Shield, Zap,
  Home as HomeIcon,
  Radio, Clock,
  Wifi, Smartphone,
  Laptop, Tv,
  Refrigerator, Waves,
  Monitor, Building2,
  GraduationCap, Stethoscope,
  Coffee, Users,
  Briefcase, Heart,
  Award, CheckCircle,
  Mail, Phone,
  PhoneCall, MapPin,
  Send, Download,
  Play, } 
  from "lucide-react";

import heroBg from "@/assets/hero-back.webp";
import heroBgMobile from "@/assets/hero-back-mobile.jpg";
import deviceImage from "@/assets/what-is-emg.png";
import coverage from "@/assets/small-big.jpg";

import brochurePage1 from "@/assets/brochure/brochure-page-1.jpg";
import brochurePage2 from "@/assets/brochure/brochure-page-2.jpg";
import brochurePage3 from "@/assets/brochure/brochure-page-3.jpg";
import brochurePage4 from "@/assets/brochure/brochure-page-4.jpg";

import intro1Poster from "@/assets/video-posters/intro1.jpg";
import protects2Poster from "@/assets/video-posters/protects2.jpg";
import bloodtest3Poster from "@/assets/video-posters/bloodtest3.jpg";
import doctor4Poster from "@/assets/video-posters/doctor4.jpg";

const videos = [
{
  id: 1,
  title: "Introduction to emGuarde™",
  youtubeId: "YEBWPoCnQ6M",
  poster: intro1Poster,
},
{
  id: 2,
  title: "How emGuarde™ Protects You",
  youtubeId: "mrZjxZQtU4A",
  poster: protects2Poster,
},
{
  id: 3,
  title: "Blood tests before and after using emGuarde™",
  youtubeId: "pBFyP_mg4es",
  poster: bloodtest3Poster,
},

{
  id: 4,
  title: "The effect of EMF and radiation on children explained by Dr. Satvinder Singh Khelae",
  youtubeId: "6rn7XEo9PMY",
  poster: doctor4Poster,
},
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

const Home = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);


  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const handleVideoClick = (id: number) => {
    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) {
        videoEl.muted = true;
      }
    });

    const clickedVideo = videoRefs.current[id];
    if (clickedVideo) {
      clickedVideo.muted = false;
      clickedVideo.play();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const specs = [
    {
      category: "Physical Specifications",
      items: [
        { label: "Power Consumption", value: "0.5 watts" },
        { label: "Input Power", value: "USB-C, 5V DC 2A-6A" },
        {
          label: "Voltage Compatibility",
          value: "110V or 230V (depends on country)",
        },
        { label: "Indicator", value: "LED light shows device is active" },
      ],
    },
    {
      category: "Technical Performance",
      items: [
        { label: "Frequency Range", value: "3MHz - 1000MHz" },
        {
          label: "Target Frequencies",
          value: "36MHz, 72MHz, 108MHz, 144MHz, 180MHz and more",
        },
        { label: "Coverage Area", value: "4-meter radius (8-meter diameter)" },
        { label: "Technology", value: "Harmonic frequency suppression" },
      ],
    },
    {
      category: "Durability & Maintenance",
      items: [
        { label: "Lifespan", value: "Minimum 5 years with proper care" },
        { label: "Warranty Period", value: "1 year (2 years in EU)" },
        { label: "Maintenance Required", value: "None" },
        { label: "Drop Protection", value: "Not drop-proof" },
        { label: "Water Resistance", value: "Not waterproof" },
      ],
    },
    {
      category: "Compatibility & Usage",
      items: [
        {
          label: "Worldwide Compatibility",
          value: "Yes, with regular USB-C adapters",
        },
        {
          label: "Moving Vehicle Use",
          value: "Yes (with correct adapter)",
        },
        {
          label: "Power Bank Compatible",
          value: "Not advisable (may affect coverage)",
        },
        {
          label: "Airplane Use",
          value: "Yes, follow airline safety regulations",
        },
      ],
    },
    {
      category: "Safety & Certifications",
      items: [
        { label: "FCC Compliance", value: "SGS Certified" },
        { label: "CE Compliance", value: "SGS Certified" },
        { label: "RoHS Compliance", value: "SGS Certified" },
        { label: "Patent", value: "myIPO Patent No. MY-192775-A" },
        { label: "University Testing", value: "USM (Universiti Sains Malaysia) 2024" },
      ],
    },
    {
      category: "Installation & Optimization",
      items: [
        { label: "Setup", value: "Plug and play via USB-C" },
        {
          label: "Optimal Placement",
          value: "Elevated surface, 0.5m from electronics",
        },
        {
          label: "Avoid Placing Near",
          value: "Aluminum, mirrors, or directly on floor",
        },
        { label: "Recommended Surface", value: "On its box or elevated surface" },
      ],
    },
  ];

  const certifications = [
    {
      title: "FCC Compliance",
      authority: "SGS Certified",
      reference: "VTMHY2304000668YEA/2023",
      description:
        "Federal Communications Commission compliance ensures electromagnetic compatibility and safety standards.",
      icon: <Shield className="w-8 h-8 text-gold" />,
    },
    {
      title: "CE Compliance",
      authority: "SGS Certified",
      reference: "VTMHY2304000667YEA/2023",
      description:
        "European Conformity marking indicates compliance with EU safety, health, and environmental protection standards.",
      icon: <CheckCircle className="w-8 h-8 text-gold" />,
    },
    {
      title: "RoHS Compliance",
      authority: "SGS Certified",
      reference: "SZXEC24000468401",
      description:
        "Restriction of Hazardous Substances compliance ensures the product is free from harmful materials.",
      icon: <Award className="w-8 h-8 text-gold" />,
    },
  ];

  const faqs = [
    {
      question: "What certifications do emGuarde™ have?",
      answer:
        "USM (Universiti Sains Malaysia) 2024 – The effective range of RF white noise suppression of Electromagnetic Noise Radiation Harmonizer. Safety Certification: SGS Reference No. for FCC VTMHY2304000668YEA/2023, SGS Reference No. for CE VTMHY2304000667YEA/2023, SGS Reference No. for RoHS SZXEC24000468401. Intellectual Property: MyIPO 2022: Intellectual Property Corporation of Malaysia",
    },
    {
      question: "Is emGuarde™ protected by a patent?",
      answer:
        "Yes, emGuarde™ is a patented technology, myIPO patent no. (MY-192775-A)",
    },
    {
      question: "What is emGuarde™'s core technology?",
      answer:
        "emGuarde™ is built to suppress targeted high frequency electromagnetic noise radiation between 3MHz to 1000 MHz.",
    },
    {
      question: "How does emGuarde™ work?",
      answer:
        "emGuarde™ utilizes harmonic frequencies to effectively suppress targeted electromagnetic noise radiation between 3MHz to 1000MHz within a 4-meter radius. The multiple layering of harmonic frequencies is strategically programmed to target specific frequencies at 36MHz, 72MHz, 108MHz, 144MHz, 180MHz and more. This patented technology achieves a balanced atmosphere and a harmonious environment by suppressing targeted electromagnetic noise radiation disturbances.",
    },
    {
      question: "What is emGuarde™'s coverage range?",
      answer: "emGuarde™ covers a range of 4-meter radius or an 8-meter diameter",
    },
    {
      question: "Does emGuarde™ require maintenance?",
      answer: "No",
    },
    {
      question: "What is the lifespan of emGuarde™?",
      answer: "With proper care, minimum 5 years",
    },
    {
      question: "What is emGuarde™'s power consumption?",
      answer: "0.5 watts",
    },
    {
      question: "What is emGuarde™'s warranty period?",
      answer: "1 year manufacturer warranty",
    },
    {
      question: "How to optimise emGuarde™'s coverage range?",
      answer:
        "Avoid placing emGuarde™ near electronics, aluminium & mirrors, or directly on the floor to minimise electrostatic interference.",
    },
    {
      question: "Can emGuarde™ be powered by a power bank?",
      answer:
        "It is not advisable, as different power banks have varied output, this might affect the coverage range of emGuarde™.",
    },
    {
      question:
        "Can we use emGuarde™ in a moving vehicle, example a car or train?",
      answer:
        "Yes, as long as the user has the correct adapter specifications (single USB output adapter 5V, 2A-6A).",
    },
    {
      question:
        "Can we still receive Wi-Fi connection or phone signals when emGuarde™ is turned on?",
      answer:
        "Yes, emGuarde™ does not interfere with any telecommunication signals across the entire frequency's spectrum.",
    },
    {
      question:
        "Why does emGuarde™ focuses on suppressing electromagnetic noise radiation within 1GHz?",
      answer:
        "Electromagnetic radiation frequencies below 1GHz have potentially more adverse effect on microcirculation of the human body due to resonance effects.",
    },
    {
      question: "Should emGuarde™ be placed on its box when in use?",
      answer:
        "Yes, placing emGuarde™ on its box or another elevated surface helps prevent electrostatic interference, optimising coverage and performance.",
    },
    {
      question: "Can we use emGuarde™ on a plane?",
      answer:
        "Yes, emGuarde™ can be activated using a power bank with the appropriate specifications. However, please adhere to airline safety regulations and ensure all electronic devices, including emGuarde™, are switched off during takeoff and landing.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">

    <Helmet>
      <title>
        EMF Protection Device for Home & Office | emGuarde™ India
      </title>

      <meta
        name="description"
        content="emGuarde™ is a patented EMF protection device designed to help harmonize electromagnetic noise from everyday electronics. Ideal for homes, offices, and workspaces seeking a healthier, calmer environment."
      />

      <link rel="canonical" href="https://emguarde.shop/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="emGuarde™" />
      <meta
        property="og:title"
        content="EMF Protection Device for Home & Office | emGuarde™"
      />
      <meta
        property="og:description"
        content="Discover emGuarde™, a patented electromagnetic noise harmonizer designed to help manage EMF exposure in modern living and working spaces."
      />
      <meta property="og:url" content="https://emguarde.shop/" />
      <meta property="og:image" content="https://emguarde.shop/preview.jpg" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "emGuarde™ Electromagnetic Noise Harmonizer",
            description:
              "A patented EMF protection device designed to help harmonize electromagnetic noise from electronic devices in homes and offices.",
            brand: {
              "@type": "Brand",
              name: "emGuarde™",
            },
            url: "https://emguarde.shop/",
            image: "https://emguarde.shop/preview.jpg",
          }),
        }}
      />
    </Helmet>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
          isMobile ? heroBgMobile : heroBg
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Advanced Protection From Everyday
            <span className="block text-gold mt-2">Electromagnetic Radiation</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            emGuarde™ is a premium, scientifically-backed solution designed to help
            shield your home and workspace from the impact of modern electronic devices.
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-6 text-base"
            onClick={() => scrollToSection("about")}
          >
            Discover How It Works
          </Button>
        </div>
      </section>

      {/* About EM Guard Section */}
      <section id="about" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                What is <span className="text-gold">emGuarde™?</span>
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                emGuarde™ is part of Enagic's premium product line, designed to help
                manage electromagnetic disturbances in modern living and working
                environments. This scientifically-backed device is engineered for families,
                professionals, and businesses who want to create a more harmonious
                electromagnetic environment.
              </p>
              <p className="text-base text-muted-foreground mb-6">
                Utilizing patented harmonic frequency suppression technology, emGuarde™
                is designed to help reduce exposure to targeted electromagnetic noise
                radiation from the countless electronic devices we use daily.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-card border border-gold/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gold mb-1">8m</div>
                  <div className="text-xs text-muted-foreground">Coverage Diameter</div>
                </div>
                <div className="bg-card border border-gold/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gold mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Continuous Protection</div>
                </div>
                <div className="bg-card border border-gold/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gold mb-1">0.5W</div>
                  <div className="text-xs text-muted-foreground">Power Consumption</div>
                </div>
                <div className="bg-card border border-gold/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gold mb-1">5yr+</div>
                  <div className="text-xs text-muted-foreground">Minimum Lifespan</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={deviceImage}
                alt="emGuarde Device - Premium electromagnetic protection"
                loading="eager"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              How <span className="text-gold">emGuarde™</span> Works
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Patented harmonic frequency suppression technology designed to help create a
              balanced electromagnetic environment in your space.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors">
              <div className="flex justify-center mb-4">
                <Radio className="w-12 h-12 text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3">Detect & Harmonize</h3>
              <p className="text-sm text-muted-foreground">
                Utilizes multiple layers of harmonic frequencies to target specific
                electromagnetic noise radiation between 3MHz to 1000MHz.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3">8 Meter Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Creates a 4-meter radius (8-meter diameter) protective zone, helping to
                manage electromagnetic disturbances throughout your space.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-3">24/7 Operation</h3>
              <p className="text-sm text-muted-foreground">
                Operates continuously with just 0.5 watts of power consumption. LED
                indicator shows it's working to help protect your environment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-secondary relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Designed to Help Protect From{" "}
              <span className="text-gold">Electromagnetic Disturbances</span>
            </h2>
            <p className="text-base text-muted-foreground">
              Protect your family and loved ones against electromagnetic disturbance and
              enjoy true peace of mind with emGuarde™
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {videos.map((video) => (

              <div key={video.id} className="space-y-2">
                {/* Video container */}

                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                  {activeVideoId === video.id ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen />
                  ) : (

                    <button
                      type="button"
                      onClick={() => setActiveVideoId(video.id)}
                      className="w-full h-full relative group"
                    >
                      <img
                        src={video.poster}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-black/60 rounded-full flex items-center justify-center group-hover:bg-black/80 transition">
                          <Play className="w-7 h-7 text-gold" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Video title */}
                <p className="text-sm text-muted-foreground text-center leading-snug">
                  {video.title}
                </p>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Radiation in Daily Life Section */}
      <section id="radiation-awareness" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Understanding <span className="text-gold">Electromagnetic Radiation</span> in Daily Life
            </h2>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto mb-3">
              Electromagnetic fields (EMF) are invisible areas of energy produced by electricity. In our modern world, we are surrounded by electronic devices that emit electromagnetic radiation as a natural part of their operation.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              While these devices are essential to modern living, emGuarde™ is designed to help manage the accumulation of electromagnetic disturbances in your environment.
            </p>
          </div>

          {/* Device Grid */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center mb-8">
              Common Sources of <span className="text-gold">EMF Exposure</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <Card className="bg-card border-gold/20 p-4 text-center hover:border-gold transition-colors">
                <Smartphone className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">Smartphones</h4>
                <p className="text-xs text-muted-foreground">Constant companion devices</p>
              </Card>
              <Card className="bg-card border-gold/20 p-4 text-center hover:border-gold transition-colors">
                <Laptop className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">Laptops</h4>
                <p className="text-xs text-muted-foreground">Work and study essentials</p>
              </Card>
              <Card className="bg-card border-gold/20 p-4 text-center hover:border-gold transition-colors">
                <Wifi className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">Wi-Fi Routers</h4>
                <p className="text-xs text-muted-foreground">24/7 connectivity hubs</p>
              </Card>
              <Card className="bg-card border-gold/20 p-4 text-center hover:border-gold transition-colors">
                <Tv className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">Televisions</h4>
                <p className="text-xs text-muted-foreground">Entertainment centers</p>
              </Card>
              <Card className="bg-card border-gold/20 p-4 text-center hover:border-gold transition-colors">
                <Refrigerator className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">Refrigerators</h4>
                <p className="text-xs text-muted-foreground">Always-on appliances</p>
              </Card>
              <Card className="bg-card border-gold/20 p-4 text-center hover:border-gold transition-colors">
                <Waves className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">Microwaves</h4>
                <p className="text-xs text-muted-foreground">Kitchen appliances</p>
              </Card>
              <Card className="bg-card border-gold/20 p-4 text-center hover:border-gold transition-colors">
                <Monitor className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">Monitors</h4>
                <p className="text-xs text-muted-foreground">Display screens</p>
              </Card>
              <Card className="bg-card border-gold/20 p-4 text-center hover:border-gold transition-colors">
                <Zap className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">Washing Machines</h4>
                <p className="text-xs text-muted-foreground">Home appliances</p>
              </Card>
            </div>
          </div>

          {/* Environment Cards */}
          <div>
            <h3 className="text-xl font-bold text-center mb-8">
              Where <span className="text-gold">EMF Accumulates</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              <Card className="bg-secondary border-gold/20 p-6">
                <HomeIcon className="w-8 h-8 text-gold mb-3" />
                <h4 className="text-base font-bold mb-2">Homes</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple devices running simultaneously create cumulative electromagnetic environments.
                </p>
              </Card>
              <Card className="bg-secondary border-gold/20 p-6">
                <Building2 className="w-8 h-8 text-gold mb-3" />
                <h4 className="text-base font-bold mb-2">IT Offices & Workspaces</h4>
                <p className="text-sm text-muted-foreground">
                  High-density electronic equipment in corporate and co-working environments.
                </p>
              </Card>
              <Card className="bg-secondary border-gold/20 p-6">
                <GraduationCap className="w-8 h-8 text-gold mb-3" />
                <h4 className="text-base font-bold mb-2">Schools & Learning Centers</h4>
                <p className="text-sm text-muted-foreground">
                  Digital learning environments with tablets, computers, and smart boards.
                </p>
              </Card>
              <Card className="bg-secondary border-gold/20 p-6">
                <Stethoscope className="w-8 h-8 text-gold mb-3" />
                <h4 className="text-base font-bold mb-2">Hospitals & Clinics</h4>
                <p className="text-sm text-muted-foreground">
                  Medical equipment and devices create complex electromagnetic environments.
                </p>
              </Card>
              <Card className="bg-secondary border-gold/20 p-6">
                <Coffee className="w-8 h-8 text-gold mb-3" />
                <h4 className="text-base font-bold mb-2">Cafes & Co-working</h4>
                <p className="text-sm text-muted-foreground">
                  Shared spaces with numerous personal devices and networking equipment.
                </p>
              </Card>
              <Card className="bg-secondary border-gold/20 p-6">
                <Monitor className="w-8 h-8 text-gold mb-3" />
                <h4 className="text-base font-bold mb-2">Server & Tech Rooms</h4>
                <p className="text-sm text-muted-foreground">
                  High-concentration areas with continuous electromagnetic activity.
                </p>
              </Card>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-base font-semibold text-gold max-w-4xl mx-auto">
              emGuarde™ is designed to help manage and reduce exposure to electromagnetic disturbances in your daily environment.
            </p>
          </div>
        </div>
      </section>

      {/* Where EM Guard Fits Section */}
      <section id="use-cases" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Where You Can Use <span className="text-gold">emGuarde™</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Set it once, and it keeps working quietly in the background — a protective layer always on in your environment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-card border-gold/20 p-6 hover:border-gold transition-colors">
              <HomeIcon className="w-10 h-10 text-gold mb-3" />
              <h3 className="text-lg font-bold mb-2">Living Room</h3>
              <p className="text-sm text-muted-foreground">
                Protect family gathering spaces where multiple devices converge — TVs, tablets, gaming consoles, and smart home devices.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 hover:border-gold transition-colors">
              <HomeIcon className="w-10 h-10 text-gold mb-3" />
              <h3 className="text-lg font-bold mb-2">Bedroom</h3>
              <p className="text-sm text-muted-foreground">
                Create restful sleep environments by managing electromagnetic disturbances from phones, alarm clocks, and nearby electronics.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 hover:border-gold transition-colors">
              <Briefcase className="w-10 h-10 text-gold mb-3" />
              <h3 className="text-lg font-bold mb-2">Home Office / Study</h3>
              <p className="text-sm text-muted-foreground">
                Maintain focused work areas surrounded by laptops, monitors, printers, Wi-Fi routers, and other office equipment.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 hover:border-gold transition-colors">
              <Building2 className="w-10 h-10 text-gold mb-3" />
              <h3 className="text-lg font-bold mb-2">Corporate Offices</h3>
              <p className="text-sm text-muted-foreground">
                Professional workspaces with high-density computer setups, conference room equipment, and networking infrastructure.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 hover:border-gold transition-colors">
              <Monitor className="w-10 h-10 text-gold mb-3" />
              <h3 className="text-lg font-bold mb-2">Server Rooms</h3>
              <p className="text-sm text-muted-foreground">
                High-density electronic areas with continuous operation of servers, networking equipment, and technical infrastructure.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 hover:border-gold transition-colors">
              <Coffee className="w-10 h-10 text-gold mb-3" />
              <h3 className="text-lg font-bold mb-2">Cafes / Co-working</h3>
              <p className="text-sm text-muted-foreground">
                Shared work environments where numerous personal devices, public Wi-Fi, and customer electronics create complex EMF environments.
              </p>
            </Card>
          </div>
          <div className="bg-card border-gold/20 rounded-lg p-6 max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-bold mb-3 text-gold">Plug-in Simplicity Meets Premium Protection</h3>
            <p className="text-sm text-muted-foreground">
              Simply plug in via USB-C, place on an elevated surface away from direct electronic interference, and let emGuarde™ work continuously to help manage your electromagnetic environment. No maintenance required, just consistent protection.
            </p>
          </div>
        </div>
      </section>

      {/* Who Needs EM Guard Section */}
      <section id="who-needs" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Who Needs <span className="text-gold">emGuarde™?</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              emGuarde™ is designed for anyone seeking to create a more balanced electromagnetic environment in their daily life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors">
              <Laptop className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="text-base font-bold mb-2">Screen Professionals</h3>
              <p className="text-sm text-muted-foreground">
                People who work long hours on computers, surrounded by multiple monitors, devices, and networking equipment.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors">
              <Users className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="text-base font-bold mb-2">Modern Families</h3>
              <p className="text-sm text-muted-foreground">
                Families with children in digital learning environments, wanting to create a more balanced home atmosphere.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors">
              <HomeIcon className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="text-base font-bold mb-2">Work-from-Home</h3>
              <p className="text-sm text-muted-foreground">
                Remote professionals surrounded by home office equipment, personal devices, and household electronics.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors">
              <Building2 className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="text-base font-bold mb-2">Business Owners</h3>
              <p className="text-sm text-muted-foreground">
                Creating safer-feeling environments for customers and employees in offices, cafes, salons, and retail spaces.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors">
              <GraduationCap className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="text-base font-bold mb-2">Students & Educators</h3>
              <p className="text-sm text-muted-foreground">
                Learning environments with tablets, smart boards, laptops, and digital learning tools used throughout the day.
              </p>
            </Card>
            <Card className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors">
              <Heart className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="text-base font-bold mb-2">Wellness Conscious</h3>
              <p className="text-sm text-muted-foreground">
                Individuals prioritizing holistic health and seeking to optimize their living environment for overall well-being.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Small in a Big Way */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={coverage}
                alt="emGuarde Device - Compact premium design"
                loading="eager"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Small in a <span className="text-gold">Big Way</span>
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Creates an impact so much larger than its size. The emGuarde™ device is designed to be compact and elegant while providing comprehensive protection throughout your space.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base mb-1">8 Meters of Defense</h3>
                    <p className="text-sm text-muted-foreground">Designed to help reduce the negative effects of electromagnetic noise radiation emitted from devices all around you.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base mb-1">Anywhere, Anytime</h3>
                    <p className="text-sm text-muted-foreground">Compatible with regular USB-C charging adapters worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HomeIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base mb-1">Always On, Always Protected</h3>
                    <p className="text-sm text-muted-foreground">Indicator light shows that you are protected 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Home Needs emGuarde */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Your Home Needs <span className="text-gold">emGuarde™</span> – Now More Than Ever
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto mb-10">
            emGuarde™ harmonizes targeted high frequencies electromagnetic disturbances (3MHz-1000MHz), creating a safer and healthier home
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-card p-6 rounded-lg border border-gold/20">
              <h3 className="text-lg font-bold mb-3 text-gold">State of Art Protection</h3>
              <p className="text-sm text-muted-foreground">
                You can't hide from the electromagnetic disturbance around you, but it's ok, we got you covered. emGuarde™ offers you state of art protection against electromagnetic noise radiation 24/7.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-gold/20">
              <h3 className="text-lg font-bold mb-3 text-gold">Change Your Environment</h3>
              <p className="text-sm text-muted-foreground">
                Change your environment, change your life. A smarter way to protect your family from electromagnetic disturbance with cutting-edge technology.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-gold/20">
              <h3 className="text-lg font-bold mb-3 text-gold">Peace of Mind</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy true peace of mind with emGuarde™. Know that your loved ones are protected from harmful electromagnetic radiation wherever they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Product <span className="text-gold">Specifications</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto">
              Complete technical specifications and details for emGuarde™
            </p>
          </div>
          <div className="space-y-6">
            {specs.map((section, index) => (
              <Card key={index} className="bg-card border-gold/20 p-6">
                <h3 className="text-lg font-bold mb-4 text-gold">{section.category}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-start p-3 bg-secondary rounded-lg"
                    >
                      <span className="font-medium text-sm text-foreground">{item.label}</span>
                      <span className="text-sm text-muted-foreground text-right ml-4 max-w-[50%] break-words">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Notes */}
          <Card className="bg-card border-gold/20 p-6 mt-6">
            <h3 className="text-lg font-bold mb-4 text-gold">Important Notes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong className="text-foreground">Power Supply:</strong> Use only single USB output adapter (5V, 2A-6A). Higher amperage does not increase coverage range.
              </li>
              <li>
                • <strong className="text-foreground">Device Usage:</strong> You can freely use electronic devices while emGuarde™ is operating. It does not block signals.
              </li>
              <li>
                • <strong className="text-foreground">Electromagnetic Focus:</strong> emGuarde™ focuses on frequencies below 1GHz as they have potentially more adverse effects on human microcirculation due to resonance effects.
              </li>
              <li>
                • <strong className="text-foreground">Repair Service:</strong> All emGuarde™ devices can be repaired after warranty period. Contact your local Enagic office.
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-black">
        <div className="container mx-auto px-4 overflow-x-hidden">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Certifications & <span className="text-gold">Testing</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto">
              emGuarde™ is certified by international safety and quality standards
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-gold/20 p-6 text-center hover:border-gold transition-colors overflow-hidden">
                <div className="flex justify-center mb-4">{cert.icon}</div>
                <h3 className="text-base font-bold mb-1">{cert.title}</h3>
                <p className="text-gold font-semibold text-sm mb-1">{cert.authority}</p>
                <p className="text-xs text-muted-foreground mb-3 break-all">Ref: {cert.reference}</p>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>

          {/* University Testing */}
          <Card className="bg-secondary border-gold/20 p-8 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-gold">University</span> Tested
              </h3>
              <div className="space-y-3">
                <h4 className="text-base font-semibold">
                  USM (Universiti Sains Malaysia) 2024
                </h4>
                <p className="text-sm text-muted-foreground">
                  The effective range of RF white noise suppression of Electromagnetic Noise Radiation Harmonizer
                </p>
                <p className="text-xs text-muted-foreground">
                  Independent university testing validates the effectiveness of emGuarde™ in suppressing electromagnetic noise radiation within its specified range.
                </p>
              </div>
            </div>
          </Card>

          {/* Patent Information */}
          <Card className="bg-card border-gold/20 p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-gold">Patented</span> Technology
              </h3>
              <div className="space-y-3">
                <h4 className="text-base font-semibold">
                  Intellectual Property Corporation of Malaysia (myIPO)
                </h4>
                <p className="text-sm text-gold font-semibold">
                  Patent No: MY-192775-A (2022)
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  emGuarde™ is a unique, patented technology with no similar products available in the market. It offers a distinct impact on the environment and its users through innovative harmonic frequency suppression technology.
                </p>
              </div>
            </div>
          </Card>

          {/* Quality Assurance */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-6">
              Quality <span className="text-gold">Assurance</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <Card className="bg-secondary border-gold/20 p-5">
                <h4 className="text-base font-bold mb-2 text-gold">Safety Certified</h4>
                <p className="text-xs text-muted-foreground">
                  All safety certifications (FCC, CE, RoHS) ensure emGuarde™ meets the highest international safety and environmental standards.
                </p>
              </Card>
              <Card className="bg-secondary border-gold/20 p-5">
                <h4 className="text-base font-bold mb-2 text-gold">Scientifically Tested</h4>
                <p className="text-xs text-muted-foreground">
                  Independent university testing by Universiti Sains Malaysia validates the effectiveness of our technology.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Brochure Section */}
      <section id="brochure" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Product <span className="text-gold">Brochure</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-6">
              Learn more about emGuarde™ and its technology
            </p>
            <a
              href="/emguarde-brochure.pdf"
              download="emGuarde-Brochure.pdf"
              className="inline-block"
            >
              <Button className="bg-gold hover:bg-gold-dark text-black font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Download Full Brochure (PDF)
              </Button>
            </a>
          </div>

          {/* Brochure Images Display */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src={brochurePage1}
                alt="emGuarde Brochure Page 1"
                loading="eager"
                className="w-full max-w-[90%] h-auto rounded-lg shadow-lg max-h-[380px] md:max-h-[600px] mx-auto object-contain"
              />
              <img
                src={brochurePage2}
                alt="emGuarde Brochure Page 2"
                loading="eager"
                className="w-full max-w-[90%] h-auto rounded-lg shadow-lg max-h-[380px] md:max-h-[600px] mx-auto object-contain"
              />
              <img
                src={brochurePage3}
                alt="emGuarde Brochure Page 3"
                loading="eager"
                className="w-full max-w-[90%] h-auto rounded-lg shadow-lg max-h-[380px] md:max-h-[600px] mx-auto object-contain"
              />
              <img
                src={brochurePage4}
                alt="emGuarde Brochure Page 4"
                loading="eager"
                className="w-full max-w-[90%] h-auto rounded-lg shadow-lg max-h-[380px] md:max-h-[600px] mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto">
              Everything you need to know about emGuarde™
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-gold/20 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:text-gold transition-colors py-4">
                    <span className="font-medium text-sm">{index + 1}. {faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Get in <span className="text-gold">Touch</span>
            </h2>

            <p className="text-m text-muted-foreground max-w-4xl mx-auto">
              Contact us to learn more about emGuarde™ <br />
          </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>

              <h3 className="text-xl font-bold mb-6">
                <span className="text-gold">Contact</span> Information
              </h3>
              <div className="space-y-4">

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Phone</h4>
                    <a href="tel:+918328668046" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                      +91 83286 68046
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Landline</h4>
                    <a href="tel:+914031715200" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                      +91 (40) 3171 5200
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Email</h4>
                    <a href="mailto:info@enagickangen.co.in" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                      info@enagickangen.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      Yousufguda, Hyderabad, Telangana, India.                    </p>
                  </div>
                </div>

              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-muted rounded-lg h-64 overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203530906!2d78.24323239564612!3d17.412281015627997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1765386780313!5m2!1sen!2sin" 
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
            <div className="bg-card border border-gold/20 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Send us a <span className="text-gold">Message</span></h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
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
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
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
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
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
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-secondary border-gold/20 focus:border-gold"
                  />
                </div>
                <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-black font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div> <br/>

          <p className="text-sm text-muted-foreground max-w-3xl mx-auto text-center mb-10">
            If you’d like a better understanding of emGuarde™, you can reach out to us for a complimentary demonstration , subject to availability.
          </p>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Protect Your <span className="text-gold">Family?</span>
          </h2>
          <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about emGuarde™
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-6 text-base"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

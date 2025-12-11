// src/pages/FAQs.tsx

import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
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
      question: "Can we use emGuarde™ in a moving vehicle, example a car or train?",
      answer:
        "Yes, as long as the user has the correct adapter specifications (single USB output adapter 5V, 2A-6A).",
    },
    {
      question:
        "After turning on emGuarde™, can you still freely use electronic devices such as mobile phones and tablets?",
      answer:
        "Although emGuarde™ effectively suppresses specific high-frequency electromagnetic noise below 1 GHz, there are other harmful elements to consider. For example, addiction to mobile games and the blue light emitted from electronic device screens can cause eye problems and insomnia, and other issues. Please exercise moderation in usage.",
    },
    {
      question:
        "Can we still receive Wi-Fi connection or phone telecommunication signals when emGuarde™ is turned on?",
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
      question: "After the 1-year warranty, can a broken emGuarde™ be repaired?",
      answer:
        "Yes, all emGuarde™ devices can be repaired. Please contact your local Enagic office for assistance.",
    },
    {
      question: "Why do some websites state that emGuarde™ has a 2-year warranty?",
      answer:
        "The 2-year warranty applies only to European countries due to EU consumer regulations. For the rest of the world, emGuarde™ has a 1-year manufacturer warranty.",
    },
    {
      question:
        "Although the emGuarde™'s lifespan is 5 years. If I turn on the emGuarde™ for only 12 hours per day, is it possible to prolong the lifespan of emGuarde™ to 10 years?",
      answer:
        "Potentially, yes. With proper care, emGuarde™ is designed to last at least 5 years, but actual lifespan may vary based on individual usage.",
    },
    {
      question: "Are there competitors to emGuarde™ in the market?",
      answer:
        "emGuarde™ is a unique, patented technology with no similar products available in the market. It offers a distinct impact on the environment and its users.",
    },
    {
      question:
        "How far should emGuarde™ be placed from other electronic devices while in operation?",
      answer:
        "While emGuarde™ is operating, it's recommended to keep it at least 0.5 meters away from other electronic devices to minimize potential interference and ensure optimal performance.",
    },
    {
      question: "Is emGuarde™ drop-proof?",
      answer:
        "No, emGuarde™ is not drop-proof. Please place it in a secure location to avoid accidental drops.",
    },
    {
      question: "Is emGuarde™ waterproof?",
      answer:
        "No, emGuarde™ is not waterproof. Please keep it away from water and moisture.",
    },
    {
      question:
        "The recommended power supply adapter for emGuarde™ mentions 5V 2A to 6A. Does a higher amperage (e.g., 6A) increase the coverage range?",
      answer:
        "No, using a higher amperage (e.g., 6A) does not increase emGuarde™'s coverage range. The adapter specification of 5V with a current range between 2A and 6A simply ensures compatibility with emGuarde™'s power requirements. emGuarde™ operates at a fixed power consumption of 0.5 watts, drawing only the current it needs to function effectively. The coverage range is determined by emGuarde™'s design and harmonic frequency settings, not by the amperage of the power supply.",
    },
    {
      question: "Does the emGuarde™ power adapter require 110V or 230V?",
      answer:
        "The required voltage depends on the AC power supply standard in your country (either 110V or 230V). However, the key requirement for emGuarde™ is a USB power adapter that provides 5V with a current output between 2A and 6A. Ensure your power adapter meets this specification for stable and efficient operation.",
    },
    {
      question: "Can we use emGuarde™ on a plane?",
      answer:
        "Yes, emGuarde™ can be activated using a power bank with the appropriate specifications. However, please adhere to airline safety regulations and ensure all electronic devices, including emGuarde™, are switched off during takeoff and landing.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>emGuarde™ FAQ | Coverage, Safety, Warranty & Usage Questions</title>
        <meta
          name="description"
          content="Find clear answers to the most common emGuarde™ questions, including coverage range, safety certifications, power requirements, warranty, placement and day-to-day usage."
        />
        <link rel="canonical" href="https://emguarde.shop/faqs" />

        <meta
          property="og:title"
          content="emGuarde™ FAQ | Coverage, Safety, Warranty & Usage Questions"
        />
        <meta
          property="og:description"
          content="Learn everything about emGuarde™—how it works, coverage, certifications, warranty period, adapter specs, placement and more."
        />
        <meta property="og:url" content="https://emguarde.shop/faqs" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-gold">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Everything you need to know about emGuarde™
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-gold/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-gold transition-colors">
                  <span className="font-semibold">
                    {index + 1}. {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQs;

// src/pages/Specifications.tsx

import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";

const Specifications = () => {
  const specs = [
    {
      category: "Physical Specifications",
      items: [
        { label: "Power Consumption", value: "0.5 watts" },
        { label: "Input Power", value: "USB-C, 5V DC 2A-6A" },
        { label: "Voltage Compatibility", value: "110V or 230V (depends on country)" },
        { label: "Indicator", value: "LED light shows device is active" },
      ],
    },
    {
      category: "Technical Performance",
      items: [
        { label: "Frequency Range", value: "3MHz - 1000MHz" },
        { label: "Target Frequencies", value: "36MHz, 72MHz, 108MHz, 144MHz, 180MHz and more" },
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
        { label: "Worldwide Compatibility", value: "Yes, with regular USB-C adapters" },
        { label: "Moving Vehicle Use", value: "Yes (with correct adapter)" },
        { label: "Power Bank Compatible", value: "Not advisable (may affect coverage)" },
        { label: "Airplane Use", value: "Yes, follow airline safety regulations" },
      ],
    },
    {
      category: "Safety & Certifications",
      items: [
        { label: "FCC Compliance", value: "SGS Certified (Ref: VTMHY2304000668YEA/2023)" },
        { label: "CE Compliance", value: "SGS Certified (Ref: VTMHY2304000667YEA/2023)" },
        { label: "RoHS Compliance", value: "SGS Certified (Ref: SZXEC24000468401)" },
        { label: "Patent", value: "myIPO Patent No. MY-192775-A" },
        { label: "University Testing", value: "USM (Universiti Sains Malaysia) 2024" },
      ],
    },
    {
      category: "Installation & Optimization",
      items: [
        { label: "Setup", value: "Plug and play via USB-C" },
        { label: "Optimal Placement", value: "Elevated surface, 0.5m from electronics" },
        { label: "Avoid Placing Near", value: "Aluminum, mirrors, or directly on floor" },
        { label: "Recommended Surface", value: "On its box or elevated surface" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">

      <Helmet>
        <title>
          emGuarde™ Technical Specifications | Performance, Warranty & Power Requirements
        </title>
        <meta
          name="description"
          content="View complete emGuarde™ specifications including frequency range, power usage, coverage area, certifications, durability, warranty and installation requirements."
        />
        <link rel="canonical" href="https://emguarde.shop/specifications" />

        <meta
          property="og:title"
          content="emGuarde™ Technical Specifications | Performance, Safety & Certifications"
        />
        <meta
          property="og:description"
          content="Explore emGuarde™ technical details: harmonic frequency suppression, lifespan, warranty, adapter requirements, safety certifications, and coverage range."
        />
        <meta property="og:url" content="https://emguarde.shop/specifications" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://emguarde.shop/preview.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Product <span className="text-gold">Specifications</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Complete technical specifications and details for emGuarde™
          </p>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {specs.map((section, index) => (
              <Card key={index} className="bg-card border-gold/20 p-8">
                <h2 className="text-3xl font-bold mb-6 text-gold">{section.category}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-start p-4 bg-secondary rounded-lg"
                    >
                      <span className="font-semibold text-foreground">{item.label}</span>
                      <span className="text-muted-foreground text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Notes */}
          <Card className="bg-card border-gold/20 p-8 mt-8">
            <h2 className="text-3xl font-bold mb-6 text-gold">Important Notes</h2>
            <ul className="space-y-3 text-muted-foreground">
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
              <li>
                • <strong className="text-foreground">Extended Lifespan:</strong> Potentially, the lifespan can be extended beyond 5 years with reduced daily usage and proper care.
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Specifications;

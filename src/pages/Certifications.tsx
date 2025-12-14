// src/pages/Certifications.tsx

import { Helmet } from "react-helmet-async";
import { Award, Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "FCC Compliance",
      authority: "SGS Certified",
      reference: "VTMHY2304000668YEA/2023",
      description:
        "Federal Communications Commission compliance ensures electromagnetic compatibility and safety standards.",
      icon: <Shield className="w-12 h-12 text-gold" />,
    },
    {
      title: "CE Compliance",
      authority: "SGS Certified",
      reference: "VTMHY2304000667YEA/2023",
      description:
        "European Conformity marking indicates compliance with EU safety, health, and environmental protection standards.",
      icon: <CheckCircle className="w-12 h-12 text-gold" />,
    },
    {
      title: "RoHS Compliance",
      authority: "SGS Certified",
      reference: "SZXEC24000468401",
      description:
        "Restriction of Hazardous Substances compliance ensures the product is free from harmful materials.",
      icon: <Award className="w-12 h-12 text-gold" />,
    },
  ];

  return (
    <div className="min-h-screen pt-20">

    <Helmet>
      <title>
        emGuarde™ Certifications | USM Test, SGS CE, FCC and RoHS Approvals
      </title>

      <meta
        name="description"
        content="See emGuarde™ certifications, including USM university testing and SGS reports for CE, FCC and RoHS compliance, verified under Enagic’s global quality standards."
      />
      <link rel="canonical" href="https://emguarde.shop/certifications" />

      <meta
        property="og:title"
        content="emGuarde™ Certifications | USM Test, SGS CE, FCC and RoHS Approvals"
      />
      <meta
        property="og:description"
        content="Explore how emGuarde™ has been tested and certified by USM and SGS for electromagnetic safety, quality and environmental compliance."
      />

      <meta property="og:image" content="https://emguarde.shop/preview.jpg" />
      <meta property="og:url" content="https://emguarde.shop/certifications" />
      <meta property="og:type" content="website" />
    </Helmet>

      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Certifications & <span className="text-gold">Testing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            emGuarde™ is certified by international safety and quality standards
          </p>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-card border-gold/20 p-8 text-center hover:border-gold transition-colors"
              >
                <div className="flex justify-center mb-6">{cert.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gold font-semibold mb-2">{cert.authority}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Ref: {cert.reference}
                </p>
                <p className="text-muted-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>

          {/* University Testing */}
          <Card className="bg-secondary border-gold/20 p-12 mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gold">University</span> Tested
              </h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  USM (Universiti Sains Malaysia) 2024
                </h3>
                <p className="text-lg text-muted-foreground">
                  The effective range of RF white noise suppression of Electromagnetic
                  Noise Radiation Harmonizer
                </p>
                <p className="text-muted-foreground">
                  Independent university testing validates the effectiveness of
                  emGuarde™ in suppressing electromagnetic noise radiation within its
                  specified range.
                </p>
              </div>
            </div>
          </Card>

          {/* Patent Information */}
          <Card className="bg-card border-gold/20 p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gold">Patented</span> Technology
              </h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Intellectual Property Corporation of Malaysia (myIPO)
                </h3>
                <p className="text-lg text-gold font-semibold">
                  Patent No: MY-192775-A (2022)
                </p>
                <p className="text-muted-foreground mt-4">
                  emGuarde™ is a unique, patented technology with no similar products
                  available in the market. It offers a distinct impact on the environment
                  and its users through innovative harmonic frequency suppression
                  technology.
                </p>
              </div>
            </div>
          </Card>

          {/* Quality Assurance */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Quality <span className="text-gold">Assurance</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-secondary border-gold/20 p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">Safety Certified</h3>
                <p className="text-muted-foreground">
                  All safety certifications (FCC, CE, RoHS) ensure emGuarde™ meets the
                  highest international safety and environmental standards.
                </p>
              </Card>
              <Card className="bg-secondary border-gold/20 p-6">
                <h3 className="text-xl font-bold mb-3 text-gold">Scientifically Tested</h3>
                <p className="text-muted-foreground">
                  Independent university testing by Universiti Sains Malaysia validates
                  the effectiveness of our technology.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;

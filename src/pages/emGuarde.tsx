// src/pages/EMGuard.tsx

import { Helmet } from "react-helmet-async";
import { Shield, Radio, Wifi, Smartphone } from "lucide-react";
import deviceImage from "@/assets/emguard-device.jpg";

const EMGuard = () => {
  return (
    <div className="min-h-screen pt-20">

    <Helmet>
      <title>
        How emGuarde™ Works | EMF Protection Technology Explained
      </title>

      <meta
        name="description"
        content="Learn how emGuarde™ works using patented harmonic frequency technology to help manage electromagnetic noise from everyday devices within homes and offices."
      />

      <link rel="canonical" href="https://emguarde.shop/emguarde" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="emGuarde™" />
      <meta
        property="og:title"
        content="How emGuarde™ Works | EMF Protection Technology"
      />
      <meta
        property="og:description"
        content="A clear explanation of emGuarde™ technology and how it helps harmonize electromagnetic noise in modern living and working environments."
      />

      <meta property="og:image" content="https://emguarde.shop/preview.jpg" />
      <meta property="og:url" content="https://emguarde.shop/emguarde" />
    </Helmet>

      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What is <span className="text-gold">emGuarde™</span>?
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A revolutionary electromagnetic noise radiation harmonizer designed to
            protect you and your family from harmful electromagnetic disturbances.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src={deviceImage}
                alt="emGuarde device - electromagnetic noise harmonizer"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                How <span className="text-gold">emGuarde™</span> Works
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                emGuarde™ utilizes harmonic frequencies to effectively suppress
                targeted electromagnetic noise radiation between 3MHz to 1000MHz
                within a 4-meter radius.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                The multiple layering of harmonic frequencies is strategically
                programmed to target specific frequencies at 36MHz, 72MHz, 108MHz,
                144MHz, 180MHz and more.
              </p>
              <p className="text-lg text-muted-foreground">
                This patented technology achieves a balanced atmosphere and a
                harmonious environment by suppressing targeted electromagnetic noise
                radiation disturbances.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Key <span className="text-gold">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg border border-gold/20 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">8 Meters Coverage</h3>
                <p className="text-muted-foreground">
                  Protects within a 4-meter radius or 8-meter diameter
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-gold/20 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Radio className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">3MHz - 1000MHz</h3>
                <p className="text-muted-foreground">
                  Targets high-frequency electromagnetic disturbances
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-gold/20 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Interference</h3>
                <p className="text-muted-foreground">
                  Doesn't affect Wi-Fi or telecommunication signals
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-gold/20 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Use Devices Freely</h3>
                <p className="text-muted-foreground">
                  Continue using phones and tablets normally
                </p>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-secondary p-8 md:p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Technical <span className="text-gold">Details</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gold">Core Technology</h3>
                <p className="text-muted-foreground mb-4">
                  emGuarde™ is built to suppress targeted high frequency
                  electromagnetic noise radiation between 3MHz to 1000 MHz using
                  patented harmonic frequency technology.
                </p>
                <p className="text-muted-foreground">
                  Patent No: MY-192775-A (myIPO - Intellectual Property Corporation of
                  Malaysia, 2022)
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gold">Key Specifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Power Consumption: 0.5 watts</li>
                  <li>• Coverage: 4-meter radius (8-meter diameter)</li>
                  <li>• Frequency Range: 3MHz - 1000MHz</li>
                  <li>• Power Supply: USB-C, 5V 2A-6A</li>
                  <li>• Lifespan: Minimum 5 years with proper care</li>
                  <li>• Warranty: 1 year manufacturer warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EMGuard;

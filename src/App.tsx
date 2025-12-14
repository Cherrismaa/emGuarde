// src/App.tsx

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import Home from "./pages/Home.tsx";
import EMGuarde from "./pages/emGuarde";
import Specifications from "./pages/Specifications";
import Certifications from "./pages/Certifications";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>emGuarde™ | Electromagnetic Protection Technology</title>
      <meta
        name="description"
        content="emGuarde™ patented electromagnetic harmonizer designed for high-frequency suppression and home protection. Learn specifications, certifications, and real benefits."
      />
      <meta name="author" content="Enagic" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="emGuarde™ | Electromagnetic Protection Technology" />
      <meta
        property="og:description"
        content="Explore emGuarde™ advanced noise-harmonizing technology trusted globally for electromagnetic suppression."
      />
    </Helmet>

    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/emguarde" element={<EMGuarde />} />
              <Route path="/specifications" element={<Specifications />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
            <FloatingButtons />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

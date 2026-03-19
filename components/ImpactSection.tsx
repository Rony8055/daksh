import { Button } from "@heroui/button";
import {
  Star,
  Building,
  Award,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Gallery from "./Gallery";

const partners = [
  { name: "SPARK Collective", desc: "Led by Smt. Smriti Irani" },
  { name: "PM Shri Schools", desc: "National Education Initiative" },
  { name: "IRCON International", desc: "Infrastructure Development" },
  { name: "Central Electronics Ltd.", desc: "Government Enterprise" },
  { name: "CII Indian Women Network", desc: "Industry Body" },
  { name: "AIIMS", desc: "Mental Health Festival" },
];

const stats = [
  { icon: Users, value: "1,00,000+", label: "Individuals Assessed" },
  { icon: Target, value: "85%", label: "Profiling Accuracy" },
  { icon: Building, value: "100+", label: "Partner Organizations" },
  { icon: Award, value: "6+", label: "Years of Impact" },
];

const ImpactSection = () => {
  return (
    <section
      id="impact"
      className="py-12 sm:py-24 bg-cream relative overflow-hidden sm:px-18"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4 block">
            Our Reach
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-6">
            Impact & <span className="text-secondary">Partnerships</span>
          </h2>
          <p className="text-slate-500 sm:text-lg">
            Trusted by leading institutions across India for human potential
            development
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-xl shadow-black/5 hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-gold-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        <Gallery />

        {/* Featured Partners */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-6 sm:mb-10">
            Featured & Recognized By
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-xl shadow-black/5 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3">
                  <Star className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-semibold text-black text-sm mb-1">
                  {partner.name}
                </h4>
                <p className="text-slate-500 text-xs">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Model */}
        <div className="bg-gradient-to-r from-[#2C7F6F] to-[#3A9C8B] rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Partnership Model
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                We collaborate with industry leaders, government bodies, and
                educational institutions to drive India's human capital
                innovation through data-led empowerment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "CII & Industry Bodies",
                  "MSME Networks",
                  "CSR Programs",
                  "Government Initiatives",
                  "Educational Institutions",
                  "Startup India",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-warning" />
                    <span className="text-sm text-primary-foreground/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary-foreground/20">
                <h4 className="text-xl font-semibold mb-2">Our Commitment</h4>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  To drive India's human capital innovation through data-led
                  empowerment
                </p>
                <Button
                  size="lg"
                  as={Link}
                  href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                  target="_blank"
                  className="bg-gradient-to-r from-[#F6C04A] to-[#F2B233] text-black font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-300"
                >
                  Become a Partner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

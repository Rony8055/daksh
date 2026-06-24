import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/banner.jpg";
import { Button } from "@heroui/button";
import { Navbar } from "./navbar";
import Link from "next/link";
import AutoCarousel from "./AutoCarousel";

const HeroSection = () => {
  return (
    <>
    <section
      id="home"
      className="relative lg:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <Navbar />
        <div
          className="absolute inset-0 bg-gradient-to-b 
          from-[#0F3D3E]/80 
          via-[#0F3D3E]/60 
          to-[#0F3D3E]/90"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gold/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float delay-200" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-coral/20 rounded-full blur-2xl animate-float delay-400" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in-down">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-xs sm:text-sm font-medium">
              Assessment Partner for SPARK Collective
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground sm:mb-4 animate-fade-in-up">
            Shakti ki Disha
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gradient mb-6 animate-fade-in-up delay-100 text-yellow-500">
            Discover Your True Potential
          </h2>

          {/* Sub-headline */}
          <p className="sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Scientifically validated assessments that decode your innate
            intelligence, strengths, and leadership potential. lorem-1000
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button
              size="lg"
              as={Link}
              href="https://media-daksh.sfo3.digitaloceanspaces.com/media/1780381121257-Final%20Daksh%20app%20video.mp4"
              target="_blank"
              className="font-semibold bg-gradient-to-r from-[#F6C04A] to-[#F2B233]
                text-black px-8 py-6 text-lg
                hover:shadow-[0_0_25px_rgba(246,192,74,0.6)]
                transition-all duration-300"
            >
              Start Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="bordered"
              as={Link}
              href="https://media-daksh.sfo3.digitaloceanspaces.com/media/1780381121257-Final%20Daksh%20app%20video.mp4"
              target="_blank"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 animate-fade-in-up delay-500">
            {[
              { value: "85%", label: "Profiling Accuracy" },
              { value: "1,00,000+", label: "Individuals Impacted" },
              { value: "100+", label: "Partner Institutions" },
              { value: "10 min", label: "Assessment Time" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 text-yellow-500">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-yellow-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
    <AutoCarousel /></>
  );
};

export default HeroSection;

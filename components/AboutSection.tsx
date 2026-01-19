import {
  Brain,
  Target,
  LineChart,
  Shield,
  Users,
  Sparkles,
} from "lucide-react";

const AboutSection = () => {
  const sciences = [
    {
      icon: Brain,
      title: "Dermatoglyphics Analysis",
      desc: "Scientific fingerprint pattern analysis",
    },
    {
      icon: Target,
      title: "Cognitive Mapping",
      desc: "Understanding thought patterns",
    },
    {
      icon: LineChart,
      title: "Emotional Intelligence",
      desc: "EQ assessment and indicators",
    },
    {
      icon: Shield,
      title: "Decision Making",
      desc: "Behavioral tendency analysis",
    },
    {
      icon: Users,
      title: "Personality Profiling",
      desc: "In-depth character assessment",
    },
    {
      icon: Sparkles,
      title: "Aptitude Testing",
      desc: "Natural ability identification",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-24 bg-cream relative overflow-hidden sm:px-18"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4 block">
            About DAKSH
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-6">
            Decode Your{" "}
            <span className="text-yellow-500">Innate Intelligence</span>
          </h2>
          <p className="text-slate-500 sm:text-lg">
            DAKSH is a pioneering assessment and counseling platform designed to
            decode an individual's innate intelligence, behavioral tendencies,
            and cognitive strengths through scientifically validated methods.
          </p>
        </div>

        {/* What is DAKSH */}
        <div className="bg-white shadow-xl shadow-black/5 rounded-2xl p-6 md:p-12 mb-16 max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-4">
            What is DAKSH?
          </h3>
          <p className="text-slate-500 sm:text-lg leading-relaxed">
            DAKSH is a scientific, data-driven assessment system that combines{" "}
            <span className="text-teal-700 font-semibold">
              Dermatoglyphics (DMIT)
            </span>{" "}
            with{" "}
            <span className="text-yellow-500 font-semibold">
              aptitude and psychometric analytics
            </span>{" "}
            to reveal your innate strengths, learning patterns, and growth
            pathways. By integrating multiple assessment methodologies, DAKSH
            provides a 360-degree understanding of human potential.
          </p>
        </div>

        {/* Science Behind */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-4 sm:mb-10">
            The Science Behind DAKSH
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sciences.map((science, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-xl shadow-black/5 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#EEF5F2] to-[#F7F4EB] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <science.icon className="w-6 h-6 text-teal-700" />
                </div>
                <h4 className="font-semibold text-black mb-0 sm:mb-2">
                  {science.title}
                </h4>
                <p className="text-gray-400 text-sm">{science.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-gradient-to-r from-[#2C7F6F] to-[#3A9C8B] rounded-2xl p-6 sm:p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-2 sm:mb-4">Our Mission</h3>
            <p className="text-primary-foreground/90 text-sm sm:text-md leading-relaxed">
              To empower individuals with scientific self-awareness that leads
              to informed decisions, stronger leadership, and meaningful life
              choices.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#F6C04A] to-[#F2B233] rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-black mb-2 sm:mb-4">
              Our Vision
            </h3>
            <p className="text-black/80 text-sm sm:text-md  leading-relaxed">
              To make scientific human potential analysis accessible,
              actionable, and transformative for every household, institution,
              and organization in India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

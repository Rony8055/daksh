import {
  Briefcase,
  GraduationCap,
  Users,
  Building2,
  Wrench,
} from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description:
      "Build confidence, understand strengths, and make better business decisions with data-driven insights.",
    benefits: [
      "Business decision clarity",
      "Leadership development",
      "Risk assessment",
    ],
    color: "bg-gradient-to-r from-[#1F7A66] to-[#2FA89A]",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Discover the right stream, career path, and learning style aligned with your natural abilities.",
    benefits: [
      "Career guidance",
      "Stream selection",
      "Learning style optimization",
    ],
    color: "bg-gradient-to-r from-[#E7B64C] to-[#F2C66A]",
  },
  {
    icon: Users,
    title: "Parents",
    description:
      "Understand your child's natural potential and support them with personalized nurturing strategies.",
    benefits: [
      "Child development insights",
      "Parenting guidance",
      "Talent identification",
    ],
    color: "bg-gradient-to-r from-[#F08A4B] to-[#F2B24C]",
  },
  {
    icon: Building2,
    title: "Professionals",
    description:
      "Improve leadership, productivity, and workplace performance through self-awareness.",
    benefits: [
      "Performance optimization",
      "Career advancement",
      "Team dynamics",
    ],
    color: "bg-gradient-to-r from-[#2FA89A] to-[#1F7A66]",
  },
  {
    icon: Wrench,
    title: "Corporates & CSR",
    description:
      "Use DAKSH as a scalable tool for employee empowerment, skilling, and human capital initiatives.",
    benefits: ["Workforce development", "Talent management", "CSR impact"],
    color: "bg-gradient-to-r from-[#F2B24C] to-[#E7B64C]",
  },
];

const WhoItsForSection = () => {
  return (
    <section
      id="who-its-for"
      className="py-12 sm:py-24 bg-cream relative overflow-hidden sm:px-18"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-warning/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto m-8 sm:mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4 block">
            Who Can Benefit
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-6">
            Who Is <span className="text-warning">DAKSH</span> For?
          </h2>
          <p className="text-gray-500 sm:text-lg">
            From students to entrepreneurs, DAKSH empowers everyone to unlock
            their true potential
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/5 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Top Gradient Bar */}
              <div className={`h-2 ${audience.color}`} />

              <div className="p-6 sm:p-8">
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${audience.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <audience.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-black mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm sm:text-md text-gray-500 mb-6">
                  {audience.description}
                </p>

                {/* Benefits */}
                <div className="sm:space-y-2">
                  {audience.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full" />
                      <span className="text-gray-500">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;

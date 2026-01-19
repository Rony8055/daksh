import { Button } from "@heroui/button";
import { Brain, Heart, TrendingUp, MessageCircle } from "lucide-react";
import Link from "next/link";

const benefitCategories = [
  {
    icon: Brain,
    title: "Cognitive Benefits",
    color: "bg-gradient-to-br from-[#1F7A66] to-[#2FA89A]",
    bgColor: "bg-[#1F7A66]/5",
    benefits: [
      "Identify natural strengths",
      "Understand learning styles",
      "Improve decision-making",
      "Enhance problem-solving abilities",
    ],
  },
  {
    icon: Heart,
    title: "Emotional Benefits",
    color: "bg-gradient-to-br from-[#F08A4B] to-[#F2B24C]",
    bgColor: "bg-[#F08A4B]/5",
    benefits: [
      "Build confidence",
      "Reduce confusion and stress",
      "Strengthen self-awareness",
      "Develop emotional intelligence",
    ],
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurial Benefits",
    color: "bg-gradient-to-br from-[#E7B64C] to-[#F2C66A]",
    bgColor: "bg-[#E7B64C]/5",
    benefits: [
      "Smarter business choices",
      "Better leadership skills",
      "Clarity on role & direction",
      "Strategic decision making",
    ],
  },
  {
    icon: MessageCircle,
    title: "Social Benefits",
    color: "bg-gradient-to-br from-[#2FA89A] to-[#C6B34E]",
    bgColor: "bg-[#2FA89A]/5",
    benefits: [
      "Enhanced communication",
      "Better teamwork skills",
      "Stronger relationships",
      "Improved collaboration",
    ],
  },
];

const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="py-12 sm:py-24 relative bg-gray-50 sm:px-18"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4 block">
            Why Choose DAKSH
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-6">
            Benefits of <span className="text-warning">DAKSH</span>
          </h2>
          <p className="text-gray-500 sm:text-lg">
            Because your potential deserves data — not guesswork
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {benefitCategories.map((category, index) => (
            <div
              key={index}
              className={`group ${category.bgColor} rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-elevated transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  {category.title}
                </h3>
              </div>

              {/* Benefits List */}
              <ul className="space-y-2 sm:space-y-4">
                {category.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <svg
                        className="w-3 h-3 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-black">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#2C7F6F] to-[#3A9C8B] text-primary-foreground rounded-2xl p-6 sm:p-8">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Ready to unlock your potential?
              </h3>
              <p className="text-primary-foreground/80 text-sm sm:text-md">
                Join 1,00,000+ individuals who discovered their strengths
              </p>
            </div>
            <Button
              as={Link}
              href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
              target="_blank"
              className="bg-gradient-to-r from-[#F6C04A] to-[#F2B233] font-semibold px-8 py-7"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

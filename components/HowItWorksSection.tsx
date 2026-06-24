import { Button } from "@heroui/button";
import { Download, UserCheck, FileText, Video, Award } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download App",
    description: "Get the DAKSH app from Play Store or App Store",
    color: "bg-gradient-to-br from-[#1F7A66] to-[#2FA89A]",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Register & Verify",
    description: "Sign up with OTP verification to create your profile",
    color: "bg-gradient-to-br from-[#E7B64C] to-[#F2C66A]",
  },
  {
    icon: FileText,
    step: "03",
    title: "Complete Assessment",
    description: "Take the comprehensive 10-minute scientific assessment",
    color: "bg-gradient-to-br from-[#F08A4B] to-[#F2B24C]",
  },
  {
    icon: Video,
    step: "04",
    title: "Get Your Report",
    description:
      "Receive your detailed personalized potential report instantly",
    color: "bg-gradient-to-br from-[#4FAF90] to-[#C6B34E]",
  },
  {
    icon: Award,
    step: "05",
    title: "Counseling (Optional)",
    description: "Connect with experts for personalized guidance",
    color: "bg-gradient-to-br from-[#F2B24C] to-[#F08A4B]",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-24 relative sm:px-18 bg-gray-50 scroll-mt-24"
    >
      <div className="container bg-[fbfaf9] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4 block">
            Simple Process
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-6">
            How <span className="text-yellow-500">DAKSH</span> Works
          </h2>
          <p className="text-gray-500 sm:text-lg">
            Your journey to self-discovery is just 5 simple steps away
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-coral -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-white h-65 rounded-2xl p-4 sm:p-6 shadow-xl shadow-black/5 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 text-center">
                  {/* Step Number */}
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step Badge */}
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-teal-700 mb-3">
                    Step {step.step}
                  </span>

                  <h3 className="font-bold text-black text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </div>

                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">
            Ready to discover your potential?
          </p>
          <Button
            className="bg-gradient-to-r from-[#F6C04A] to-[#F2B233] font-semibold py-7 px-8"
            size="lg"
            radius="full"
            as={Link}
            href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
            target="_blank"
          >
            <Download className="w-5 h-5" />
            Download DAKSH App
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

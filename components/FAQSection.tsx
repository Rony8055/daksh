"use client";

import { Accordion, AccordionItem, Button } from "@heroui/react";

const faqs = [
  {
    question: "What is DAKSH?",
    answer:
      "DAKSH is a scientific assessment tool combining DMIT (Dermatoglyphics Multiple Intelligence Test), aptitude, and psychometric analytics to identify innate strengths and capabilities. It provides a comprehensive 360-degree understanding of an individual's potential.",
  },
  {
    question: "Is the assessment accurate?",
    answer:
      "Yes — DAKSH uses scientifically validated methods with 85%+ profiling accuracy. Our assessment methodology is backed by research in dermatoglyphics, cognitive science, and behavioral psychology.",
  },
  {
    question: "Who can benefit from DAKSH?",
    answer:
      "Entrepreneurs, students, professionals, parents, educational institutions, and corporates can all benefit from DAKSH. Anyone seeking clarity about their innate potential and looking to make informed decisions about their career, education, or personal growth can use DAKSH.",
  },
  {
    question: "Is counseling included?",
    answer:
      "Counseling is optional and available on request. After receiving your report, you can choose to connect with our expert counselors for personalized guidance and action planning.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. DAKSH follows stringent data protection protocols and industry-standard security measures. Your personal information and assessment data are encrypted and never shared with third parties without your consent.",
  },
  {
    question: "How long does the assessment take?",
    answer:
      "The entire assessment and report generation takes approximately 10 minutes. Counseling (if opted for) duration depends on individual requirements and can range from 30 minutes to an hour.",
  },
  {
    question: "How soon do I get results?",
    answer:
      "Reports are generated instantly or within the same day. Once you complete the assessment, your comprehensive potential report is delivered directly to your registered email and app dashboard.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 sm:py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4 block">
            Got Questions?
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-6">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-gray-500 sm:text-lg">
            Find answers to common questions about DAKSH
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion variant="splitted">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index + 1}
                aria-label={`Accordion ${index + 1}`}
                title={<span className="font-semibold">{faq?.question}</span>}
                className="mb-2 text-sm text-slate-500 leading-relaxed"
                classNames={{
                  base: "bg-white shadow-sm",
                  title: "text-black",
                  content: "py-4",
                }}
              >
                {faq?.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-black mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-500 mb-4 text-sm sm:text-md">
              Can't find the answer you're looking for? Our team is here to
              help.
            </p>
            <Button
              size="lg"
              radius="lg"
              //   href="#contact"
              className="text-white inline-flex items-center gap-2 bg-gradient-to-r from-[#2C7F6F] to-[#3A9C8B] font-semibold px-6 py-3 rounded-lg hover:shadow-elevated transition-all duration-300"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

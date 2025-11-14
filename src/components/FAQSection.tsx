"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-[#393E4B] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:opacity-80 transition-opacity"
      >
        <h3 className="font-['Sora',sans-serif] text-[16px] md:text-[18px] text-white pr-4">
          {question}
        </h3>
        <div className="shrink-0 mt-1">
          {isOpen ? (
            <Minus size={20} className="text-white" />
          ) : (
            <Plus size={20} className="text-white" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 pr-12">
          <p className="font-['Sora',sans-serif] text-[14px] md:text-[15px] text-[#b2b2b2] leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Pixel understand my brand voice?",
      answer: "Pixel analyzes your existing content, learns from your writing style, and adapts to your unique tone. You'll also answer 2-3 strategic questions weekly to share your perspective, ensuring every piece sounds authentically like you."
    },
    {
      question: "What platforms does Pixel support?",
      answer: "Pixel creates content for LinkedIn, X (Twitter), Instagram, TikTok, and can also generate long-form content like blog posts, podcast scripts, and video content. Our Growth plan includes all relevant platforms for your business."
    },
    {
      question: "How much time do I need to spend on this?",
      answer: "Minimal. You'll spend about 15-20 minutes per week answering strategic questions and reviewing content batches. Pixel handles all the research, trend monitoring, and content creation—you just provide your unique insights."
    },
    {
      question: "Can I customize the content before publishing?",
      answer: "Absolutely. All content is fully editable. You'll receive weekly batches that you can approve, edit, or request revisions on before publishing. Think of Pixel as your first draft specialist."
    },
    {
      question: "What's included in the 90-day money back guarantee?",
      answer: "If you don't see measurable results by day 90—whether that's increased engagement, new opportunities, or pipeline growth—we refund months 2 and 3. No questions asked. We're that confident in the system."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can start immediately. After signing up, you'll complete a brief onboarding questionnaire, and our AI agents will begin researching your market within 24 hours. Your first content batch will be ready within one week."
    }
  ];

  return (
    <section id="faqs" className="relative scroll-mt-12 lg:scroll-mt-20">
      <div className="w-full">
        {/* Main Content - Dark background */}
        <div className="bg-[rgb(16,17,24)] max-w-7xl mx-auto px-6 md:px-12 lg:pl-16 lg:pr-24 py-16 md:py-24">
          {/* Header with label */}
          <div className="mb-8">
            <p className="font-['Sora',sans-serif] text-[10px] text-white uppercase tracking-wider">
              FAQs
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[#393E4B] mb-12" />

          {/* Main Headline */}
          <div className="mb-16">
            <h2
              className="text-[32px] md:text-[48px] leading-tight text-white max-w-3xl"
              style={{ fontFamily: "'HvDTrial Livory', serif" }}
            >
              Everything you need to know
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 pt-12 border-t border-[#393E4B]">
            <p className="font-['Sora',sans-serif] text-[14px] text-[#b2b2b2] mb-4">
              Still have questions?
            </p>
            <a 
              href="#" 
              className="font-['Sora',sans-serif] text-[16px] text-white underline hover:text-[#b2b2b2] transition-colors"
            >
              Get in touch with our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

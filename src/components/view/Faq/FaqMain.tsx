"use client"; // Add this at the very top of the file

import { useState } from "react";

const FaqMain: React.FC = () => {
  const faqs = [
    { question: "Quality services provided at affordable rates ?", answer: "We offer affordable and quality services that cater to your business needs." },
    { question: "Minimum prices for the maximum output Advertise anything ?", answer: "We ensure cost-effective advertising solutions for maximum results." },
    { question: "From the lowest to the highest in advertising services ?", answer: "We cover all advertising tiers to meet your expectations and requirements." },
    { question: "Advertising that makes all the difference Leaping boundaries?", answer: "Our innovative strategies take your brand to the next level." },
    { question: "Experience Digital Marketing Craftsmanship ?", answer: "Our team delivers top-notch craftsmanship in digital marketing services." },
    { question: "Simplifying Digital Marketing Excellence Advertise anything ?", answer: "We make digital marketing simple yet highly effective for your goals." },
    { question: "The innovative ideas you would love Evolution of brilliant ?", answer: "We create ideas that transform your brand into something brilliant." },
    { question: "The agency of something creative We play creativity ?", answer: "Our creative agency thrives on delivering exceptional and unique solutions." },
    { question: "Unleash the Potential of Digital Marketing ?", answer: "We help you unlock the power of digital marketing for your business growth." },
    { question: "Be Part of the Digital Marketing Revolution ?", answer: "Join the revolution and elevate your business to new heights." },
    { question: "Weave Brand Stories that Resonate and Drive ?", answer: "Our campaigns craft brand stories that resonate deeply with audiences." },
    { question: "Weave Brand Stories that Resonate and Drive ?", answer: "Our campaigns craft brand stories that resonate deeply with audiences." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#121212] text-white py-16">
    <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`relative border ${
              activeIndex === index ? "border-red-500" : "border-gray-700"
            } rounded-lg overflow-hidden shadow-lg`}
          >
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                activeIndex === index ? "text-red-500" : "text-white"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span
                className={`text-xl font-bold transform transition-transform ${
                  activeIndex === index ? "rotate-45 text-red-500" : "rotate-0 text-gray-500"
                }`}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <div className="bg-[#121212] px-4 py-3 text-white">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FaqMain;

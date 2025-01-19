"use client";

import { useState } from "react";
import Image from "next/image";

const VisionAndMission = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Convert Leads Into Raving Fans",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus vehicula lorem, in luctus enim facilisis a.",
    },
    {
      question: "Ignite Virality Rule The Market",
      answer:
        "Phasellus ultricies lorem ut nisi malesuada facilisis. Morbi nec felis in justo consectetur rutrum.",
    },
    {
      question: "Harvest Organic Growth And Spark",
      answer:
        "Curabitur suscipit ex nec libero feugiat, et interdum nunc volutpat.",
    },
    {
      question: "Data Consulting & Transformation",
      answer:
        "Nulla facilisi. Vivamus in elit vehicula, consequat justo sed, convallis libero.",
    },
    {
      question: "The Epitome Of Smart Marketing",
      answer:
        "Aenean posuere felis id est luctus tincidunt. Ut a urna facilisis, lacinia lacus id, posuere risus.",
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row items-start justify-between  p-8">
          {/* Left Side - Accordion */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Heading */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                What We Are
              </h3>
              <h2 className="text-4xl font-semibold tracking-wider">
                Our Vision & Mission
              </h2>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-l-4 border-b border-gray-700 ${
                    openIndex === index ? "border-red-500" : "border-black"
                  } pl-4`}
                >
                  <h3
                    className="flex justify-between items-center cursor-pointer text-lg font-medium"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <span className="text-red-500">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </h3>
                  {openIndex === index && (
                    <p className="text-gray-400 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Images and Design */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative">
            {/* Gray Box Container */}
            <div className="relative w-[300px] h-[400px] flex justify-center items-center rounded-lg">
              {/* Decorative Vector Image */}
              <Image
                src="https://i.postimg.cc/YqhJXFbG/Vector.png"
                alt="Decorative Vector"
                width={500}
                height={500}
                className="absolute top-0 left-0"
              />

              {/* Main Design Image */}
              <Image
                src="https://i.postimg.cc/QxwvvMy6/Group-142182.png"
                alt="Main Design"
                width={150}
                height={150}
                className="absolute bottom-2 -left-1/4 z-20"
              />

              {/* Additional Decorative Element */}
              <Image
                src="https://i.postimg.cc/pLj3vHNP/Group-656.png"
                alt="Additional Design"
                width={200}
                height={200}
                className="absolute bottom-2 -right-1/4 z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;

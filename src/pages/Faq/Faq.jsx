import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What is UBI Soft Pvtltd?",
    answer: "UBI Soft Pvtltd is a game development company dedicated to creating immersive and high-quality gaming experiences."
  },
  {
    question: "What services do you offer?",
    answer: "We offer full-cycle game development, UI/UX design, game animation, gamification experiences, and more."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact us through the contact form on our website or reach out via email at contact@ubisoft.com."
  },
  {
    question: "What platforms do you develop games for?",
    answer: "We develop games for Android, iOS, and PC platforms, with experience in Unity and other engines."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 bg-white font-['Roboto_Condensed']">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ec2028] mb-10 uppercase">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm p-4 transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg md:text-xl text-[#ec2028] font-semibold">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#ec2028] transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {activeIndex === index && (
                <p className="mt-3 text-white-600 text-base leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

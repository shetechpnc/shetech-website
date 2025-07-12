'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]); // track open FAQ indexes

  // Load FAQs on mount
  useEffect(() => {
    fetch('/assets/data.json')
      .then(res => res.json())
      .then((data: FAQItem[]) => setFaqs(data))
      .catch(console.error);
  }, []);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      // close it
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      // open it
      setOpenIndexes([...openIndexes, index]);
    }
  };

  if (faqs.length === 0) {
    return <p className="text-center mt-10">Loading FAQs...</p>;
  }

  return (
    <div>
      <div className="relative">
  <Image
    src="/assets/corner.svg"
    alt="corner design"
    width={750}
    height={500}
    className="absolute top-0 left-0 z-10 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-10 xl:-translate-x-12 w-50 h-50 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90 xl:w-[570px] xl:h-[560px]"
    sizes="(max-width: 640px) 150px, (max-width: 768px) 192px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 500px"
  />
</div>

      <div className="max-w-3xl mx-auto p-4 ">
      <h1 className="text-[20px] font-sans text-center font-normal mb-3 text-[#555555]">FREQUENTLY ASKED QUESTION</h1>
      <h1 className='text-3xl font-serif text-center mb-[50px]'>Learn More About <span className='text-[#dd47a3]'>SheTech PNC</span> Here</h1>
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div key={index} className="border rounded-[15px]  border-[#D3D3D3] shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">{isOpen ? '-' : '+'}</span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-gray-700 whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </div>
    
  );
}

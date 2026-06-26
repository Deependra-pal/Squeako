import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import FaqItem from '../shared/FaqItem';

export default function PricingFaq() {
  const faqs = [
    {
      question: 'Is there really a free plan?',
      answer: 'Yes — free forever for up to 10 members, with chat, calls, basic tasks and status. No card needed, no time limit.',
    },
    {
      question: 'What happens when I add or remove people?',
      answer: "You're billed only for active members. Add anytime and we prorate it; remove them and your next bill adjusts.",
    },
    {
      question: 'Do you offer an annual discount?',
      answer: 'Yes — annual billing effectively gives you two months free versus monthly. Switch between the two anytime.',
    },
    {
      question: 'Will I get a GST invoice?',
      answer: 'Always. Every payment comes with a GST-compliant tax invoice in INR, so you can claim input tax credit.',
    },
  ];

  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Pricing questions</Eyebrow>
            <h2 className="font-sora font-extrabold text-[clamp(1.8rem,3.8vw,2.7rem)] mt-[14px] mb-[14px] text-ink leading-tight">
              Good to know
            </h2>
          </div>
          <div className="max-w-[760px] mx-auto flex flex-col gap-[11px]">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

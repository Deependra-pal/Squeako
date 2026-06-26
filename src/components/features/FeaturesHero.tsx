import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function FeaturesHero() {
  return (
    <div className="py-20 text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <Eyebrow>Features</Eyebrow>
        <h1 className="font-sora font-extrabold text-[clamp(2.2rem,4.8vw,3.6rem)] text-ink mt-4 mb-4 leading-tight">
          Everything your team needs, <span className="bg-grad bg-clip-text text-transparent">nothing it doesn't.</span>
        </h1>
        <p className="text-[1.15rem] text-muted max-w-[620px] mx-auto leading-relaxed">
          Squeako replaces a stack of disconnected tools with one calm, fast app your whole team opens every day.
        </p>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TOOLS } from '@/config/home';
import { formatCurrency } from '@/lib/utils';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SavingsCalculator() {
  const [teamSize, setTeamSize] = useState(20);
  const [selectedTools, setSelectedTools] = useState<string[]>(['Slack', 'Zoom']);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.calc-controls',
        { x: -35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );

      gsap.fromTo('.calc-results',
        { x: 35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleToolToggle = (name: string) => {
    if (selectedTools.includes(name)) {
      setSelectedTools(selectedTools.filter((t) => t !== name));
    } else {
      setSelectedTools([...selectedTools, name]);
    }
  };

  const activeToolsData = TOOLS.filter((t) => selectedTools.includes(t.name));
  const stackPerUserMonth = activeToolsData.reduce((acc, curr) => acc + curr.price, 0);
  const oldYear = stackPerUserMonth * teamSize * 12;
  const newYear = teamSize * 99 * 12;
  const save = oldYear - newYear;
  const savePct = oldYear > 0 ? Math.round((save / oldYear) * 100) : 0;

  const sliderPct = ((teamSize - 3) / (500 - 3)) * 100;
  const sliderStyle = {
    background: `linear-gradient(90deg, #436B56 0%, #16D196 ${sliderPct}%, #1C3333 ${sliderPct}%)`,
  };

  return (
    <div ref={containerRef} className="bg-calc-section py-24 md:py-32 px-0">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8">
        {/* Head */}
        <div className="max-w-[850px] mx-auto mb-14 text-center">
          <Eyebrow>See your savings</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
            How much would your team save?
          </h2>
          <p className="text-[1.1rem] text-muted">
            Slide to your team size, pick what you use today, and watch the numbers.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="glass-panel rounded-[30px] p-6 lg:p-11 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 items-center relative z-10">
            {/* Controls */}
            <div className="flex flex-col calc-controls opacity-0">
              <label className="font-sora font-semibold text-[1.1rem] text-ink block mb-1">
                Which tools is your team paying for now?
              </label>
              <p className="text-[0.88rem] text-muted mb-4">
                Tap everything you use today — chat, video, the lot. We'll add up the stack.
              </p>

              {/* Tool Selection chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                {TOOLS.map((tool) => {
                  const isSelected = selectedTools.includes(tool.name);
                  return (
                    <button
                      key={tool.name}
                      type="button"
                      onClick={() => handleToolToggle(tool.name)}
                      className={`flex items-center gap-[10px] w-full border-2 rounded-[14px] p-[10px] px-3 cursor-pointer transition-all duration-150 text-left relative focus:outline-none ${isSelected
                        ? 'bg-[#16D196]/12 border-[#16D196] text-ink shadow-[0_0_12px_rgba(22,209,150,0.15)]'
                        : 'bg-white/5 border-hairline hover:border-[#16D196]/45 hover:bg-white/8 text-muted hover:text-ink'
                        }`}
                    >
                      <span
                        className="w-7 h-7 rounded-md grid place-items-center text-white text-[0.88rem] font-bold flex-none"
                        style={{ backgroundColor: typeof tool.logo === 'string' ? tool.color : 'transparent' }}
                      >
                        {tool.logo}
                      </span>
                      <span className="flex flex-col pr-6">
                        <b className="font-sora text-[0.84rem] block leading-tight text-ink">
                          {tool.name}
                        </b>
                        <i className="not-italic text-[0.7rem] text-muted block mt-0.5">
                          {tool.plan} · ₹{tool.price.toLocaleString('en-IN')}
                        </i>
                      </span>
                      <span
                        className={`absolute right-3 top-1/2 -translate-y-1/2 text-[0.95rem] font-black text-mint transition-opacity duration-150 ${isSelected ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        ✓
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Team Size Slider */}
              <div className="mt-8 flex flex-col gap-3">
                <label className="font-sora font-semibold text-ink flex items-center">
                  Team size:{' '}
                  <span className="text-[#16D196] font-bold text-[1.15rem] ml-1.5 font-sora">
                    {teamSize} {teamSize === 1 ? 'person' : 'people'}
                  </span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="500"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                  style={sliderStyle}
                  className="w-full h-[6px] rounded-lg appearance-none cursor-pointer outline-none transition-all accent-[#16D196] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[26px] [&::-webkit-slider-thumb]:h-[26px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-[#16D196] [&::-webkit-slider-thumb]:shadow-[0_4px_12px_rgba(22,209,150,0.4)] [&::-moz-range-thumb]:w-[22px] [&::-moz-range-thumb]:h-[22px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-[#16D196]"
                />
              </div>
              <p className="text-[0.78rem] text-muted mt-5 text-left">
                Squeako Growth is a flat ₹99/user/month — and it replaces every tool above.
              </p>
            </div>

            {/* Result Display Box */}
            <div className="card-premium p-[26px] flex flex-col gap-3 calc-results opacity-0">
              <div className="flex flex-col gap-2 mb-[14px]">
                {selectedTools.length > 0 ? (
                  activeToolsData.map((tool) => (
                    <div className="flex justify-between items-center text-[0.88rem] border-b border-white/5 py-1.5 last:border-0" key={tool.name}>
                      <span className="flex items-center gap-[7px] text-ink font-semibold">
                        <i className="w-2 h-2 rounded-full flex-none" style={{ backgroundColor: tool.color }}></i>
                        {tool.name} <small className="text-[0.7rem] text-muted font-normal">({tool.plan})</small>
                      </span>
                      <span className="font-sora font-semibold text-ink">
                        {formatCurrency(tool.price * teamSize * 12)}/yr
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-[0.88rem] text-muted text-center py-4">
                    Select the tools your team pays for above.
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center py-2.5 border-t border-white/10 pt-3.5">
                <span className="text-[0.85rem] text-muted font-semibold">Your stack today (per year)</span>
                <span className="font-sora font-bold text-[1.15rem] text-ink">{formatCurrency(oldYear)}</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-t border-white/5">
                <span className="text-[0.85rem] text-muted font-semibold">With Squeako (per year)</span>
                <span className="font-sora font-bold text-[1.15rem] text-mint-deep">{formatCurrency(newYear)}</span>
              </div>

              {/* Savings Highlight */}
              <div className="bg-gradient-to-r from-[#1FA968]/15 to-[#16D196]/15 border border-[#16D196]/30 rounded-[16px] p-[20px] text-center mt-3 shadow-[0_0_15px_rgba(22,209,150,0.05)]">
                <div className="font-sora font-extrabold text-[2.2rem] text-mint-deep leading-none">
                  {formatCurrency(save > 0 ? save : 0)}
                </div>
                <div className="font-space-mono text-[0.68rem] tracking-[0.08em] uppercase text-mint-deep font-bold mt-1.5">
                  saved every year
                </div>
                <div className="text-[0.84rem] text-muted font-medium mt-1">
                  {oldYear > 0 ? `that's ${savePct}% less` : 'pick your tools above'}
                </div>
              </div>

              <p className="text-[0.7rem] text-muted text-center mt-2.5">
                Indicative standard-plan prices (per user/month, billed annually, before GST, ~2026). Your actual plans may differ.
              </p>
              <Button href="/contact" variant="primary" className="w-full mt-3.5">
                Start saving — free trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

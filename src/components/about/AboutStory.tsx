import React from 'react';

export default function AboutStory() {
  return (
    <div className="py-[13px]">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#FCEEE2] to-[#F6DCC7] border border-[#F0E1CF] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          <div className="max-w-[760px] mx-auto text-center">
            <p className="text-[1.16rem] text-muted leading-relaxed mb-4">
              We watched startups stitch together a chat app, a video tool, a task tracker and a calling add-on — paying in dollars, getting no GST invoice, waiting on support from a timezone that wasn't theirs.
            </p>
            <p className="text-[1.16rem] text-muted leading-relaxed">
              So we built one app that does it all, priced in rupees, hosted in India, supported by people who pick up during your working day. That's Squeako.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

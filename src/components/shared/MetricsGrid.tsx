import React from 'react';

interface MetricItem {
  count: string;
  suffix: string;
  label: string;
}

interface MetricsGridProps {
  metrics?: MetricItem[];
  className?: string;
}

const DEFAULT_METRICS: MetricItem[] = [
  { count: '12000', suffix: '+', label: 'Indian workspaces' },
  { count: '85', suffix: 'M+', label: 'Messages sent' },
  { count: '4', suffix: 'M+', label: 'Calls completed' },
  { count: '99', suffix: '.99%', label: 'Uptime SLA' },
];

export default function MetricsGrid({ metrics = DEFAULT_METRICS, className = '' }: MetricsGridProps) {
  return (
    <div className={`py-[13px] px-0 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#1C140B] via-[#2A1D10] to-[#0F0F0F] rounded-[30px] p-[clamp(34px,5vw,68px)] text-white relative overflow-hidden">
          {/* Background decoration matching custom variables */}
          <div className="absolute top-[-120px] right-[-90px] w-[400px] h-[400px] rounded-full bg-radial from-[#6ED190]/22 to-transparent z-0 pointer-events-none"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 text-center z-10 relative">
            {metrics.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div
                  className="font-sora font-extrabold text-[clamp(2rem,4vw,3rem)] text-white leading-none"
                  data-count={item.count}
                  data-suffix={item.suffix}
                >
                  {parseInt(item.count).toLocaleString('en-IN')}
                  {item.suffix}
                </div>
                <div className="text-[0.95rem] text-muted-lt font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

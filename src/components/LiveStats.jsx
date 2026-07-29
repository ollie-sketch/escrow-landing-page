import { useEffect, useRef, useState } from 'react';

const STATS = {
  buyer: [
    { label: 'Held safely in escrow', value: 2400000, prefix: '$', suffix: '+', display: (n) => `$${(n / 1000000).toFixed(1)}M` },
    { label: 'Protected buyers', value: 15000, suffix: '+' },
    { label: 'Successful deliveries', value: 98, suffix: '%' },
    { label: 'Disputes resolved', value: 1240, suffix: '+' },
  ],
  vendor: [
    { label: 'Paid out to vendors', value: 2400000, display: (n) => `$${(n / 1000000).toFixed(1)}M` },
    { label: 'Active vendors', value: 3200, suffix: '+' },
    { label: 'On-time payouts', value: 99, suffix: '%' },
    { label: 'Avg. payout time', value: 2, suffix: ' days', noCommas: true },
  ],
};

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    if (!active) return undefined;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out for a natural deceleration into the final number
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, target, duration]);

  return value;
}

function StatCard({ stat, active }) {
  const count = useCountUp(stat.value, active);
  const formatted = stat.display
    ? stat.display(count)
    : stat.noCommas
    ? count
    : count.toLocaleString();

  return (
    <div className="border border-line bg-panel p-6 text-center">
      <p className="font-display text-3xl font-semibold text-signal sm:text-4xl">
        {stat.prefix && !stat.display ? stat.prefix : ''}
        {formatted}
        {stat.suffix || ''}
      </p>
      <p className="plate-label mt-3 text-mute">{stat.label}</p>
    </div>
  );
}

export default function LiveStats({ variant = 'buyer' }) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const stats = STATS[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-b border-line bg-base" aria-label="Live platform statistics">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-moss animate-pulse-dot" aria-hidden="true" />
          <p className="plate-label text-moss">Live platform statistics</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}

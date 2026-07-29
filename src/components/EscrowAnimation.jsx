import { useEffect, useRef, useState } from 'react';

const STEPS = [
  { key: 'pay', label: 'Buyer pays', detail: 'Funds leave the buyer\u2019s account.' },
  { key: 'hold', label: 'Held in escrow', detail: 'Holdfast reserves the funds. No one can touch them yet.' },
  { key: 'ship', label: 'Vendor ships', detail: 'The vendor sends the order, confident payment is secured.' },
  { key: 'confirm', label: 'Buyer confirms', detail: 'Buyer marks the order received and as described.' },
  { key: 'release', label: 'Funds released', detail: 'Payment moves to the vendor. Done.' },
];

/**
 * Auto-cycling step tracker with a crate icon that slides along a steel track.
 * Cycles automatically once in view; pauses entirely if the user prefers reduced motion.
 */
export default function EscrowAnimation({ variant = 'buyer' }) {
  const [activeStep, setActiveStep] = useState(0);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reducedMotion) return undefined;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [inView, reducedMotion]);

  return (
    <section
      id="escrow-flow"
      ref={sectionRef}
      className="border-b border-line bg-panel"
      aria-label="How the escrow process moves funds from buyer to vendor"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="plate-label mb-3 text-amber">The escrow process</p>
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
          Money moves in five checked stages
        </h2>
        <p className="mt-4 max-w-xl text-mute">
          {variant === 'buyer'
            ? 'Watch where your payment sits at every stage \u2014 it never reaches the vendor until you say it should.'
            : 'Watch exactly when payment is reserved and when it lands in your account.'}
        </p>

        {/* Cargo-tag timeline: a dashed shipping route with a hole-punch marker per stop,
            and an ink stamp that lands on each stage as it's reached — echoes the hero's waybill. */}
        <div className="relative mt-16 hidden sm:block">
          <div
            className="absolute left-0 right-0 top-[15px] border-t-2 border-dashed border-line"
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-5 gap-2">
            {STEPS.map((step, i) => {
              const reached = i <= activeStep;
              const isActive = i === activeStep;
              return (
                <button
                  key={step.key}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  aria-pressed={isActive}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Hole-punch marker on the route line */}
                  <span
                    aria-hidden="true"
                    className={`z-10 mb-4 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-panel transition-colors ${
                      reached ? 'border-moss' : 'border-line group-hover:border-steel'
                    }`}
                  >
                    {reached && (
                      <svg className="h-3.5 w-3.5 text-moss" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                      </svg>
                    )}
                  </span>

                  <div
                    className={`w-full border px-2 py-3 transition-colors ${
                      isActive ? 'border-signal bg-signal/10' : 'border-line bg-transparent group-hover:border-steel'
                    }`}
                  >
                    <span className="plate-label block text-mute">Stop {i + 1}</span>
                    <span
                      className={`mt-1 block font-display text-sm font-semibold uppercase tracking-wide ${
                        isActive ? 'text-signal' : 'text-ink'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile: stacked manifest list, no horizontal route */}
        <div className="mt-10 space-y-3 sm:hidden">
          {STEPS.map((step, i) => {
            const reached = i <= activeStep;
            return (
              <div
                key={step.key}
                className={`flex items-center gap-3 border p-4 ${
                  i === activeStep ? 'border-signal bg-signal/10' : 'border-line'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                    reached ? 'border-moss' : 'border-line'
                  }`}
                >
                  {reached && (
                    <svg className="h-3 w-3 text-moss" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                    </svg>
                  )}
                </span>
                <div>
                  <span className="plate-label block text-mute">Stop {i + 1}</span>
                  <span className="mt-0.5 block font-display text-sm font-semibold uppercase tracking-wide text-ink">
                    {step.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 border border-line bg-base p-6" role="status" aria-live="polite">
          <p className="font-mono text-sm text-signal">{STEPS[activeStep].label}</p>
          <p className="mt-2 text-mute">{STEPS[activeStep].detail}</p>
        </div>
      </div>
    </section>
  );
}

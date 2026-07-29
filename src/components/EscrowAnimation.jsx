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

  const trackPositions = ['4%', '25%', '47%', '69%', '90%'];

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

        {/* Track */}
        <div className="relative mt-16 hidden sm:block">
          <div className="relative h-1 w-full bg-line" aria-hidden="true">
            <div
              className="absolute -top-[7px] h-4 w-4 rounded-sm border-2 border-signal bg-base transition-all duration-700 ease-in-out"
              style={{ left: trackPositions[activeStep] }}
            />
          </div>
          <div className="mt-6 grid grid-cols-5 gap-2">
            {STEPS.map((step, i) => (
              <button
                key={step.key}
                type="button"
                onClick={() => setActiveStep(i)}
                aria-pressed={i === activeStep}
                className={`border px-2 py-3 text-left transition-colors ${
                  i === activeStep
                    ? 'border-signal bg-signal/10'
                    : 'border-line bg-transparent hover:border-steel'
                }`}
              >
                <span className="plate-label block text-mute">Stage {i + 1}</span>
                <span
                  className={`mt-1 block font-display text-sm font-semibold uppercase tracking-wide ${
                    i === activeStep ? 'text-signal' : 'text-ink'
                  }`}
                >
                  {step.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: stacked list, no horizontal track */}
        <div className="mt-10 space-y-3 sm:hidden">
          {STEPS.map((step, i) => (
            <div
              key={step.key}
              className={`border p-4 ${
                i === activeStep ? 'border-signal bg-signal/10' : 'border-line'
              }`}
            >
              <span className="plate-label block text-mute">Stage {i + 1}</span>
              <span className="mt-1 block font-display text-sm font-semibold uppercase tracking-wide text-ink">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-line bg-base p-6" role="status" aria-live="polite">
          <p className="font-mono text-sm text-signal">{STEPS[activeStep].label}</p>
          <p className="mt-2 text-mute">{STEPS[activeStep].detail}</p>
        </div>
      </div>
    </section>
  );
}

const content = {
  buyer: {
    eyebrow: 'For buyers',
    title: 'Pay only when your order actually shows up.',
    body: 'Holdfast holds your payment in a secured account the moment you check out. The vendor ships. You inspect the package. Only then does the money move.',
    primaryCta: 'Start a protected purchase',
    secondaryCta: 'See how escrow works',
    stat: { value: '$2.4M+', label: 'held safely to date' },
  },
  vendor: {
    eyebrow: 'For vendors',
    title: 'Get paid on time, every time \u2014 no chasing buyers.',
    body: 'List your product, accept Holdfast as a payment option, and know the funds are already reserved before you ship a single box.',
    primaryCta: 'Start accepting Holdfast',
    secondaryCta: 'See payout timelines',
    stat: { value: '3,200+', label: 'vendors paid out' },
  },
};

export default function Hero({ variant = 'buyer' }) {
  const c = content[variant];

  return (
    <section className="relative overflow-hidden border-b border-line bg-grid-lines bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-base/0 via-base/40 to-base pointer-events-none" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="plate-label mb-4 inline-block border border-line px-3 py-1 text-amber">
            {c.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-mute">{c.body}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="border border-amber bg-amber px-6 py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-base transition-colors hover:bg-transparent hover:text-amber"
            >
              {c.primaryCta}
            </a>
            <a
              href="#escrow-flow"
              className="border border-line px-6 py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-steel hover:text-steel"
            >
              {c.secondaryCta}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-line pt-6">
            <span className="h-2 w-2 rounded-full bg-moss" aria-hidden="true" />
            <p className="font-mono text-sm text-mute">
              <span className="font-semibold text-ink">{c.stat.value}</span> {c.stat.label}
            </p>
          </div>
        </div>

        {/* Riveted "shipment plate" visual — signature motif, reused as a static panel here */}
        <div className="relative hidden items-center justify-center md:flex">
          <div className="relative w-full max-w-sm border-2 border-line bg-panel p-8">
            {['tl', 'tr', 'bl', 'br'].map((pos) => (
              <span
                key={pos}
                aria-hidden="true"
                className={`absolute h-2.5 w-2.5 rounded-full bg-line ${
                  pos === 'tl'
                    ? 'left-3 top-3'
                    : pos === 'tr'
                    ? 'right-3 top-3'
                    : pos === 'bl'
                    ? 'bottom-3 left-3'
                    : 'bottom-3 right-3'
                }`}
              />
            ))}
            <p className="plate-label text-steel">Order manifest</p>
            <div className="mt-6 space-y-4 font-mono text-sm">
              <div className="flex justify-between border-b border-line pb-3">
                <span className="text-mute">Item</span>
                <span className="text-ink">Canvas field bag</span>
              </div>
              <div className="flex justify-between border-b border-line pb-3">
                <span className="text-mute">Amount held</span>
                <span className="text-signal">$128.00</span>
              </div>
              <div className="flex justify-between border-b border-line pb-3">
                <span className="text-mute">Status</span>
                <span className="text-moss">In escrow</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mute">Release on</span>
                <span className="text-ink">Delivery confirmed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

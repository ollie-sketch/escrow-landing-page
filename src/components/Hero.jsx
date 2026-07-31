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
    <section className="relative overflow-hidden border-b border-line bg-base bg-crate">
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

        {/* Waybill / cargo-tag visual — the page's signature element, echoed later in the escrow tracker */}
        <div className="relative hidden items-center justify-center md:flex">
          <div className="relative w-full max-w-sm bg-panel bg-crate p-8 shadow-[0_0_0_2px_theme(colors.line)]">
            {/* Perforated tear-line along the top, like a detachable shipping tag */}
            <div
              aria-hidden="true"
              className="absolute -top-[7px] left-6 right-6 flex justify-between"
            >
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className="h-3.5 w-3.5 rounded-full bg-base" />
              ))}
            </div>
            {/* Clipped corner, like a printed shipping label */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-0 w-0 border-b-[22px] border-l-[22px] border-b-transparent border-l-base"
            />

            <div className="flex items-start justify-between">
              <p className="plate-label text-steel">Waybill &middot; No. HF-48291</p>
            </div>

            <div className="mt-6 space-y-4 font-mono text-sm">
              <div className="flex justify-between border-b border-dashed border-line pb-3">
                <span className="text-mute">Item</span>
                <span className="text-ink">Canvas field bag</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-line pb-3">
                <span className="text-mute">Amount held</span>
                <span className="text-signal">N128.00</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-line pb-3">
                <span className="text-mute">Route</span>
                <span className="text-ink">Vendor &rarr; Escrow &rarr; Buyer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mute">Release on</span>
                <span className="text-ink">Delivery confirmed</span>
              </div>
            </div>

            {/* Barcode flourish */}
            <div
              aria-hidden="true"
              className="mt-6 flex h-6 items-end gap-[2px] opacity-60"
            >
              {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 4, 1, 3].map((w, i) => (
                <span
                  key={i}
                  className="bg-mute"
                  style={{ width: '2px', height: `${w * 4 + 4}px` }}
                />
              ))}
            </div>

            {/* Ink stamp — rotated, imperfect, the actual signature moment */}
            <div
              aria-hidden="true"
              className="absolute -right-4 top-20 -rotate-[10deg] rounded-sm border-[3px] border-moss px-3 py-1.5 opacity-90"
              style={{ boxShadow: 'inset 0 0 0 1.5px rgba(111,143,92,0.5)' }}
            >
              <span className="font-display text-sm font-bold uppercase tracking-widest text-moss">
                Held in escrow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

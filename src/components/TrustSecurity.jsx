const copy = {
  buyer: [
    { title: 'Bank-level encryption', detail: 'Every transaction is encrypted in transit and at rest.' },
    { title: 'Funds held, not spent', detail: 'Your payment sits in a segregated account until you approve release.' },
    { title: 'Human dispute review', detail: 'If something\u2019s wrong with your order, a real reviewer looks at the case.' },
  ],
  vendor: [
    { title: 'Guaranteed payout terms', detail: 'Once a buyer confirms, payout timing is fixed \u2014 not discretionary.' },
    { title: 'Chargeback protection', detail: 'Escrow terms are agreed upfront, reducing after-the-fact reversals.' },
    { title: 'Verified buyer accounts', detail: 'Buyers pass identity checks before funds can be placed in escrow.' },
  ],
};

export default function TrustSecurity({ variant = 'buyer' }) {
  const items = copy[variant];
  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="plate-label mb-3 text-amber">Security</p>
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
          Built to be trusted with money
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="border border-line bg-base p-6">
              <span
                aria-hidden="true"
                className="mb-4 flex h-10 w-10 items-center justify-center border border-steel text-steel"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1l7 3v5c0 5-3.4 8.6-7 10-3.6-1.4-7-5-7-10V4l7-3z" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-mute">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

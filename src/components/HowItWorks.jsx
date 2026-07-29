const copy = {
  buyer: [
    { title: 'Find your item', detail: 'Shop from any vendor who accepts Holdfast at checkout.' },
    { title: 'Pay into escrow', detail: 'Your payment is reserved the moment you check out \u2014 the vendor doesn\u2019t receive it yet.' },
    { title: 'Track your order', detail: 'Get shipping updates while your funds stay held.' },
    { title: 'Confirm and release', detail: 'Once the order arrives as described, approve the release with one tap.' },
  ],
  vendor: [
    { title: 'List your product', detail: 'Add Holdfast as a payment option on your existing storefront or listing.' },
    { title: 'Buyer pays into escrow', detail: 'You get an instant notification that funds are reserved for your order.' },
    { title: 'Ship with confidence', detail: 'Send the order knowing payment won\u2019t be pulled back once it\u2019s on the way.' },
    { title: 'Get paid', detail: 'Once the buyer confirms, funds land in your payout account automatically.' },
  ],
};

export default function HowItWorks({ variant = 'buyer' }) {
  const steps = copy[variant];

  return (
    <section id="how-it-works" className="border-b border-line bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="plate-label mb-3 text-amber">How it works</p>
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
          {variant === 'buyer' ? 'From checkout to confirmation' : 'From listing to payout'}
        </h2>

        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="border border-line bg-panel p-6">
              <span className="font-mono text-xs text-steel">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-wide text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-mute">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

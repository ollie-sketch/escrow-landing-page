const copy = {
  buyer: [
    { title: 'One-tap release', detail: 'Confirm delivery and release funds in a single action.' },
    { title: 'Order timeline', detail: 'See every stage of your payment status in real time.' },
    { title: 'Buy or sell, same account', detail: 'List your own items whenever you want \u2014 no separate signup.' },
    { title: 'Multi-vendor checkout', detail: 'Pay several vendors through Holdfast without juggling apps.' },
  ],
  vendor: [
    { title: 'Instant payout notice', detail: 'Know the moment a buyer\u2019s payment is reserved for your order.' },
    { title: 'Payout dashboard', detail: 'Track pending, released, and historical payouts in one place.' },
    { title: 'Sell or buy, same account', detail: 'Source materials from other vendors using the same Holdfast balance.' },
    { title: 'Low, flat fees', detail: 'One transparent fee per transaction \u2014 no surprise deductions.' },
  ],
};

export default function FeatureGrid({ variant = 'buyer' }) {
  const items = copy[variant];
  return (
    <section className="border-b border-line bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="plate-label mb-3 text-amber">Features</p>
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
          Everything the transaction needs
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="bg-panel p-6">
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-ink">
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

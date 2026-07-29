const copy = {
  buyer: [
    {
      quote: 'I paid a vendor I\u2019d never used before without the usual gut-check. The bag arrived exactly as listed.',
      name: 'Amara O.',
      role: 'Buyer, Lagos',
    },
    {
      quote: 'Seeing "held in escrow" instead of "payment sent" changed how I felt about the whole purchase.',
      name: 'Daniel K.',
      role: 'Buyer, Abuja',
    },
    {
      quote: 'I ended up listing my own products through the same account a month later. Didn\u2019t expect that.',
      name: 'Priya S.',
      role: 'Buyer & seller, Lagos',
    },
  ],
  vendor: [
    {
      quote: 'Payout timing used to be the most stressful part of running my shop. Now it\u2019s the most predictable part.',
      name: 'Tunde A.',
      role: 'Vendor, bags & leather goods',
    },
    {
      quote: 'Buyers commit faster when they see Holdfast at checkout. Fewer abandoned carts, full stop.',
      name: 'Grace M.',
      role: 'Vendor, handmade accessories',
    },
    {
      quote: 'I use the same account to pay my own material suppliers. One less system to manage.',
      name: 'Ifeoma N.',
      role: 'Vendor & buyer',
    },
  ],
};

export default function Testimonials({ variant = 'buyer' }) {
  const items = copy[variant];
  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="plate-label mb-3 text-amber">In their words</p>
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
          People moving real transactions
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="border border-line bg-base p-6">
              <blockquote className="text-sm text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 font-mono text-xs text-mute">
                {t.name} &mdash; {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

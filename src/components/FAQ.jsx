const copy = {
  buyer: [
    {
      q: 'What happens if my order never arrives?',
      a: 'You open a case before the release window ends and your held funds are refunded once the review confirms non-delivery.',
    },
    {
      q: 'Can I also sell things through my buyer account?',
      a: 'Yes. Buyer and vendor tools live on the same account \u2014 you can list a product any time from your dashboard.',
    },
    {
      q: 'How long are funds held before automatic release?',
      a: 'By default, 7 days after delivery confirmation from the carrier, unless you confirm sooner or open a dispute.',
    },
    {
      q: 'Does the vendor see my payment details?',
      a: 'No. Vendors see only that funds are reserved for the order, never your card or account information.',
    },
  ],
  vendor: [
    {
      q: 'When exactly do I get paid?',
      a: 'As soon as the buyer confirms delivery, or automatically 7 days after carrier-confirmed delivery if they don\u2019t respond.',
    },
    {
      q: 'What if a buyer disputes the order unfairly?',
      a: 'You can submit shipping evidence and product details; a reviewer decides based on the order record, not just the buyer\u2019s claim.',
    },
    {
      q: 'Can I use Holdfast to pay my own suppliers?',
      a: 'Yes. Your vendor account includes full buyer functionality, so you can pay other vendors with the same protection.',
    },
    {
      q: 'What are the fees?',
      a: 'A single flat percentage per transaction, shown before you accept any order \u2014 no hidden deductions at payout.',
    },
  ],
};

export default function FAQ({ variant = 'buyer' }) {
  const items = copy[variant];
  return (
    <section id="faq" className="border-b border-line bg-base">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="plate-label mb-3 text-amber">FAQ</p>
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
          Common questions
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium uppercase tracking-wide text-ink">
                {item.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-amber transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-mute">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

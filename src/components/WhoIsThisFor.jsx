const copy = {
  buyer: {
    title: 'Built for people who\u2019ve been burned before',
    intro:
      'If you\u2019ve ever paid a stranger online and hoped for the best, Holdfast removes the hoping part.',
    cards: [
      {
        title: 'Online shoppers buying from independent vendors',
        detail:
          'Marketplace sellers, small studios, direct-message storefronts \u2014 anywhere you\u2019re paying someone without a store-backed guarantee.',
      },
      {
        title: 'Buyers who also sell',
        detail:
          'Plenty of Holdfast buyers list their own products too. Nothing about your account limits you to one side of a trade.',
      },
      {
        title: 'Anyone paying for a custom or made-to-order item',
        detail:
          'Longer production times mean more can go wrong before delivery. Escrow keeps your money reserved for the whole window.',
      },
    ],
  },
  vendor: {
    title: 'Built for sellers tired of payment uncertainty',
    intro:
      'If you\u2019ve shipped an order and then waited \u2014 and worried \u2014 for payment, this is for you.',
    cards: [
      {
        title: 'Independent vendors and small studios',
        detail:
          'Sell bags, goods, or made-to-order items directly to buyers without needing your own payment infrastructure.',
      },
      {
        title: 'Vendors who also buy',
        detail:
          'Sourcing materials or restocking from another vendor? Use the same Holdfast account to pay with the same protection.',
      },
      {
        title: 'Sellers scaling past word-of-mouth',
        detail:
          'As order volume grows past people you know personally, a guaranteed payout matters more, not less.',
      },
    ],
  },
};

export default function WhoIsThisFor({ variant = 'buyer' }) {
  const c = copy[variant];

  return (
    <section id="who-is-this-for" className="border-b border-line bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="plate-label mb-3 text-amber">Who is this for?</p>
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 text-lg text-mute">{c.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {c.cards.map((card) => (
            <div key={card.title} className="border border-line bg-panel p-6">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-mute">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

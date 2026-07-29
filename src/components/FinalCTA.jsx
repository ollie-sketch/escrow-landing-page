import { Link } from 'react-router-dom';

const copy = {
  buyer: {
    title: 'Ready to buy without the risk?',
    body: 'Create a Holdfast account and check out with escrow protection on your next order.',
    cta: 'Create your account',
    otherLabel: 'Prefer to sell instead?',
    otherHref: '/vendor',
    otherCta: 'Go to the vendor page',
  },
  vendor: {
    title: 'Ready to get paid on your terms?',
    body: 'Add Holdfast as a payment option and start shipping with your payout already reserved.',
    cta: 'Start accepting Holdfast',
    otherLabel: 'Need to buy something instead?',
    otherHref: '/buyer',
    otherCta: 'Go to the buyer page',
  },
};

export default function FinalCTA({ variant = 'buyer' }) {
  const c = copy[variant];
  return (
    <section id="get-started" className="bg-panel">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
          {c.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-mute">{c.body}</p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="#"
            className="border border-amber bg-amber px-8 py-3 font-display text-sm font-semibold uppercase tracking-wide text-base transition-colors hover:bg-transparent hover:text-amber"
          >
            {c.cta}
          </a>
          <p className="text-sm text-mute">
            {c.otherLabel}{' '}
            <Link to={c.otherHref} className="text-steel underline decoration-dotted hover:text-signal">
              {c.otherCta}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

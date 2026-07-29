import { Link } from 'react-router-dom';

export default function Footer({ variant = 'buyer' }) {
  const isBuyer = variant === 'buyer';
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center border-2 border-amber text-amber font-display text-sm font-bold"
              >
                H
              </span>
              <span className="font-display text-base font-semibold uppercase tracking-wide">
                Holdfast
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-mute">
              Payment held safely between order and delivery. Built for people who buy
              and people who sell &mdash; often both.
            </p>
            <p className="mt-6 plate-label">
              <Link
                to={isBuyer ? '/vendor' : '/buyer'}
                className="text-steel hover:text-signal"
              >
                {isBuyer ? 'Switch to vendor view \u2192' : 'Switch to buyer view \u2192'}
              </Link>
            </p>
          </div>

          <div>
            <h3 className="plate-label mb-4 text-ink">Product</h3>
            <ul className="space-y-2 text-sm text-mute">
              <li><a href="#how-it-works" className="hover:text-ink">How it works</a></li>
              <li><a href="#compare" className="hover:text-ink">Escrow vs. direct</a></li>
              <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="plate-label mb-4 text-ink">Company</h3>
            <ul className="space-y-2 text-sm text-mute">
              <li><a href="#" className="hover:text-ink">About</a></li>
              <li><a href="#" className="hover:text-ink">Careers</a></li>
              <li><a href="#" className="hover:text-ink">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="plate-label mb-4 text-ink">Legal</h3>
            <ul className="space-y-2 text-sm text-mute">
              <li><a href="#" className="hover:text-ink">Terms of service</a></li>
              <li><a href="#" className="hover:text-ink">Privacy policy</a></li>
              <li><a href="#" className="hover:text-ink">Dispute policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-mute md:flex-row md:items-center">
          <p>&copy; {year} Holdfast, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

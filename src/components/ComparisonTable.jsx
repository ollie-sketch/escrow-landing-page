const ROWS = [
  {
    label: 'Payment protection',
    direct: false,
    escrow: true,
  },
  {
    label: 'Refund if item never arrives',
    direct: false,
    escrow: true,
  },
  {
    label: 'Funds released only after confirmation',
    direct: false,
    escrow: true,
  },
  {
    label: 'Built-in dispute resolution',
    direct: false,
    escrow: true,
  },
  {
    label: 'Guaranteed vendor payout',
    direct: 'Depends on buyer',
    escrow: true,
  },
  {
    label: 'Fraud risk',
    direct: 'Borne by one side',
    escrow: 'Shared, monitored',
  },
];

function Indicator({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-2 text-moss">
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
        </svg>
        <span className="text-sm">Yes</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-2 text-rust">
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-sm">No</span>
      </span>
    );
  }
  return <span className="text-sm text-mute">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section id="compare" className="border-b border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="plate-label mb-3 text-amber">Direct payment vs. escrow</p>
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
          The difference is where the risk sits
        </h2>
        <p className="mt-4 max-w-xl text-mute">
          Paying a vendor directly puts the risk entirely on whoever moves first. Holdfast
          splits that risk with a neutral, reserved balance.
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">
              Comparison of direct payment and escrow payment across six criteria
            </caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="py-4 pr-4 plate-label font-normal text-mute">
                  Criteria
                </th>
                <th scope="col" className="py-4 px-4 plate-label font-normal text-mute">
                  Direct payment
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 plate-label font-normal text-signal border-x border-signal/40 bg-signal/5"
                >
                  Holdfast escrow
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-line/60">
                  <th scope="row" className="py-4 pr-4 text-sm font-medium text-ink">
                    {row.label}
                  </th>
                  <td className="py-4 px-4">
                    <Indicator value={row.direct} />
                  </td>
                  <td className="py-4 px-4 border-x border-signal/40 bg-signal/5">
                    <Indicator value={row.escrow} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

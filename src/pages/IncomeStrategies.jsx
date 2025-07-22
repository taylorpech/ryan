export default function IncomeStrategies() {
  const strategies = [
    {
      title: "Digital Auction Expansion",
      description: (
        <>
          Launch an AI‑driven online auction platform, drawing mainland buyers for
          Hawaiian cars, with real‑time analytics and premium listings.
        </>
      )
    },
    {
      title: "Mainland Dealership Partnership",
      description: (
        <>
          Partner or invest in a Dallas–Fort Worth dealership, using market tools to
          optimize inventory, plus auto‑industry ETF option strategies.
        </>
      )
    },
    {
      title: "AI‑Powered Subscription Service",
      description: (
        <>
          Offer a paid consultancy with AI chatbots for valuations, recommendations,
          and insider flip alerts—monetize via subscriptions and affiliate deals.
        </>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Three Income Strategies</h2>
      {strategies.map((s, i) => (
        <div key={i} className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  );
}



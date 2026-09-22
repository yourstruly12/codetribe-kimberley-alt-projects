function Partners() {
  const partners = [
    "PayPal",
    "coinbase",
    "BINANCE",
    "Revolut",
    "EXODUS",
    "BITFINEX",
    "Blockchain",
  ];

  return (
    <section className="partners">

      <div className="partners-container">

        {partners.map((partner) => (
          <span key={partner}>
            {partner}
          </span>
        ))}

      </div>

    </section>
  );
}

export default Partners;
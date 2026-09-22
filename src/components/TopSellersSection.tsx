import { TOP_SELLERS } from "../data/data";

function TopSellersSection() {
  return (
    <section className="section">

      <div className="section-container">

        <h2>Top Sellers</h2>

        <div className="sellers-grid">

          {TOP_SELLERS.map((seller) => (
            <div
              className="seller-card"
              key={seller.id}
            >

              <img
                src={seller.avatar}
                alt={seller.name}
              />

              <div>
                <h3>{seller.name}</h3>
                <p>{seller.price}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TopSellersSection;
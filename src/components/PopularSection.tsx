import NFTCard from "./NFTCard";
import { POPULAR_NFTS } from "../data/data";

function PopularSection() {
  return (
    <section className="section popular-section">

      <div className="section-container">

        <h2>Popular this week</h2>

        <div className="popular-grid">

          {POPULAR_NFTS.map((nft) => (
            <NFTCard
              key={nft.id}
              data={nft}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularSection;
import { TrendingUp } from "lucide-react";
import type { NFTCardData } from "../data/data";

interface NFTCardProps {
  data: NFTCardData;
}

function NFTCard({ data }: NFTCardProps) {

  if (data.isMain) {
    return (
      <article className="nft-main-card">

        <img
          src={data.image}
          alt={data.title}
        />

        <div className="nft-main-overlay">

          <h3>{data.title}</h3>

          <p>by {data.author}</p>

          <div className="nft-card-bottom">

            <strong>{data.price}</strong>

            <span>
              <TrendingUp size={14} />
              {data.bid}
            </span>

          </div>

        </div>

      </article>
    );
  }

  return (
    <article className="nft-card">

      <div className="nft-card-image">
        <img
          src={data.image}
          alt={data.title}
        />
      </div>

      <h3>{data.title}</h3>

      <p>{data.author}</p>

      <div className="nft-card-details">

        <strong>{data.price}</strong>

        <span>{data.bid}</span>

      </div>

    </article>
  );
}

export default NFTCard;
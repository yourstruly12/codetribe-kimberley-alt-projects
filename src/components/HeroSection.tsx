import { Play } from "lucide-react";
import { STATS } from "../data/data";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <h1>
            Discover, Collect
            <br />
            and Sell Dope
            <br />
            Art and NFTs
          </h1>

          <p className="hero-description">
            The world's largest digital marketplace for crypto
            collections and non fungible tokens (NFTs)
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Discover
            </button>

            <button className="secondary-btn">
              Create
            </button>

            <button className="video-btn">
              <span className="play-icon">
                <Play size={13} fill="white" />
              </span>

              Watch a video
            </button>

          </div>

          <div className="stats">

            {STATS.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}

          </div>

          <div className="active-users">

            <div className="user-avatars">
              {[1, 2, 3, 4].map((number) => (
                <img
                  key={number}
                  src={`https://i.pravatar.cc/100?img=${number + 10}`}
                  alt="Active user"
                />
              ))}
            </div>

            <div>
              <strong>40K +</strong>
              <span>Active Users</span>
            </div>

          </div>

        </div>

        <div className="hero-art">

          <div className="hero-card">

            <div className="hero-image-wrapper">

              <img
                src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800"
                alt="Featured NFT artwork"
              />

              <div className="hero-overlay">

                <div className="auction-info">

                  <div>
                    <span>Ending in:</span>
                    <strong>1h 20m 30s</strong>
                  </div>

                  <div>
                    <span>Highest Bid</span>
                    <strong>32.4 ETH</strong>
                  </div>

                </div>

                <div className="auction-buttons">

                  <button className="bid-btn">
                    Place a Bid
                  </button>

                  <button className="purchase-btn">
                    Purchase
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
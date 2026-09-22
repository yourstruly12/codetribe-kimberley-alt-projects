function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <a href="#" className="logo">
            <span>PLAY</span>
            <strong>NFT</strong>
          </a>

          <p>
            The World's Largest Digital Marketplace for
            crypto collections and non fungible tokens
            (NFTs) buy, sell and discover exclusive
            digital assets.
          </p>

          {/* Social Links */}
          <div className="social-links">

            <a href="#" aria-label="Twitter">
              X
            </a>

            <a href="#" aria-label="Instagram">
              IG
            </a>

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="YouTube">
              YT
            </a>

          </div>

        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#">Art</a>
          <a href="#">Photography</a>
          <a href="#">Music</a>
          <a href="#">Games</a>
        </div>

        {/* My Account */}
        <div className="footer-column">
          <h3>My Account</h3>

          <a href="#">My Profile</a>
          <a href="#">My Collections</a>
          <a href="#">My Favorites</a>
          <a href="#">Account Settings</a>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3>Resources</h3>

          <a href="#">Help Center</a>
          <a href="#">Partners</a>
          <a href="#">Suggestions</a>
          <a href="#">Newsletters</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Ranking</a>
          <a href="#">Activity</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
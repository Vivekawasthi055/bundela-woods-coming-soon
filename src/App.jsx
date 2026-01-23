function App() {
  return (
    <div className="card">
      <h1>
        Bundela Woods Cottage <br /> and Restaurant
      </h1>

      <p className="tagline">Where Nature Meets Luxury & Comfort</p>
      <p className="sub-tagline">
        Experience Luxury Living in the Heart of Woods
      </p>

      <div className="contact">
        📞 <a href="tel:+918878366225">+91 8878366225</a>
        <br />
        📧{" "}
        <a href="mailto:bundelawoodskhajuraho@gmail.com">
          bundelawoodskhajuraho@gmail.com
        </a>
      </div>
      <a
        href="https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <strong>BOOK YOUR STAY</strong>

        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </a>
      <a
        href="https://wa.me/918878366225"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        💬 Chat on WhatsApp
      </a>

      <div className="coming-soon">
        Full Website Coming Soon<span className="dots"></span>
      </div>
    </div>
  );
}

export default App;

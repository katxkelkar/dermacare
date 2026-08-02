function Hero({openAuth}) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-blob blob-1">

        </div>
        <div className="hero-blob blob-2">

        </div>
        <div className="hero-blob blob-3">

        </div>
        <div className="hero-content">
          <span className="hero-eyebrow">
            Science-backed Skincare
          </span>
          <h1 className="hero-title">
            Your Skin. <br/>
            <em>Our Science.</em>
          </h1>
          <p className="hero-body">
            Personalized Derm Consultation & Expert Formulated Treatment
          </p>
          <div className="hero-cta">
            <button className="btn-solid large" onClick={()=>openAuth("signUp")}>
              Analyse
            </button>
            <a href="#treatments" className="btn-text"> View Treatments <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className=""> planning to write # of countries</span>
                <p>
                  Happy Clients from ___ countries
                </p>
            </div>
            <div className="stat">
              <span className=""> planning to write # of countries</span>
                <p>
                  ___ stars
                </p>
            </div>
            <div className="stat">
              <span className=""> planning to write # of countries</span>
                <p>
                  Expert Analysis
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
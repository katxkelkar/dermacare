// src/App.jsx
import { useState } from "react";
import Navbar      from "./components/NavBar.jsx";
import Hero        from "./components/Hero.jsx";
import Treatments  from "./components/Treatments.jsx";
import About       from "./components/About.jsx";
import UserPanel   from "./components/UserPanel.jsx";
import AuthModal   from "./components/AuthModel.jsx";
import Footer      from "./components/Footer.jsx";

export default function App() {
  const [authMode, setAuthMode] = useState(null); // "login" | "signup" | null

  const openAuth  = (mode = "login") => setAuthMode(mode);
  const closeAuth = ()               => setAuthMode(null);

  return (
    <>
      <Navbar  openAuth={openAuth} />
      <Hero    openAuth={openAuth} />
      <UserPanel />
      <Treatments />
      <About />
      <section className="cta-band">
        <h2>Ready to <em>Transform</em> Your Skin?</h2>
        <p>Join 12,000+ clients who trust DermaCare for their skin health journey.</p>
        <button className="btn-solid large" onClick={() => openAuth("signup")}>
          Create Free Account
        </button>
      </section>
      <Footer />
      {authMode && <AuthModal mode={authMode} setMode={setAuthMode} onClose={closeAuth} />}
    </>
  );
}
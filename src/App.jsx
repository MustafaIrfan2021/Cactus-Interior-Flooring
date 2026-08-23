import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  FaBars,
  FaComments,
  FaFacebookF,
  FaFolderOpen,
  FaGear,
  FaInstagram,
  FaPenRuler,
  FaPinterestP,
  FaRegUser,
  FaScrewdriverWrench,
  FaSeedling,
  FaTwitter,
  FaXmark,
  FaYoutube,
} from 'react-icons/fa6'

import Collections from './sections/Collections'
import ProductDetails from './sections/ProductDetails'
import ScrollToTop from './ScrollToTop'
import heroImage from './assets/hero.png'
import logo from './assets/logo.png'
import footerImg from './assets/footer_logo.png'
import './App.css'

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* HERO */}
      <header
        id="home"
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 12, 12, 0), rgba(12, 12, 12, 0.46)), url(${heroImage})`,
        }}
      >
        {/* NAVBAR */}
        <div className="navbar-bg">
          <nav className="navbar container">
            <a href="#home" className="logo-area" onClick={closeMenu}>
              <img
                src={logo}
                alt="Cactus Interiors & Flooring"
                className="logo-image"
              />
            </a>

            {/* Desktop Navigation */}
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#products" onClick={closeMenu}>
              Products
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="hero-content container">
          <div className="hero-text">
            <h1>
              QUALITY FLOORINGS
              <br />
              RESERVED FOR
              <br />
              THOSE WHO
              <br />
              APPRECIATE THE FINEST
            </h1>

            <div
              className="hero-dots"
              aria-label="Hero slide indicators"
            >
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>

          <h3 className="section-subtitle">
            Cactus Interiors & Flooring
          </h3>

          <div className="title-line"></div>

          <p className="about-text">
            A new name in the Pakistan interior market but having a rich
            experience team with diversified segments like construction,
            fashion and flooring.
            <br />
            Introducing world leading brands quality products for Architects
            and Interior Designers like AGT from Turkey and Carpet Inter from
            Thailand.
            <br />
            We supply a comprehensive range of Carpets, Carpet Tiles, Laminate
            and Wooden Floor, Grass AstroTurf, Vinyl Floors and many products to
            cater requirements of commercial, residential, leisure,
            hospitality, care and education projects.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title on-dark">Stats</h2>

          <div className="title-line"></div>

          <div className="stats-container">
            <div className="stat-box">
              <FaFolderOpen aria-hidden="true" />

              <div>
                <div className="stat-number">56</div>
                <div className="stat-label">Projects</div>
              </div>
            </div>

            <div className="stat-box">
              <FaRegUser aria-hidden="true" />

              <div>
                <div className="stat-number">5</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn-quote">
            GET A QUOTE
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Services</h2>

          <div className="title-line"></div>

          <p className="services-desc">
            We are proud to stock ranges from leading global manufacturers of
            flooring with long-life warranties and environmentally responsible
            standards.
            <br />
            Our carpet tiles include anti-static, anti-microbial and fire-rated
            options. We also offer AC4 and AC5 laminate ranges with modern
            glueless installation systems.
          </p>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon" aria-hidden="true">
                <FaComments />
              </div>

              <div className="service-content">
                <h3>Consultation</h3>
                <p>
                  Our experienced sales team helps you choose the right
                  flooring solution for budget, durability and aesthetics.
                </p>
              </div>
            </article>

            <article className="service-card">
              <div className="service-icon" aria-hidden="true">
                <FaPenRuler />
              </div>

              <div className="service-content">
                <h3>Design</h3>
                <p>
                  Our engineers provide practical layouts and shop drawings to
                  align your design vision with real-world performance.
                </p>
              </div>
            </article>

            <article className="service-card">
              <div className="service-icon" aria-hidden="true">
                <FaGear />
              </div>

              <div className="service-content">
                <h3>Technical Solutions</h3>
                <p>
                  Site engineers guide you before, during and after
                  installation, ensuring each project follows sound technical
                  practices.
                </p>
              </div>
            </article>

            <article className="service-card">
              <div className="service-icon" aria-hidden="true">
                <FaScrewdriverWrench />
              </div>

              <div className="service-content">
                <h3>Installation</h3>
                <p>
                  Our dedicated installation teams deliver clean, reliable and
                  timely execution across commercial and residential projects.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <Collections />

      {/* BRANDS */}
      <section className="brands-section" aria-label="Brand partners">
        <div className="brand-logo logo-agt">AGT</div>

        <div className="brand-logo logo-ege">ege</div>

        <div className="brand-logo logo-carpet-inter">
          <FaSeedling aria-hidden="true" />
          Carpet Inter
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact</h2>

          <div className="title-line"></div>

          <p className="products-desc">
            Tell us about your project and our team will get back with
            recommendations and a quote.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Name" required />

            <input type="email" placeholder="Email" required />

            <input type="tel" placeholder="Phone" />

            <input type="text" placeholder="Subject" />

            <textarea
              placeholder="Message"
              rows="2"
            ></textarea>

            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-container container">

          {/* Footer Logo */}
          <div className="footer-brand">
            <img
              src={footerImg}
              alt="Cactus Interiors & Flooring"
              className="footer-logo"
            />
          </div>

          {/* Contact Information */}
          <div className="footer-col">
            <p>
              <strong>Cactus</strong>
            </p>

            <p>Shop UG50, Jinnah Complex</p>

            <p>M.A. Jinnah Road, Taj Complex, Karachi</p>

            <p>+92 (21) 335-2435408</p>

            <p>+92 (21) 332-2103419</p>

            <p>info@cactusinteriors.net</p>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Home</h4>

            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#products">Products</a>
              </li>

              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-col">
            <h4>FOLLOW US ON</h4>

            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
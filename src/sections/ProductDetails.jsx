import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaCheck, FaRulerCombined } from 'react-icons/fa6'
import { getProduct } from './productData'
import './ProductDetails.css'

function List({ items }) {
  return <ul className="product-list">{items.map((item) => <li key={item}><FaCheck aria-hidden="true" />{item}</li>)}</ul>
}

export default function ProductDetails() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) {
    return <main className="product-missing"><p>Product not found.</p><Link to="/">Return to collection</Link></main>
  }

  return (
    <main className="product-page">
      <nav className="product-nav container"><Link to="/" className="product-back"><FaArrowLeft aria-hidden="true" /> Back to collection</Link><span>Cactus Interiors & Flooring</span></nav>
      <section className="product-hero container">
        <div className="product-hero-copy"><p className="product-kicker">{product.eyebrow}</p><h1>{product.name}</h1><p className="product-lead">{product.shortDescription}</p><a className="product-cta" href="/#contact">Request a quote <FaArrowRight aria-hidden="true" /></a></div>
        <div className="product-hero-image"><img src={product.image} alt={product.name} /></div>
      </section>

      <section className="product-overview container"><div><p className="product-kicker">The collection</p><h2>Material made for the way you live.</h2></div><p>{product.description}</p></section>

      <section className="product-detail-band"><div className="container product-detail-grid"><div><p className="product-kicker">Why choose it</p><h2>Quiet confidence, underfoot.</h2><List items={product.benefits} /></div><div><p className="product-kicker">Designed for</p><List items={product.features} /></div></div></section>

      <section className="product-gallery container"><div className="product-section-heading"><p className="product-kicker">Visual library</p><h2>See the surface in detail.</h2></div><div className="product-gallery-grid">{product.gallery.map((image, index) => <img key={image} src={image} alt={`${product.name} detail ${index + 1}`} loading="lazy" />)}</div></section>

      <section className="product-specs container"><div><p className="product-kicker">Project notes</p><h2>Specified with clarity.</h2><p>Talk with our team about finish samples, installation requirements, and a flooring plan tailored to your space.</p></div><div className="spec-list">{Object.entries(product.specifications).map(([key, value]) => <div key={key}><FaRulerCombined aria-hidden="true" /><span>{key}</span><strong>{value}</strong></div>)}</div></section>

      <section className="product-applications container"><p className="product-kicker">Ideal applications</p><h2>Made to belong in the room.</h2><div className="application-list">{product.applications.map((application) => <span key={application}>{application}</span>)}</div></section>
      <section className="product-final-cta"><div className="container"><p className="product-kicker">Start your project</p><h2>Let’s find the right floor for your next space.</h2><a className="product-cta product-cta-light" href="/#contact">Speak with our team <FaArrowRight aria-hidden="true" /></a></div></section>
    </main>
  )
}

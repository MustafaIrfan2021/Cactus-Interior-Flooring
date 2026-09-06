import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { getProduct } from './productData'
import './ProductDetails.css'

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

      <section className="product-gallery container"><div className="product-section-heading"><h2>Related Products</h2></div><div className="product-gallery-grid">{product.gallery.map((image, index) => <img key={image} src={image} alt={`${product.name} detail ${index + 1}`} loading="lazy" />)}</div></section>
    </main>
  )
}

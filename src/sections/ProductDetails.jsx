import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaCheck } from 'react-icons/fa6'
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
      <nav className="product-nav container"><Link to="/" className="product-back"><FaArrowLeft aria-hidden="true" /> Back to collection</Link><span>Cactus Interiors &amp; Flooring</span></nav>
      <section className="product-detail-card container">
        <div className="product-media">
          <div className="product-hero-image"><img src={product.image} alt={product.name} /></div>
          <div className="product-gallery-grid" aria-label="Related product images">
            {product.gallery.map((image, index) => <img key={image} src={image} alt={`${product.name} detail ${index + 1}`} loading="lazy" />)}
          </div>
        </div>

        <div className="product-hero-copy">
          <p className="product-kicker">{product.eyebrow}</p>
          <h1>{product.name}</h1>
          <p className="product-lead">{product.shortDescription}</p>
          <dl className="product-specs">
            {Object.entries(product.specifications).slice(0, 4).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <p className="product-description">{product.description}</p>
          <p className="product-availability"><FaCheck aria-hidden="true" /> In-stock &amp; ready for site delivery</p>
        </div>
      </section>
    </main>
  )
}

import { Link } from 'react-router-dom'
import { PRODUCTS } from './productData'

const PRODUCT_CATEGORIES = [
  'Carpet Tiles',
  'Vinyl Flooring',
  'Laminate Flooring',
  'Sports Flooring',
  'Artificial Grass',
  'Gym Flooring',
]

export default function Collections() {
  return (
    <section id="products" className="collections-section">
      <div className="container collections-wrap">
        <h2 className="section-title">Products</h2>
        <div className="title-line"></div>

        <div className="collections-categories" aria-label="Product categories">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <span
              key={category}
              className="collections-chip"
              style={{ '--chip-delay': `${index * 70}ms` }}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="collections-grid">
          {PRODUCTS.map((item, index) => (
            <Link key={item.slug} to={`/products/${item.slug}`} className="collection-card-link">
              <article
                className="collection-card"
                style={{ '--card-delay': `${index * 85}ms` }}
              >
                <div className="collection-image-wrap">
                  <img src={item.image} alt={item.name} className="collection-image" loading="lazy" />
                </div>
                <div className="collection-content">
                  <p className="collection-subtitle">{item.eyebrow}</p>
                  <h3>{item.name}</h3>
                  <p>{item.shortDescription}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

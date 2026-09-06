import { useState } from 'react'
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

const CATEGORY_MAP = {
  'Carpet Tiles': ['carpet-flooring'],
  'Vinyl Flooring': ['vinyl-flooring'],
  'Laminate Flooring': ['laminate-flooring'],
  'Sports Flooring': ['gym-flooring', 'commercial-flooring', 'outdoor-flooring'],
  'Artificial Grass': ['outdoor-flooring'],
  'Gym Flooring': ['gym-flooring'],
}

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const visibleProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((item) => CATEGORY_MAP[selectedCategory]?.includes(item.slug))

  return (
    <section id="products" className="collections-section">
      <div className="container collections-wrap">
        <h2 className="section-title">Products</h2>
        <div className="title-line"></div>

        <div className="collections-categories" aria-label="Product categories">
          {['All', ...PRODUCT_CATEGORIES].map((category, index) => (
            <button
              key={category}
              type="button"
              className="collections-chip"
              style={{ '--chip-delay': `${index * 70}ms` }}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="collections-grid">
          {visibleProducts.map((item, index) => (
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

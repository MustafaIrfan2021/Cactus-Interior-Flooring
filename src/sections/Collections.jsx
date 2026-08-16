const PRODUCT_CATEGORIES = [
  'Carpet Tiles',
  'Vinyl Flooring',
  'Laminate Flooring',
  'Sports Flooring',
  'Artificial Grass',
  'Gym Flooring',
]

const COLLECTIONS = [
  {
    image: '/images/product-granite-yards-series.jpg',
    title: 'Luxury Vinyl Tiles',
    subtitle: 'Vinyl Collection',
    description:
      'Durable and elegant surfaces designed for high-traffic commercial interiors and modern homes.',
  },
  {
    image: '/images/product-uranus-series-brochure.jpg',
    title: 'Artificial Grass',
    subtitle: 'Outdoor + Leisure',
    description:
      'Low-maintenance turf systems for rooftop lounges, play areas, and landscape-focused projects.',
  },
  {
    image: '/images/product-dongbao-1101-room.jpg',
    title: 'Contract Carpets',
    subtitle: 'Commercial Carpet',
    description:
      'Professional-grade carpet ranges balancing comfort, acoustic control, and long-term performance.',
  },
  {
    image: '/images/product-dongbao-2102-lounge.jpg',
    title: 'Carpet Tile Systems',
    subtitle: 'Modular Flooring',
    description:
      'Flexible tile formats that simplify installation and replacement while keeping design consistency.',
  },
  {
    image: '/images/product-dongbao-2104-office.jpg',
    title: 'Laminate Flooring',
    subtitle: 'AC4 + AC5 Range',
    description:
      'Contemporary laminate textures with glueless systems engineered for fast, precise installation.',
  },
  {
    image: '/images/product-dongbao-2106-lounge.jpg',
    title: "Gym's Flooring",
    subtitle: 'Sports Surfaces',
    description:
      'Impact-ready floor systems for gyms, fitness studios, and multifunction sports environments.',
  },
  {
    image: '/images/product-dongbao-1101-swatch.jpg',
    title: 'Dongbao 1101',
    subtitle: 'Texture Swatch',
    description:
      'Close-up texture reference with warm rust accents for hospitality and collaborative spaces.',
  },
  {
    image: '/images/product-dongbao-2102-swatch.jpg',
    title: 'Dongbao 2102',
    subtitle: 'Texture Swatch',
    description:
      'Cool blue-grey swatch designed for offices, breakout areas, and modern interior schemes.',
  },
  {
    image: '/images/product-dongbao-2104-swatch.jpg',
    title: 'Dongbao 2104',
    subtitle: 'Texture Swatch',
    description:
      'Green-accented tonal texture offering visual depth with a fresh, balanced material feel.',
  },
  {
    image: '/images/product-dongbao-2106-swatch.jpg',
    title: 'Dongbao 2106',
    subtitle: 'Texture Swatch',
    description:
      'Orange-accented swatch with strong contrast for statement zones and directional layouts.',
  },
  {
    image: '/images/product-dongbao-2102-office.jpg',
    title: 'Uranus 2102 Workspace',
    subtitle: 'Installed View',
    description:
      'Installed project visual showing practical performance and clean finish in active office spaces.',
  },
  {
    image: '/images/product-certificate-conformity.jpg',
    title: 'Conformity Certificate',
    subtitle: 'Quality Documentation',
    description:
      'Independent certification documents supporting product quality, compliance, and buyer confidence.',
  },
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
          {COLLECTIONS.map((item, index) => (
            <article
              key={item.title}
              className="collection-card"
              style={{ '--card-delay': `${index * 85}ms` }}
            >
              <div className="collection-image-wrap">
                <img src={item.image} alt={item.title} className="collection-image" loading="lazy" />
              </div>
              <div className="collection-content">
                <p className="collection-subtitle">{item.subtitle}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaCheck } from 'react-icons/fa6'
import { getProduct } from './productData'
import './ProductDetails.css'

export default function ProductDetails() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const selectionStorageKey = product ? `selected-product-image-${product.slug}` : null
  const [selectedImage, setSelectedImage] = useState(() => {
    if (!product || !selectionStorageKey) return null
    const storedImage = window.sessionStorage.getItem(selectionStorageKey)
    return storedImage ? { slug: product.slug, src: storedImage } : null
  })
  const [imageAnimationKey, setImageAnimationKey] = useState(0)
  const mainImage = selectedImage?.slug === product?.slug ? selectedImage.src : product?.image
  const companionImage = product?.relatedImageBySelection?.[mainImage]
  const galleryItems = product?.gallery?.map((image, index) => ({ image, name: product.galleryNames?.[index] })) || []
  const promotedImage = companionImage
    || (mainImage !== product?.image && product?.gallery?.includes(product?.image) ? product.image : null)
  const relatedGallery = promotedImage
    ? [galleryItems.find((item) => item.image === promotedImage), ...galleryItems.filter((item) => item.image !== promotedImage)].filter(Boolean)
    : galleryItems
  const selectImage = (image, reloadPage = false) => {
    setSelectedImage({ slug: product.slug, src: image })
    window.sessionStorage.setItem(selectionStorageKey, image)
    setImageAnimationKey((key) => key + 1)
    if (reloadPage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      window.location.reload()
    }
  }

  if (!product) {
    return <main className="product-missing"><p>Product not found.</p><Link to="/">Return to collection</Link></main>
  }

  return (
    <main className="product-page">
      <nav className="product-nav container"><Link to="/" className="product-back"><FaArrowLeft aria-hidden="true" /> Back to collection</Link><span>Cactus Interiors &amp; Flooring</span></nav>
      {product.slug === 'laminate-flooring' && <p className="product-series-title">AGT EFFECT SERIES</p>}
      <section className={`product-detail-card container${companionImage ? ' has-companion' : ''}`}>
        <div className="product-media">
          <div className="product-hero-image"><img key={imageAnimationKey} className={imageAnimationKey ? 'product-image-refresh' : undefined} src={mainImage} alt={product.name} />{product.galleryNames && <span className="product-image-name">{product.galleryNames[product.gallery.indexOf(mainImage)]}</span>}</div>
          {companionImage && <div className="product-companion-image"><img src={companionImage} alt={`${product.name} alternate view`} />{product.galleryNames && <span className="product-image-name">{product.galleryNames[product.gallery.indexOf(companionImage)]}</span>}</div>}
          <div className="product-gallery-grid" aria-label="Related product images">
            {relatedGallery.map(({ image, name }, index) => <div className="product-gallery-item" key={image}><img src={image} alt={`${product.name} detail ${index + 1}`} loading="lazy" tabIndex="0" role="button" onClick={() => selectImage(image, true)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectImage(image) } }} />{name && <span className="product-image-name">{name}</span>}</div>)}
          </div>
        </div>

        <div className="product-hero-copy">
          <p className="product-kicker">{product.eyebrow}</p>
          <h1>{product.name}</h1>
          <p className="product-lead">{product.shortDescription}</p>
          <dl className="product-specs">
            {Object.entries(product.specifications).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <p className="product-description">{product.description}</p>
          <p className="product-availability"><FaCheck aria-hidden="true" /> In-stock &amp; ready for site delivery</p>
        </div>
      </section>
    </main>
  )
}



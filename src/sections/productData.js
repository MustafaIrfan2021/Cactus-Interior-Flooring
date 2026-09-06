import gymTileOne from './gym_flooring/10.webp'
import gymTileTwo from './gym_flooring/11.webp'
import gymTileThree from './gym_flooring/12.webp'
import gymFlooringMain from './gym_flooring/gym_Flooring.png'
import laminateOne from './laminate_floors/Corvina-Parke-Katalogu_page-0006-scaled.webp'
import laminateTwo from './laminate_floors/Corvina-Parke-Katalogu_page-0008-scaled.webp'
import laminateThree from './laminate_floors/Corvina-Parke-Katalogu_page-0012-scaled.webp'
import laminateFour from './laminate_floors/Corvina-Parke-Katalogu_page-0014-scaled.webp'
import laminateFive from './laminate_floors/Corvina-Parke-Katalogu_page-0016-scaled.webp'
import laminateSix from './laminate_floors/Corvina-Parke-Katalogu_page-0018-scaled.webp'
import laminateSeven from './laminate_floors/Corvina-Parke-Katalogu_page-0020-scaled.webp'
import laminateEight from './laminate_floors/Corvina-Parke-Katalogu_page-0022-scaled.webp'
import laminateDetail from './laminate_floors/effect_pages-to-jpg-0006.webp'
import vinylOne from './Vinyl Flooring/Vinyl_Flooring .png'
import vinylTwo from './Vinyl Flooring/Cool-Polished-Cement-A00302.png'
import vinylThree from './Vinyl Flooring/Dark Concrete C01301.png'
import vinylFour from './Vinyl Flooring/Dark-Concrete-A00310.png'
import vinylFive from './Vinyl Flooring/Hazel.png'
import vinylSix from './Vinyl Flooring/Indigo.png'
import vinylSeven from './Vinyl Flooring/Light Concrete C01302.png'
import vinylEight from './Vinyl Flooring/Medium Concrete C01303.png'
import vinylNine from './Vinyl Flooring/Polished-Cement-A00301.png'
import woodOne from './wooden_floors/692a415f-e4a7-41bc-bdbf-00f0f4549b05.webp'
import woodTwo from './wooden_floors/7317b037-d373-4cc3-ba62-2b2d46828989.webp'
import woodThree from './wooden_floors/7c2454b7-068d-46cc-9b8b-ad477d062c79.webp'
import woodFour from './wooden_floors/7d21ee66-bd2f-4c16-8deb-9becf3fa6479.webp'
import woodFive from './wooden_floors/93b52c22-bd16-4068-969f-4a61cd721384.webp'
import woodSix from './wooden_floors/aa33e0c7-62f9-4371-a7a8-80ecae6285fd.webp'
import woodSeven from './wooden_floors/be87025d-4e37-4e81-ba36-f60cf7a88d26.webp'
import woodEight from './wooden_floors/c4ce9a9f-2f96-4690-9dc1-dba4c7c04809.webp'

const laminateGallery = [laminateOne, laminateTwo, laminateThree, laminateFour, laminateFive, laminateSix, laminateSeven, laminateEight, laminateDetail]
const gymGallery = [gymTileOne, gymTileTwo, gymTileThree]
const vinylGallery = [vinylOne, vinylTwo, vinylThree, vinylFour, vinylFive, vinylSix, vinylSeven, vinylEight, vinylNine]
const woodGallery = [woodOne, woodTwo, woodThree, woodFour, woodFive, woodSix, woodSeven, woodEight]
const publicImage = (name) => `/images/${name}`

export const PRODUCTS = [
  {
    slug: 'laminate-flooring', name: 'Laminate Flooring', eyebrow: 'AC4 + AC5 Range',
    image: laminateOne, gallery: laminateGallery,
    shortDescription: 'Refined wood looks with the resilience and practicality modern interiors demand.',
    description: 'Our laminate collection pairs authentic timber character with a hard-wearing surface built for everyday life. Precise locking profiles make installation efficient while a considered palette brings warmth and structure to residential and commercial spaces.',
    features: ['High-density core construction', 'Scratch-resistant protective layer', 'Precision click installation', 'Natural wood-inspired finishes'],
    benefits: ['Fast, clean installation', 'Consistent finish across large areas', 'Simple daily maintenance', 'Reliable performance in active rooms'],
    applications: ['Living rooms', 'Bedrooms', 'Boutique offices', 'Retail interiors'],
    specifications: { thickness: '8-12 mm', finish: 'Natural embossed timber texture', installation: 'Floating click system', maintenance: 'Sweep and damp mop with a neutral cleaner' },
  },
  {
    slug: 'gym-flooring', name: 'Gym Flooring', eyebrow: 'Sports Surfaces', image: gymFlooringMain, gallery: [gymFlooringMain, gymTileOne, gymTileTwo],
    shortDescription: 'Impact-ready rubber surfaces engineered for confident movement and demanding training spaces.',
    description: 'Built for the rhythm of training, our gym flooring range absorbs impact, supports traction, and helps protect the subfloor beneath. Interlocking formats keep installation practical for studios that need a dependable, hardworking surface.',
    features: ['Shock-absorbing rubber construction', 'Interlocking puzzle-edge format', 'High-grip textured surface', 'Designed for heavy equipment zones'],
    benefits: ['Reduces noise and vibration', 'Improves underfoot comfort', 'Resists demanding daily use', 'Tiles can be replaced individually'],
    applications: ['Fitness studios', 'Weight rooms', 'Home gyms', 'Sports training areas'],
    specifications: { thickness: '15-25 mm', finish: 'Textured recycled rubber', installation: 'Interlocking loose lay', maintenance: 'Vacuum and wipe with a pH-neutral solution' },
  },
  {
    slug: 'vinyl-flooring', name: 'Vinyl Flooring', eyebrow: 'Comfort + Performance', image: vinylOne, gallery: vinylGallery,
    shortDescription: 'Versatile resilient flooring that brings visual calm, comfort, and easy care to busy interiors.',
    description: 'Designed for spaces where performance and design need to coexist, this vinyl range offers a comfortable resilient feel with expressive stone and timber visuals. It is an adaptable choice for projects that need dependable everyday performance.',
    features: ['Resilient cushioned surface', 'Water-resistant construction', 'Low-glare finish options', 'Broad design versatility'],
    benefits: ['Comfortable underfoot', 'Easy to clean', 'Quiet in active spaces', 'Suitable for fast-paced renovation work'],
    applications: ['Kitchens', 'Healthcare interiors', 'Workspaces', 'Hospitality projects'],
    specifications: { thickness: '2-5 mm', finish: 'Matte stone and timber visuals', installation: 'Adhesive or click formats', maintenance: 'Regular sweeping and damp mopping' },
  },
  {
    slug: 'spc-flooring', name: 'SPC Flooring', eyebrow: 'Stone Polymer Core', image: laminateThree, gallery: [laminateThree, laminateSix, publicImage('product-dongbao-2102-office.jpg')],
    shortDescription: 'Stable, water-resistant flooring with a crisp architectural finish for contemporary projects.',
    description: 'SPC flooring brings a mineral-rich rigid core to the familiar beauty of timber and stone visuals. Its dimensional stability and clean installation profile make it a strong choice for modern spaces with changing temperatures and active routines.',
    features: ['Rigid stone polymer core', 'Water-resistant layered build', 'Micro-bevel plank definition', 'Protective wear layer'],
    benefits: ['Excellent dimensional stability', 'Resists everyday moisture', 'Creates a precise modern look', 'Minimal disruption during installation'],
    applications: ['Apartments', 'Showrooms', 'Cafes', 'Office fit-outs'],
    specifications: { thickness: '4-6 mm', finish: 'Embossed matte surface', installation: 'Uniclic floating installation', maintenance: 'Dust mop and use a lightly damp cloth' },
  },
  {
    slug: 'hardwood-flooring', name: 'Hardwood Flooring', eyebrow: 'Natural Timber', image: woodOne, gallery: woodGallery,
    shortDescription: 'Authentic timber character selected to give interiors depth, tactility, and enduring warmth.',
    description: 'Every board in our hardwood range brings a distinct grain, tone, and sense of place. Carefully finished timber creates a floor that matures beautifully and gives residential and hospitality interiors an unmistakable natural presence.',
    features: ['Genuine timber surface', 'Distinct natural grain variation', 'Refined protective finish', 'Timeless plank proportions'],
    benefits: ['Ages with character', 'Can be refinished over time', 'Adds natural warmth', 'Supports lasting interior schemes'],
    applications: ['Private residences', 'Premium hospitality', 'Libraries', 'Executive suites'],
    specifications: { thickness: '14-20 mm', finish: 'Oil or lacquered natural timber', installation: 'Nail, glue, or engineered click', maintenance: 'Dry care with periodic timber-safe treatment' },
  },
  {
    slug: 'carpet-flooring', name: 'Carpet Flooring', eyebrow: 'Soft Surface Collection', image: publicImage('product-dongbao-1101-room.jpg'), gallery: [publicImage('product-dongbao-1101-room.jpg'), publicImage('product-dongbao-2102-lounge.jpg'), publicImage('product-dongbao-2106-lounge.jpg')],
    shortDescription: 'Layered texture and acoustic comfort for interiors that should feel as good as they look.',
    description: 'Carpet flooring softens the atmosphere of a room with tactile depth, acoustic absorption, and a generous palette of textures. Our selected ranges are suited to calm residential settings as well as polished professional environments.',
    features: ['Comfortable textile pile', 'Acoustic absorption', 'Rich tonal and textured options', 'Professional-grade backing options'],
    benefits: ['Improves room acoustics', 'Creates a warmer welcome', 'Comfortable for long periods of use', 'Supports expressive interior palettes'],
    applications: ['Bedrooms', 'Meeting rooms', 'Lounges', 'Boutique hospitality'],
    specifications: { thickness: '6-12 mm', finish: 'Textured loop or cut pile', installation: 'Full spread or carpet tile', maintenance: 'Routine vacuuming and periodic professional cleaning' },
  },
  {
    slug: 'commercial-flooring', name: 'Commercial Flooring', eyebrow: 'Contract Performance', image: publicImage('product-dongbao-2104-office.jpg'), gallery: [publicImage('product-dongbao-2104-office.jpg'), publicImage('product-dongbao-2106-office.jpg'), publicImage('product-certificate-conformity.jpg')],
    shortDescription: 'Specification-led surfaces that help busy commercial environments perform beautifully every day.',
    description: 'Commercial flooring needs to be dependable, maintainable, and visually coherent across a whole project. This selection is curated for high-use interiors where durability, clean detailing, and a professional finish are essential.',
    features: ['High-traffic wear performance', 'Coordinated design formats', 'Specification support', 'Efficient replacement planning'],
    benefits: ['Built for demanding circulation', 'Keeps presentation consistent', 'Simplifies phased installation', 'Balances lifecycle value and design'],
    applications: ['Corporate offices', 'Retail environments', 'Education spaces', 'Public interiors'],
    specifications: { thickness: '2-8 mm', finish: 'Commercial matte wear surface', installation: 'Adhesive, modular, or floating', maintenance: 'Planned daily care with periodic deep cleaning' },
  },
  {
    slug: 'outdoor-flooring', name: 'Outdoor Flooring', eyebrow: 'Exterior + Leisure', image: publicImage('product-uranus-series-brochure.jpg'), gallery: [publicImage('product-uranus-series-brochure.jpg'), gymTileTwo, publicImage('product-granite-yards-series.jpg')],
    shortDescription: 'Practical exterior surfaces for terraces, leisure zones, and open-air environments.',
    description: 'Outdoor flooring extends the design language of an interior into the open air. Selected for practical upkeep and confident footing, these surfaces help shape terraces, leisure areas, and landscape-led commercial settings.',
    features: ['Exterior-ready surface options', 'Slip-conscious textures', 'Weather-aware construction', 'Flexible layout possibilities'],
    benefits: ['Connects indoor and outdoor zones', 'Supports active leisure areas', 'Designed for straightforward upkeep', 'Creates a polished project finish'],
    applications: ['Terraces', 'Rooftop lounges', 'Poolside areas', 'Landscape projects'],
    specifications: { thickness: '8-20 mm', finish: 'Textured, slip-conscious surface', installation: 'System-dependent exterior installation', maintenance: 'Sweep regularly and rinse as required' },
  },
]

export const getProduct = (slug) => PRODUCTS.find((product) => product.slug === slug)

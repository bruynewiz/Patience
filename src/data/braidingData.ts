import { BraidingStyle, BusinessInfo, GalleryItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'PatienceAHB',
  tagline: 'African Hair Braiding • Greensboro, NC',
  phone: '+13369873572',
  phoneDisplay: '+1 336-987-3572',
  instagramHandle: '@patience_ahb',
  instagramUrl: 'https://www.instagram.com/patience_ahb/',
  address: {
    street: '2717 Wild Poplar Way',
    city: 'Greensboro',
    state: 'NC',
    zip: '27405',
    full: '2717 Wild Poplar Way, Greensboro, NC 27405',
  },
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.0489046537073!2d-79.7423507!3d36.1410225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531f89846c0001%3A0x68d99ef8cccce60c!2sPatienceAHB!5e0!3m2!1sen!2scm!4v1789764956746!5m2!1sen!2scm',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=2717+Wild+Poplar+Way+Greensboro+NC+27405',
};

export const BRAIDING_STYLES: BraidingStyle[] = [
  {
    id: 'knotless-braids',
    name: 'Knotless Braids',
    tagline: 'Lightweight, versatile, and effortlessly stylish.',
    category: 'knotless',
    description:
      'Seamless, scalp-friendly braids created by feeding hair gradually as the braid progresses. Zero initial tension on edges with fluid natural movement from day one.',
    benefits: [
      'Gentle on scalp and edges',
      'Flexible styling right away',
      'Natural, lightweight feel',
      'Clean parted grid sections',
    ],
    recommendedHairType: 'Suitable for natural, relaxed, or transitioning hair textures.',
    maintenanceTip: 'Wear a silk or satin bonnet nightly and mist scalp with a lightweight rosewater or braid spray.',
    image: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1200&q=85',
    badge: 'Most Requested',
  },
  {
    id: 'box-braids',
    name: 'Box Braids',
    tagline: 'A timeless protective style with endless styling possibilities.',
    category: 'box',
    description:
      'The iconic classic protective look defined by neat geometric parting and uniform braid density. Perfect for buns, ponytails, and effortless daily beauty.',
    benefits: [
      'Long-lasting durability',
      'Endless styling options (updos, half-up)',
      'Low daily morning maintenance',
      'Complete hair protection',
    ],
    recommendedHairType: 'Ideal for medium to thick natural textures looking for maximum longevity.',
    maintenanceTip: 'Keep roots moisturized with light natural oils and tuck ends carefully.',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=1200&q=85',
    badge: 'Classic Choice',
  },
  {
    id: 'stitch-braids',
    name: 'Stitch Braids',
    tagline: 'Clean, detailed sections for a sleek and polished look.',
    category: 'stitch',
    description:
      'Razor-clean linear parting lines engineered with precision stitch technique. Creates an architectural, high-definition finish that turns heads.',
    benefits: [
      'Ultra-crisp geometric precision',
      'Sleek, low-profile silhouette',
      'Ideal for active lifestyles',
      'Polished executive or casual look',
    ],
    recommendedHairType: 'Best on freshly blown-out hair with healthy edges.',
    maintenanceTip: 'Tie down with a satin scarf daily to keep stitch lines razor sharp.',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=1200&q=85',
    badge: 'High Precision',
  },
  {
    id: 'cornrows',
    name: 'Cornrows',
    tagline: 'Classic protective styling with modern versatility.',
    category: 'cornrows',
    description:
      'Traditional close-to-scalp braiding crafted with smooth consistency and symmetrical curves. Flattering straight-back or curved patterns designed for everyday elegance.',
    benefits: [
      'Timeless African heritage aesthetic',
      'Comfortable under hats or wraps',
      'Quick install and easy wear',
      'Excellent base for healthy growth',
    ],
    recommendedHairType: 'Versatile for all natural hair lengths above 3-4 inches.',
    maintenanceTip: 'Moisturize between parts with a nozzle bottle for direct scalp relief.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'fulani-braids',
    name: 'Fulani Braids',
    tagline: 'Distinctive patterns combining traditional inspiration with modern styling.',
    category: 'fulani',
    description:
      'A breathtaking signature hybrid: sleek cornrows parted down the center with side-swept accents paired with loose back braids. Often enhanced with beads or cuffs.',
    benefits: [
      'Striking artisanal design',
      'Combines cornrows & loose braids',
      'Framing that complements facial features',
      'Artistic statement style',
    ],
    recommendedHairType: 'Medium to long hair seeking a statement protective design.',
    maintenanceTip: 'Protect front cornrows with edge control and a snug satin wrap.',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=1200&q=85',
    badge: 'Artisanal',
  },
  {
    id: 'boho-braids',
    name: 'Boho Braids',
    tagline: 'Soft, textured braids with a relaxed, effortless finish.',
    category: 'boho',
    description:
      'Effortless luxury featuring lightweight knotless or box braids with soft human or curly synthetic curls cascading throughout the body and ends.',
    benefits: [
      'Romantic, soft movement',
      'Beach-ready textured volume',
      'Bespoke curl density',
      'Photogenic bridal or vacation look',
    ],
    recommendedHairType: 'Perfect for clients who love dimensional curls and movement.',
    maintenanceTip: 'Finger-detangle curly tendrils with a light leave-in mousse and silk bonnet.',
    image: 'https://images.unsplash.com/photo-1584297091622-af8e5fd85223?auto=format&fit=crop&w=1200&q=85',
    badge: 'Trending',
  },
  {
    id: 'feed-in-braids',
    name: 'Feed-In Braids',
    tagline: 'Smooth, natural-looking braids with beautiful dimension.',
    category: 'feed-in',
    description:
      'Braiding extensions introduced seamlessly strand by strand, beginning small at the hairline and tapering into full, voluminous braids without bulk.',
    benefits: [
      'Zero hairline tension',
      'Natural seamless transition',
      'Customizable width and count (2, 4, 6+)',
      'Sleek, polished profile',
    ],
    recommendedHairType: 'All textures, particularly gentle for sensitive hairlines.',
    maintenanceTip: 'Apply light mousse with a wrap strip after showering to lay down flyaways.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'kids-braids',
    name: 'Kids Braids',
    tagline: 'Beautiful protective styles designed with younger clients in mind.',
    category: 'kids',
    description:
      'Gentle, tension-free protective braiding tailored for children’s tender scalps. Styled for school, sports, holidays, or everyday wear with clean sections and gentle care.',
    benefits: [
      'Tension-free, child-friendly technique',
      'Durable for school and play',
      'Comfortable and scalp-conscious',
      'Optional cute beads and bows',
    ],
    recommendedHairType: 'Children aged 5+ with washed, detangled natural hair.',
    maintenanceTip: 'Keep scalp soothed with gentle jojoba oil and cover with a kid-sized satin bonnet.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Waist-Length Small Knotless',
    styleName: 'Knotless Braids',
    category: 'knotless',
    image: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1000&q=85',
    caption: 'Silky, lightweight knotless braids with neat square parting and tapered ends.',
    tags: ['Knotless', 'Waist Length', 'Protective'],
  },
  {
    id: 'gal-2',
    title: 'Textured Bohemian Goddess Braids',
    styleName: 'Boho Braids',
    category: 'boho',
    image: 'https://images.unsplash.com/photo-1584297091622-af8e5fd85223?auto=format&fit=crop&w=1000&q=85',
    caption: 'Soft human hair curly accents woven into medium knotless braids for vacation ready volume.',
    tags: ['Boho', 'Curls', 'Vacation Style'],
  },
  {
    id: 'gal-3',
    title: 'Sculpted Geometric Stitch Lines',
    styleName: 'Stitch Braids',
    category: 'stitch',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=1000&q=85',
    caption: 'High-definition stitch rows parted with razor-clean lines and zero tension on temples.',
    tags: ['Stitch Braids', 'Clean Lines', 'Sleek'],
  },
  {
    id: 'gal-4',
    title: 'Classic Medium Box Braids',
    styleName: 'Box Braids',
    category: 'box',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=1000&q=85',
    caption: 'Uniform density and clean grid parting for versatile top-knots and half-up styling.',
    tags: ['Box Braids', 'Mid-Back', 'Classic'],
  },
  {
    id: 'gal-5',
    title: 'Traditional Fulani Tribal Braid Pattern',
    styleName: 'Fulani Braids',
    category: 'fulani',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=1000&q=85',
    caption: 'Intricate center cornrow with matching forward-curving side plaits and golden cuffs.',
    tags: ['Fulani', 'Artisanal', 'Cultural Heritage'],
  },
  {
    id: 'gal-6',
    title: 'Clean Back Feed-In Cornrows',
    styleName: 'Cornrows',
    category: 'cornrows',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=85',
    caption: 'Symmetrical straight-back cornrows designed for healthy edges and lasting shine.',
    tags: ['Cornrows', 'Feed-In', 'Low Maintenance'],
  },
  {
    id: 'gal-7',
    title: 'Tender Scalp School Braids',
    styleName: 'Kids Braids',
    category: 'kids',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85',
    caption: 'Gentle protective plaits designed specifically for children with beads and soft edges.',
    tags: ['Kids Braids', 'Gentle Care', 'School Ready'],
  },
  {
    id: 'gal-8',
    title: 'Long Sleek Knotless with Defined Edges',
    styleName: 'Knotless Braids',
    category: 'knotless',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85',
    caption: 'Butt-length small knotless braids showing healthy scalp separation and fluid drop.',
    tags: ['Knotless', 'Long Braids', 'Flawless Drop'],
  },
  {
    id: 'gal-9',
    title: 'Multi-Directional Stitch Crown',
    styleName: 'Stitch Braids',
    category: 'stitch',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=1000&q=85',
    caption: 'Curved stitch braid styling swept into a graceful low bun for formal occasions.',
    tags: ['Stitch Braids', 'Updo', 'Formal'],
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=600&q=80',
    caption: 'Fresh knotless set finished for the weekend ✨ Clean parts and zero tension.',
    likes: 184,
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=600&q=80',
    caption: 'Stitch braid perfection at 2717 Wild Poplar Way, Greensboro 📐',
    likes: 215,
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1584297091622-af8e5fd85223?auto=format&fit=crop&w=600&q=80',
    caption: 'Boho curls catching that North Carolina golden hour light 🤎 Book ahead!',
    likes: 342,
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=600&q=80',
    caption: 'Classic box braids that stay neat for weeks. Protective style season is here.',
    likes: 198,
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=600&q=80',
    caption: 'Fulani detailing with golden cuffs. Every braid tells an authentic story 👑',
    likes: 279,
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80',
    caption: 'Gentle hands for tender heads. Kids braids made with patience & care 🌸',
    likes: 167,
  },
];

export const TRUST_ADVANTAGES = [
  {
    title: 'Braiding Specialist',
    description: 'Focused exclusively on beautiful protective styles.',
    icon: 'Sparkles',
  },
  {
    title: 'Professional Experience',
    description: 'Quality-focused braiding with attention to detail.',
    icon: 'Award',
  },
  {
    title: 'Convenient Booking',
    description: 'Request your appointment online with ease.',
    icon: 'Calendar',
  },
  {
    title: 'Greensboro, NC',
    description: 'Conveniently located at 2717 Wild Poplar Way.',
    icon: 'MapPin',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Detail-Focused Braiding',
    description:
      'Every style is created with attention to clean sections, neat finishes, and overall appearance. We focus on consistent parting lines and symmetrical placement.',
  },
  {
    title: 'Protective Styling',
    description:
      'Braiding can provide versatile protective options while helping clients maintain a polished look. We prioritize tension-free installation to protect your natural edges.',
  },
  {
    title: 'Personalized Styles',
    description:
      'Clients can choose styles that fit their personality, lifestyle, and occasion. From understated work-ready cornrows to waist-length bohemian curls.',
  },
  {
    title: 'Professional Experience',
    description:
      'Make the booking process simple from discovering the salon to arriving for the appointment. Transparent communication and SMS reminders keep you informed.',
  },
];

export const PREPARATION_CHECKLIST = [
  'Arrive with hair freshly shampooed and free of heavy leave-ins, oils, or grease.',
  'Blow-dry hair thoroughly from roots to ends with a comb attachment or paddle brush.',
  'Ensure hair is fully detangled before your appointment time.',
  'Inform your braider of any scalp sensitivities, tender spots, or edge concerns.',
  'Bring any specific hair accessories (cuffs, beads, cords) you would like incorporated.',
];

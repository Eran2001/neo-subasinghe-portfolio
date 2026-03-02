export interface Image {
  id: string;
  src: string;
  alt: string;
  title: string;
  tags: string[];
  date: string;
  albumId: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  coverSrc: string;
  tags: string[];
  date: string;
  location: string;
  gear: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

export interface Service {
  id: string;
  name: string;
  priceRange: string;
  features: string[];
  description: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  coverSrc: string;
  content: string;
}

export const IMAGES: Image[] = Array.from({ length: 24 }).map((_, i) => ({
  id: `img-${i + 1}`,
  src: `https://picsum.photos/seed/photo-${i + 1}/1200/800`,
  alt: `Gallery Image ${i + 1}`,
  title: `Visual Story ${i + 1}`,
  tags: [["Portrait", "Landscape", "Editorial", "Wedding"][i % 4]],
  date: "2024-01-15",
  albumId: `album-${(i % 6) + 1}`,
}));

export const ALBUMS: Album[] = [
  {
    id: "album-1",
    title: "Urban Solitude",
    description: "Exploring the quiet corners of the bustling city at dawn.",
    coverSrc: "https://picsum.photos/seed/urban/800/1000",
    tags: ["Urban", "B&W"],
    date: "2023-11-20",
    location: "New York City",
    gear: "Sony A7R IV, 35mm f/1.4",
  },
  {
    id: "album-2",
    title: "Wilderness Echoes",
    description: "A journey through the untouched peaks of the Northern Cascades.",
    coverSrc: "https://picsum.photos/seed/mountain/800/1000",
    tags: ["Nature", "Adventure"],
    date: "2023-09-12",
    location: "Washington, USA",
    gear: "Canon R5, 24-70mm f/2.8",
  },
  {
    id: "album-3",
    title: "Golden Hour Weddings",
    description: "Capturing the warmth and intimacy of love in natural light.",
    coverSrc: "https://picsum.photos/seed/wedding/800/1000",
    tags: ["Wedding", "Portrait"],
    date: "2023-08-05",
    location: "Tuscany, Italy",
    gear: "Fujifilm GFX 100S, 80mm f/1.7",
  },
  {
    id: "album-4",
    title: "Editorial Fashion",
    description: "High-contrast studio work for independent designers.",
    coverSrc: "https://picsum.photos/seed/fashion/800/1000",
    tags: ["Fashion", "Studio"],
    date: "2023-12-01",
    location: "London, UK",
    gear: "Leica SL2, 50mm f/1.4",
  },
  {
    id: "album-5",
    title: "Coastal Drift",
    description: "The rhythmic movement of the Pacific coastline.",
    coverSrc: "https://picsum.photos/seed/coast/800/1000",
    tags: ["Landscape", "Ocean"],
    date: "2023-07-22",
    location: "Big Sur, California",
    gear: "Sony A7R IV, 16-35mm f/2.8",
  },
  {
    id: "album-6",
    title: "Architectural Lines",
    description: "Minimalist perspectives on modern structural design.",
    coverSrc: "https://picsum.photos/seed/arch/800/1000",
    tags: ["Architecture", "Minimal"],
    date: "2024-01-10",
    location: "Tokyo, Japan",
    gear: "Phase One XF, 45mm",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    quote: "The way they capture light is simply magical. Our wedding photos feel like a dream.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Thorne",
    quote: "Professional, creative, and incredibly easy to work with. Highly recommended for brand work.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Elena Rodriguez",
    quote: "Every shot tells a story. I've never seen my studio's work look so premium.",
    rating: 5,
  },
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    name: "Editorial Portrait",
    priceRange: "$450 - $1,200",
    description: "High-end portraiture for professionals and creatives.",
    features: ["2 Hour Session", "Studio or Location", "15 Retouched Images", "Commercial License"],
  },
  {
    id: "s2",
    name: "Brand Storytelling",
    priceRange: "$1,500 - $4,000",
    description: "Comprehensive visual assets for your brand launch.",
    features: ["Full Day Shoot", "Product & Lifestyle", "Social Media Content", "Brand Strategy Call"],
  },
  {
    id: "s3",
    name: "Wedding Collections",
    priceRange: "$3,500 - $8,000",
    description: "Timeless documentation of your most important day.",
    features: ["8-12 Hours Coverage", "Second Photographer", "Online Gallery", "Luxury Photo Album"],
  },
];

export const POSTS: Post[] = [
  {
    id: "p1",
    title: "The Art of Natural Light",
    excerpt: "How to master the golden hour for breathtaking portraits.",
    tags: ["Tutorial", "Lighting"],
    date: "2024-02-10",
    coverSrc: "https://picsum.photos/seed/blog1/800/400",
    content: "Natural light is the most powerful tool in a photographer's arsenal...",
  },
  {
    id: "p2",
    title: "Minimalism in Composition",
    excerpt: "Why less is often more when framing your subject.",
    tags: ["Theory", "Composition"],
    date: "2024-01-25",
    coverSrc: "https://picsum.photos/seed/blog2/800/400",
    content: "In a world full of noise, a minimalist photograph can be a breath of fresh air...",
  },
];

export interface BraidingStyle {
  id: string;
  name: string;
  tagline: string;
  category: 'knotless' | 'box' | 'stitch' | 'cornrows' | 'fulani' | 'boho' | 'feed-in' | 'kids';
  description: string;
  benefits: string[];
  recommendedHairType: string;
  maintenanceTip: string;
  image: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  styleName: string;
  category: 'knotless' | 'box' | 'stitch' | 'cornrows' | 'fulani' | 'boho' | 'kids';
  image: string;
  caption: string;
  tags: string[];
}

export interface BookingRequest {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  serviceId: string;
  serviceName: string;
  hairLength: string;
  braidSize: string;
  preferredDate: string;
  preferredTime: string;
  hairCondition: string;
  smsConsent: boolean;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'rescheduled';
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  instagramHandle: string;
  instagramUrl: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
}

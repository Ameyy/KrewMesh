export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  category: "Neural Wear" | "Optics" | "Chronometry" | "Spatial Audio" | "Exoskeleton";
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: "NEW" | "BESTSELLER" | "LIMITED" | "POPULAR";
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  specs: { label: string; value: string }[];
  colorways: { name: string; hex: string; bgClass: string }[];
  inStock: boolean;
  stockCount: number;
  leadTime: string;
  images: {
    main: string;
    angles: string[];
  };
  reviews: ProductReview[];
}

export const ECOM_PRODUCTS: Product[] = [
  {
    id: "chrono-x99",
    sku: "AETH-CHRN-099",
    name: "CHRONO // X-99",
    subtitle: "Tachyon Resonance Quantum Chronometer",
    category: "Chronometry",
    price: 1450,
    compareAtPrice: 1750,
    rating: 4.9,
    reviewCount: 128,
    badge: "BESTSELLER",
    tagline: "Atomic precision meets diamondoid kinetic chronometry.",
    description: "Forged from cold-pressed monocrystalline sapphire and liquid titanium. Features a sub-atomic tachyon resonance frequency oscillator delivering 0.00001ms atomic precision with holographic chronometry projection.",
    longDescription: "The CHRONO // X-99 redefines modern luxury timekeeping. Engineered in the AETHER Zurich Spatial Laboratory, it houses a self-charging kinetic tachyon generator that harnesses planetary magnetic flux. The micro-etched sapphire dial projects a high-contrast polarized HUD visible in direct solar glare or deep ocean trenches up to 300 meters.",
    features: [
      "Monocrystalline Sapphire Crystal with Anti-Glare Diamond Coating",
      "Sub-atomic Tachyon Resonator (Accuracy: ±0.0001 sec / millennium)",
      "Kinetic Ambient Flux Self-Charging Mechanism (Infinite Battery)",
      "Holographic Time & Geolocation Spatial Projection",
      "Grade-5 Aerospace Titanium Unibody Chasis"
    ],
    specs: [
      { label: "Case Diameter", value: "41.5 mm" },
      { label: "Thickness", value: "8.8 mm Ultra-Slim" },
      { label: "Case Material", value: "Liquid Titanium Grade 5" },
      { label: "Crystal", value: "Laser-Fused Sapphire 9.5 Mohs" },
      { label: "Water Resistance", value: "30 ATM / 300 Meters" },
      { label: "Movement", value: "Tachyon Harmonic Calibre IX" },
      { label: "Band Width", value: "22 mm Magnetic Quick-Lock" },
      { label: "Warranty", value: "10-Year Global Quantum Guarantee" }
    ],
    colorways: [
      { name: "Polar Titanium", hex: "#E2E8F0", bgClass: "bg-slate-200" },
      { name: "Obsidian Black", hex: "#0F172A", bgClass: "bg-slate-900" },
      { name: "Electric Cobalt", hex: "#2563EB", bgClass: "bg-blue-600" }
    ],
    inStock: true,
    stockCount: 14,
    leadTime: "Dispatches within 24 hours",
    images: {
      main: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      angles: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80"
      ]
    },
    reviews: [
      {
        id: "r1",
        author: "Marcus K., Senior Architect",
        rating: 5,
        date: "September 12, 2026",
        title: "The apex of industrial design.",
        comment: "The precision on the sapphire crystal is unbelievable. Weight balance is pure perfection on the wrist. Easily the finest piece of hardware I own.",
        verified: true
      },
      {
        id: "r2",
        author: "Elena Rostova, Spatial Engineer",
        rating: 5,
        date: "August 28, 2026",
        title: "Unmatched clarity and craftsmanship.",
        comment: "The holographic projection in low light is genuinely futuristic without feeling gimmicky. Build quality rivals the best Swiss luxury houses.",
        verified: true
      }
    ]
  },
  {
    id: "neural-ring-v4",
    sku: "AETH-NR-004",
    name: "NEURAL // RING-4",
    subtitle: "Biometric Neural Interface & Gesture Transmitter",
    category: "Neural Wear",
    price: 890,
    compareAtPrice: 1050,
    rating: 4.8,
    reviewCount: 94,
    badge: "NEW",
    tagline: "Sub-dermal micro-haptic spatial gesture controller.",
    description: "An ultra-compact titanium carbide smart ring that translates subtle finger micro-gestures and biometric vitals into instant digital and spatial computing commands.",
    longDescription: "Equipped with 16 sub-surface neural transducers, the NEURAL // RING-4 intercepts motor nerve electrical impulses at the proximal phalanx. Control your spatial displays, smart environments, digital audio, and authenticated payments with imperceptible micro-taps and swipes.",
    features: [
      "16-Channel Micro-EMG Neural Sensor Array",
      "Touchless Spatial Navigation for Vision Pro & Smart Glasses",
      "Medical-Grade ECG, Blood Oxygen & Cortisol Tracking",
      "Ultralight Titanium Carbide Shell (Only 3.8 Grams)",
      "Wireless Induction Charging Dock Included"
    ],
    specs: [
      { label: "Weight", value: "3.8 Grams" },
      { label: "Width", value: "7.0 mm" },
      { label: "Thickness", value: "2.4 mm" },
      { label: "Battery Life", value: "7 Days Continuous Tracking" },
      { label: "Water Resistance", value: "10 ATM (100m Submersible)" },
      { label: "Connectivity", value: "Bluetooth 5.4 LE + UWB" },
      { label: "Compatibility", value: "iOS, macOS, Android, VisionOS, Windows" }
    ],
    colorways: [
      { name: "Polished Chrome", hex: "#CBD5E1", bgClass: "bg-slate-300" },
      { name: "Matte Carbon", hex: "#1E293B", bgClass: "bg-slate-800" },
      { name: "Solar Champagne", hex: "#E2E8F0", bgClass: "bg-amber-100" }
    ],
    inStock: true,
    stockCount: 22,
    leadTime: "Ships same day",
    images: {
      main: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
      angles: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
      ]
    },
    reviews: [
      {
        id: "r3",
        author: "Devon Chen, Product Lead",
        rating: 5,
        date: "September 03, 2026",
        title: "Replaced my Apple Watch completely.",
        comment: "Extremely comfortable for sleep tracking and the gesture controls are insanely intuitive once calibrated.",
        verified: true
      }
    ]
  },
  {
    id: "aether-vision-hud",
    sku: "AETH-OPT-8K",
    name: "AETHER // VISION-16K",
    subtitle: "Direct Retinal Waveguide Spatial Eyewear",
    category: "Optics",
    price: 2150,
    compareAtPrice: 2400,
    rating: 4.95,
    reviewCount: 76,
    badge: "LIMITED",
    tagline: "Ultra-featherweight 18g spatial display eyewear.",
    description: "Frameless aerodynamic spatial glasses featuring dual micro-laser waveguides projecting 16K ultra-crisp interfaces directly to the visual retina.",
    longDescription: "Engineered to eliminate bulky spatial headsets. The AETHER // VISION-16K weighs just 18.4 grams and looks like high-fashion luxury eyewear. Electrochromic lenses instantly tint from 100% crystal clear indoors to 95% dark sunglasses under sunlight.",
    features: [
      "Dual Micro-Laser 16K Spatial Waveguides (240Hz Refresh)",
      "Instant Electrochromic Tint Transition (0.01 Seconds)",
      "Integrated Dual Bone-Conduction Audio Transducers",
      "Spatial Depth LiDAR Scanner with Eye-Tracking Autocalibration",
      "Custom Prescription Lens Inserts Supported"
    ],
    specs: [
      { label: "Total Weight", value: "18.4 Grams" },
      { label: "FOV", value: "120° Panoramic Spatial Horizon" },
      { label: "Brightness", value: "5,000 Nits Peak Outdoors" },
      { label: "Battery Life", value: "12 Hours Continuous Display" },
      { label: "Charging", value: "Magnetic Leather Travel Case" }
    ],
    colorways: [
      { name: "Crystal Frost", hex: "#F8FAFC", bgClass: "bg-slate-100" },
      { name: "Matte Charcoal", hex: "#334155", bgClass: "bg-slate-700" },
      { name: "Cyber Amber", hex: "#F59E0B", bgClass: "bg-amber-500" }
    ],
    inStock: true,
    stockCount: 8,
    leadTime: "Limited stock — ships in 48 hours",
    images: {
      main: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
      angles: [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80"
      ]
    },
    reviews: [
      {
        id: "r4",
        author: "Sophia Sterling, Creative Director",
        rating: 5,
        date: "September 09, 2026",
        title: "The future has finally arrived.",
        comment: "I wear these 10 hours a day for creative work. No eye fatigue, crystal clear text, and they actually look gorgeous on.",
        verified: true
      }
    ]
  },
  {
    id: "orbital-zero-g",
    sku: "AETH-SND-001",
    name: "ORBITAL // ZERO-G",
    subtitle: "Lossless Acoustical Spatial Audio Pods",
    category: "Spatial Audio",
    price: 640,
    compareAtPrice: 750,
    rating: 4.85,
    reviewCount: 162,
    badge: "POPULAR",
    tagline: "Beryllium planar magnetic levitating audio pods.",
    description: "Lossless acoustical earbuds with true magnetic levitation charging station. Delivers studio-grade spatial frequency response from 2 Hz to 96,000 Hz.",
    longDescription: "Designed in collaboration with acoustic scientists. The ORBITAL // ZERO-G uses pure beryllium planar magnetic diaphragms for near-zero harmonic distortion (<0.0001% THD). Features active quantum phase anti-noise cancellation that adapts 8,000 times per second.",
    features: [
      "Pure Beryllium Planar Magnetic Drivers",
      "True 96kHz / 24-bit Lossless Wireless Transmission",
      "Active Anti-Resonance Environmental Noise Cancellation (-52dB)",
      "Levitating Magnetic Desk Charging Cradle",
      "Ergonomic Memory-Fit Liquid Silicone Tips"
    ],
    specs: [
      { label: "Frequency Range", value: "2 Hz – 96,000 Hz" },
      { label: "Battery Life", value: "14h Pods / 56h with Case" },
      { label: "Driver Size", value: "13.2 mm Planar Beryllium" },
      { label: "Latency", value: "12ms Ultra-Low Gaming Mode" },
      { label: "Waterproofing", value: "IP68 Dust & Water Proof" }
    ],
    colorways: [
      { name: "Clean Ceramic", hex: "#FFFFFF", bgClass: "bg-white" },
      { name: "Space Slate", hex: "#1E293B", bgClass: "bg-slate-800" },
      { name: "Cyan Pulse", hex: "#06B6D4", bgClass: "bg-cyan-500" }
    ],
    inStock: true,
    stockCount: 31,
    leadTime: "Dispatches within 24 hours",
    images: {
      main: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
      angles: [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
      ]
    },
    reviews: [
      {
        id: "r5",
        author: "Julian Thorne, Sound Designer",
        rating: 5,
        date: "September 01, 2026",
        title: "Soundstage is ridiculously wide.",
        comment: "Every micro-detail in audio tracks is revealed with laser clarity. The levitating cradle on my desk is also a conversation starter.",
        verified: true
      }
    ]
  },
  {
    id: "nanoweave-exo-jacket",
    sku: "AETH-EXO-001",
    name: "EXO // NANO-WEAVE 01",
    subtitle: "Thermodynamic Kinetic Protective Outerwear",
    category: "Exoskeleton",
    price: 1850,
    compareAtPrice: 2100,
    rating: 4.9,
    reviewCount: 42,
    badge: "LIMITED",
    tagline: "Carbon nanotube climate-adaptive urban armor.",
    description: "Tailored luxury technical jacket integrating carbon nanotube weave, active micro-peltier thermal regulation, and kinetic energy harvesting.",
    longDescription: "The intersection of haute couture and defensive cyber-materials. The EXO // NANO-WEAVE dynamically regulates body temperature in climates ranging from -20°C to +45°C. Features internal micro-cables for lumbar postural support during extended work sessions.",
    features: [
      "Carbon Nanotube Woven Shell (Abrasion & Water Proof)",
      "Active Micro-Peltier Thermo-Regulating Grid",
      "Kinetic Harvest Fibers (Charges your devices as you walk)",
      "Hidden RFID/EMP Shielded Pockets",
      "Ergonomic Posture Support Skeleton"
    ],
    specs: [
      { label: "Material", value: "Carbon Nanotube 80% / Nomex 20%" },
      { label: "Weight", value: "780 Grams Featherlight" },
      { label: "Thermal Range", value: "-20°C to +45°C Active" },
      { label: "Power Storage", value: "10,000 mAh Integrated Graphene" },
      { label: "Care", value: "Machine Washable (Detach Power Unit)" }
    ],
    colorways: [
      { name: "Glacier Bone", hex: "#F1F5F9", bgClass: "bg-slate-100" },
      { name: "Stealth Void", hex: "#0F172A", bgClass: "bg-slate-900" },
      { name: "Cyber Hazard", hex: "#EA580C", bgClass: "bg-orange-600" }
    ],
    inStock: true,
    stockCount: 9,
    leadTime: "Crafted in small batches",
    images: {
      main: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80",
      angles: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80"
      ]
    },
    reviews: [
      {
        id: "r6",
        author: "Kai Hansen, Tech Journalist",
        rating: 5,
        date: "August 20, 2026",
        title: "Masterpiece of wearable engineering.",
        comment: "The internal climate control is magic. Walks in freezing wind feel like sitting by a cozy hearth. Impeccable tailoring.",
        verified: true
      }
    ]
  }
];

export const CATEGORIES_LIST = [
  { name: "All", count: ECOM_PRODUCTS.length },
  { name: "Neural Wear", count: ECOM_PRODUCTS.filter(p => p.category === "Neural Wear").length },
  { name: "Optics", count: ECOM_PRODUCTS.filter(p => p.category === "Optics").length },
  { name: "Chronometry", count: ECOM_PRODUCTS.filter(p => p.category === "Chronometry").length },
  { name: "Spatial Audio", count: ECOM_PRODUCTS.filter(p => p.category === "Spatial Audio").length },
  { name: "Exoskeleton", count: ECOM_PRODUCTS.filter(p => p.category === "Exoskeleton").length }
];

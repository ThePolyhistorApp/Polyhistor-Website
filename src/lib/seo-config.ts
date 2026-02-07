export const seoConfig = {
  consumer: {
    title: "Polyhistor | Never Lose Your Friends (Or Your Money) Again",
    description: "The all-in-one app to track your squad, split costs instantly, and find the perfect middle point to meet. Group travel made simple for Gen Z travelers.",
    keywords: [
      "group trip planner",
      "split bills with friends",
      "find middle point",
      "friend tracker app",
      "group travel app",
      "expense splitting",
      "travel coordination",
      "squad map",
      "meet in the middle",
    ],
    ogImage: "/og-image-consumer.png",
  },
  enterprise: {
    title: "Polyhistor Enterprise | Duty of Care Platform for Tour Operators",
    description: "Real-time student tracking, automated compliance, and liability protection for tour operators. FERPA-compliant safety platform with 98% adoption rate.",
    keywords: [
      "student duty of care",
      "tour operator safety app",
      "group travel liability",
      "student tracking software",
      "FERPA compliance",
      "tour safety platform",
      "real-time student monitoring",
      "educational travel safety",
    ],
    ogImage: "/og-image-enterprise.png",
  },
};

export const structuredData = {
  consumer: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Polyhistor",
    applicationCategory: "TravelApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "90",
    },
    description: "Group travel app for tracking friends, splitting expenses, and finding perfect meeting points",
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Polyhistor",
    url: "https://thepolyhistor.com",
    logo: "https://thepolyhistor.com/polyhistor-logo.svg",
    sameAs: [
      "https://twitter.com/thepolyhistor",
      "https://instagram.com/thepolyhistor",
    ],
  },
};

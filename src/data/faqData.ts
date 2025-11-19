interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "When is ThePolyHistor launching?",
    answer:
      "We are on track for a full launch very soon. Sign up for the waitlist to get notified and receive early access!",
  },
  {
    question: "What will it cost?",
    answer:
      "ThePolyHistor will operate on a freemium model. Core features like live location sharing will be free for everyone. Advanced AI-powered features, including our proactive safety alerts and intelligent trip planner, will be part of a premium subscription.",
  },
  {
    question: "What devices will be supported?",
    answer:
      "We are building ThePolyHistor as a mobile-first application and will be launching on both iOS and Android simultaneously.",
  },
  {
    question: "How does the AI safety alert system work?",
    answer:
      "Our system uses a custom predictive model that assesses risk based on location data.When your group approaches an area with a higher risk profile, the app will send a proactive notification, allowing you to make more informed decisions.",
  },
];

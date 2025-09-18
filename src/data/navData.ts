export interface NavFeature {
  title: string;
  href: string;
}

export interface NavColumn {
  title: string;
  subtext: string;
  features: NavFeature[];
}

export interface NavData {
  product: {
    columns: NavColumn[];
  };
  roles: {
    title: string;
    features: NavFeature[];
  };
  toolbox: {
    columns: NavColumn[];
  };
}

export const navData: NavData = {
  product: {
    columns: [
      {
        title: "FIND QUALIFIED LEADS",
        subtext: "Get a list of high-potential leads with verified emails, phone numbers, and relevant details.",
        features: [
          { title: "lead database", href: "/product/lead-database" },
          { title: "Email finder & verifier", href: "/product/email-finder" },
          { title: "Phone number finder", href: "/product/phone-finder" }
        ]
      },
      {
        title: "AUTOMATE MULTICHANN SEQUENCES",
        subtext: "Run personalized outreach across email, LinkedIn, or phone from one spot.",
        features: [
          { title: "Multichannel sequences", href: "/product/multichannel-sequences" },
          { title: "LinkedIn prospecting", href: "/product/linkedin-prospecting" },
          { title: "In-app calling", href: "/product/in-app-calling" },
          { title: "AI-powered personalization", href: "/product/ai-personalization" },
          { title: "Unified inbox", href: "/product/unified-inbox" }
        ]
      },
      {
        title: "LAND IN INBOXES",
        subtext: "Make sure your outreach gets delivered where it matters, out of the spam folder.",
        features: [
          { title: "Inbox rotation", href: "/product/inbox-rotation" },
          { title: "Warm-up & deliverability booster", href: "/product/warmup-deliverability" }
        ]
      }
    ]
  },
  roles: {
    title: "MarketingPro",
    features: [
      { title: "For Sales Development", href: "/roles/sales-development" },
      { title: "For RevOps", href: "/roles/revops" },
      { title: "For Founder", href: "/roles/founder" }
    ]
  },
  toolbox: {
    columns: [
      {
        title: "YOUTUBE BEST",
        subtext: "Learn from the best outreach strategies and techniques.",
        features: [
          { title: "AI personalization", href: "/toolbox/ai-personalization" },
          { title: "Handle any cold calls", href: "/toolbox/handle-cold-calls" },
          { title: "11 steps to stop landing", href: "/toolbox/11-steps-stop-landing" }
        ]
      },
      {
        title: "OUTREACH TEMPLATES",
        subtext: "Ready-to-use templates and scripts for your outreach campaigns.",
        features: [
          { title: "Cold email templates", href: "/toolbox/cold-email-templates" },
          { title: "AI sales prompt", href: "/toolbox/ai-sales-prompt" },
          { title: "Voicemail scripts", href: "/toolbox/voicemail-scripts" }
        ]
      }
    ]
  }
};

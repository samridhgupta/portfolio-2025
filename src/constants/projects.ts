// src/constants/projects.ts

export interface Project {
  id: string;
  title: string;
  duration: string;
  domain: string;
  description: string;
  role: string;
  techStack: string[];
  keyAchievements: string[];
  metrics?: string[];
  imageUrl?: string;
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    id: "virtual-terms",
    title: "Virtual Terms - Legal AI Platform",
    duration: "Apr 2024 - Present",
    domain: "Legal Tech",
    description: "AI-powered platform for creating, managing, and signing business agreements with intelligent legal assistance.",
    role: "Solution Architect & Tech Lead",
    techStack: [
      "Next.js",
      "GCP",
      "OpenAI",
      "Vercel",
      "Firebase",
      "MailChimp",
      "HubSpot",
      "Looker Studio"
    ],
    keyAchievements: [
      "Led end-to-end development of AI-assisted legal document platform",
      "Implemented domain-specific LLM fine-tuning for legal understanding",
      "Built secure document signing and verification system",
      "Integrated analytics and CRM for business intelligence"
    ],
    metrics: [
      "Reduced agreement creation time by 60%",
      "Automated 80% of standard legal term explanations",
      "99.9% uptime with enterprise-grade security"
    ]
  },
  {
    id: "p41-genai",
    title: "P41 GenAI Suite",
    duration: "Jan 2024 - Present",
    domain: "AI/ML",
    description: "Internal AI enablement toolkit featuring RAG-powered knowledge assistant and productivity tools.",
    role: "AI Solution Architect",
    techStack: [
      "Python",
      "OpenAI API",
      "LangChain",
      "Vector DBs",
      "Slack API",
      "GCP",
      "AWS Bedrock"
    ],
    keyAchievements: [
      "Architected company-wide AI infrastructure and policies",
      "Developed @p41-rag Slack assistant for internal knowledge management",
      "Created AI-driven daily check-in system with analytics",
      "Established AI learning path for engineering team"
    ],
    metrics: [
      "30% increase in team productivity",
      "90% faster information retrieval",
      "100+ daily AI assistant interactions"
    ]
  },
  {
    id: "forte-lessons",
    title: "Forte Music Marketplace",
    duration: "Nov 2020 - Oct 2024",
    domain: "EdTech",
    description: "Premium marketplace connecting music students with expert teachers through high-quality video lessons.",
    role: "Tech Lead & Product Manager",
    techStack: [
      "Next.js",
      "Nest.js",
      "Twilio",
      "WebRTC",
      "AWS",
      "PostgreSQL"
    ],
    keyAchievements: [
      "Built scalable video conferencing with <50ms latency",
      "Implemented multi-microphone support for instruments",
      "Designed teacher-student matching algorithm",
      "Led complete product development lifecycle"
    ],
    metrics: [
      "13,000+ active teachers",
      "190,000+ minutes of lessons delivered",
      "4.8/5 average session rating"
    ]
  },
  {
    id: "lucid-hearing",
    title: "Lucid Cloud Migration",
    duration: "Mar 2021 - Jan 2024",
    domain: "Healthcare",
    description: "Enterprise-scale cloud transformation for medical device infrastructure.",
    role: "Cloud Architecture Lead",
    techStack: [
      "Azure",
      "AWS",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform"
    ],
    keyAchievements: [
      "Led migration from on-premise to cloud infrastructure",
      "Implemented multi-region failover system",
      "Optimized database performance and security",
      "Mentored 20+ developers in cloud practices"
    ],
    metrics: [
      "70% reduction in infrastructure costs",
      "99.99% system availability",
      "90% reduction in deployment errors"
    ]
  },
  {
    id: "conductor",
    title: "Conductor Analytics",
    duration: "Jan 2023 - Present",
    domain: "Business Intelligence",
    description: "Executive dashboard for corporate metrics and team analytics.",
    role: "Tech Lead",
    techStack: [
      "Next.js",
      "Nest.js",
      "AWS",
      "TypeScript",
      "PostgreSQL"
    ],
    keyAchievements: [
      "Built secure multi-tenant reporting system",
      "Implemented encrypted data storage",
      "Designed real-time analytics dashboard",
      "Led agile team of 5 developers"
    ],
    metrics: [
      "100+ executive users",
      "5M+ data points processed daily",
      "Sub-second query response time"
    ]
  }
];
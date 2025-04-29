// src/constants/projectCategories.ts

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Projects leveraging artificial intelligence and machine learning technologies"
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    description: "Cloud migration and infrastructure optimization projects"
  },
  {
    id: "marketplace",
    name: "Marketplace & Platforms",
    description: "Digital marketplace and platform development projects"
  },
  {
    id: "enterprise",
    name: "Enterprise Solutions",
    description: "Large-scale enterprise application development"
  },
  {
    id: "saas",
    name: "SaaS Products",
    description: "Software-as-a-Service product development"
  }
];
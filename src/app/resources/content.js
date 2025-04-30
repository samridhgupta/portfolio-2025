import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Samridh",
  lastName: "Gupta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "The Technocrat",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Join my monthly dispatch where I share lessons from the frontlines of
      tech — from shipping GenAI features to scaling cloud-native systems.
      Ideal for tech leaders, builders, and founder-operators.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/samridhgupta",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/samridhgupta/",
  },
  // {
  //   name: "Xds",
  //   icon:"X",
  //   link: "https://x.com/samridhg",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:samridhgupta@gmail.com",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@samridhgupta",
    icon: "pages",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a founder-first technologist`,
  headline: <>Technocrat, Engineer, Builder, Product Manager</>,
  subline: (
    <>
      I'm Samridh, a solution architect and full-stack generalist at
      <InlineCode>Particle41</InlineCode>. I work at the intersection of code,
      product, and GTM — helping startups move fast without breaking what
      matters.

    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Samridh Gupta — part engineer, part strategist, and always a
        builder. With 9+ years of experience across engineering leadership,
        full-stack architecture, AI/GenAI systems, and startup strategy, I’ve
        worked with founders and product teams to build scalable systems that
        work — and grow.
        <br />
        <br />
        At <InlineCode >Particle41</InlineCode>, I’ve led 15+ projects across
        industries: shipping <InlineCode >LLM-integrated</InlineCode> platforms,
        optimizing DevOps flows, and designing cloud-native architectures that
        don’t crumble under pressure. Whether building MVPs, planning GTM, or
        scaling from v1 to v2 — I play both the coder and the coach.

      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Particle41",
        timeframe: "2016 - Present",
        role: "Engineering Manager / Architect",
        achievements: [
          <>
            Spearheaded 15+ product builds from zero to scale, blending
            full-stack execution with AI/GenAI innovation across web, mobile,
            and infra.
          </>,
          <>
            Architected a Slack-based RAG assistant to deliver real-time team
            support via OpenAI, LangChain, and vector DBs.
          </>,
          <>
            Reduced release times by 80% through CI/CD standardization on AWS
            and GCP, and coached 20+ devs to ship with confidence.
          </>,
          <>
            Led GTM-aligned roadmaps, MVP discovery, and AI feature estimation
            in fast-moving startup environments.
          </>,
        ],
        images: [],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      // },
     
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Lovely Professional University - 2015",
        description: <>B.Tech in Computer Science Engineering</>,
      },
      {
        name: "Duke University - 2024",
        description: <>Product Management Certified</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AI / GenAI Stack",
        description: (
          <>
            LangChain, OpenAI APIs, RAG pipelines, LLM Ops, Slack Agents, AI
            Tooling Strategy
          </>
        ),
        images: [],
      },
      {
        title: "Frontend",
        description: <>Next.js, React, TypeScript, Tailwind, React Native</>,
        images: [],
      },
      {
        title: "Backend",
        description: <>Node.js, NestJS, Python, BFF, Microservices</>,
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: <>AWS, GCP, Docker, Kubernetes, GitHub Actions, CI/CD</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Build. Think. Scale.",
  description: `Deep dives by ${person.name} on building with AI, architecting scalable systems, and aligning engineering with startup goals.`,
};

const work = {
  label: "Work",
  title: "Projects & Experiments",
  description: `Selected works and experiments by ${person.name} across AI, infra, and product strategy.`,
};

const gallery = {
  label: "Gallery",
  title: "Snapshots",
  description: `A collection of frames by ${person.name} — travel, nature, pixels.`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };

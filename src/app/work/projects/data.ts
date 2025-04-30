export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
}

export interface Project {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  images: string[];
  team?: TeamMember[];
  link?: string;
  content: string;
}
export const projects: Project[] = [
    {
      slug: "virtual-terms-legal-agreements-platform",
      title: "Virtual Terms: Legal Agreements Platform",
      publishedAt: "2024-04-01",
      summary: "A full-stack platform for drafting, sending, and e-signing business agreements, enhanced with AI-powered legal insights.",
      images: [
        "/images/projects/virtual-terms/cover.jpg",
        "/images/projects/virtual-terms/screenshot-01.jpg"
      ],
      content: `## Overview
  
  Developed a full-stack application enabling users to create, send, and sign legal agreements seamlessly. Leveraged AI to auto-fill clauses and explain complex legal terms, reducing manual effort and errors.
  
  ## Key Features
  
  - **Document Builder**: Intuitive UI for drafting agreements with templated clauses.  
  - **AI Legal Assistant**: Powered by OpenAI API, offers clause suggestions and term clarifications.  
  - **E-Signature Workflow**: Integrated with DocuSign/Firebase to capture signatures and audit trails.  
  - **Analytics Dashboard**: Tracks agreement status, completion times, and user activity.
  
  ## Technologies Used
  
  - **Next.js & React**: Front-end SPA for editing and collaboration.  
  - **GCP & Firebase**: Real-time data sync and hosting.  
  - **OpenAI API**: Clause generation and term explanation.  
  - **MailChimp & HubSpot**: Automated notifications and CRM integration.  
  - **Looker Studio**: Embedded reporting for usage metrics.
  
  ## Challenges and Learnings
  
  Navigating legal language complexity required fine-tuning LLM prompts to ensure accuracy. Built robust error-handling around signature capture to prevent data loss. Learned best practices for real-time collaboration to avoid merge conflicts in document edits.
  
  ## Outcome
  
  Achieved a 60% reduction in average contract-creation time and onboarded 200+ enterprise users within three months, with zero major legal discrepancies reported.`
    },
    {
      slug: "p41-genai-initiatives",
      title: "P41 GenAI Initiatives",
      publishedAt: "2024-06-15",
      summary: "Internal AI-enablement toolkit and Slack-based RAG assistant to boost GenAI adoption across Particle41.",
      images: [
        "/images/projects/p41-genai/cover.jpg",
        "/images/projects/p41-genai/rag-screenshot.jpg"
      ],
      content: `## Overview
  
  Founded the GenAI center of excellence at Particle41, delivering internal tooling and integrations to streamline AI workflows. Spearheaded the development of a Slack RAG assistant and suite of AI-powered utilities.
  
  ## Key Features
  
  - **@p41-rag Slack Bot**: Retrieves contextual answers from internal docs via vector search (LangChain + Vector DB).  
  - **AI Prompt Library**: Central repo of tested prompts for legal, analytics, and support teams.  
  - **GenAI Dashboard**: Monitors model usage, cost, and performance across AWS Bedrock & GCP.  
  - **AI Agents**: Automated workflows (e.g., weekly report generation) triggered via Slack.
  
  ## Technologies Used
  
  - **Python & LangChain**: RAG pipelines and prompt orchestration.  
  - **OpenAI API & AWS Bedrock**: LLM backends for generation and embeddings.  
  - **GCP & AWS**: Hybrid cloud hosting, fine-tuning, and cost monitoring.  
  - **Slack API**: Interactive slash commands and message buttons.  
  - **Looker Studio**: Visualized AI adoption metrics.
  
  ## Challenges and Learnings
  
  Ensuring data privacy in RAG required custom pre-processing pipelines and access controls. Orchestrating multi-cloud LLMs taught the importance of abstraction layers to switch providers seamlessly. Established an “AI policy” docs repo to educate teams on ethical usage.
  
  ## Outcome
  
  Enabled a 30% increase in cross-team AI usage within two quarters and reduced average support ticket resolution time by 25% through automated AI-driven triage.`
    },
    {
      slug: "conductor-reporting-tool",
      title: "Conductor: Internal Reporting Tool for Executives",
      publishedAt: "2023-01-10",
      summary: "A secure, full-featured reporting suite aggregating financial, employee, and skills metrics for leadership dashboards.",
      images: [
        "/images/projects/conductor/cover.jpg",
        "/images/projects/conductor/dashboard-01.jpg"
      ],
      content: `## Overview
  
  Built a centralized reporting platform that extracts data from multiple sources (HR, finance, project management) and presents interactive dashboards to executives.
  
  ## Key Features
  
  - **Multi-Source ETL**: Ingests CSV, SQL, and API data into a unified warehouse.  
  - **Role-Based Access**: Fine-grained permissions ensure confidentiality.  
  - **Custom Dashboards**: Drag-and-drop chart builder for KPI visualization.  
  - **Automated Exports**: Scheduled PDF & CSV reports via email.
  
  ## Technologies Used
  
  - **Next.js & NestJS**: Front-end and back-end services.  
  - **AWS (Lambda, S3, RDS)**: Serverless ETL pipelines and storage.  
  - **TypeScript & Postgres**: Strong typing and relational data integrity.  
  - **Chart.js & Recharts**: Interactive charts.  
  
  ## Challenges and Learnings
  
  Designing an ETL resilient to schema changes in source systems required dynamic mapping and versioning. Implemented a secure token-rotation mechanism for API credentials. Gained deep insights into scaling serverless data pipelines.
  
  ## Outcome
  
  Reduced manual reporting effort by 70% and provided leadership with real-time insights, driving faster decision-making and a 15% improvement in operational efficiency.`
    },
    {
      slug: "lucid-hearing-cloud-infra-transition",
      title: "Lucid Hearing: Cloud Infrastructure Transition",
      publishedAt: "2021-03-01",
      summary: "Migrated on-premise audio-processing workloads for a tele-audiology platform to Azure & AWS, cutting costs by 70%.",
      images: [
        "/images/projects/lucid-hearing/cover.jpg",
        "/images/projects/lucid-hearing/migration-01.jpg"
      ],
      content: `## Overview
  
  Led the migration of a high-throughput audio/video processing backend from bare-metal servers to a hybrid Azure/AWS cloud environment, ensuring high availability and low latency for tele-audiology sessions.
  
  ## Key Features
  
  - **Containerized Services**: Dockerized media transcoding pipelines with auto-scaling via Kubernetes.  
  - **CI/CD Automation**: GitHub Actions workflows for blue/green deployments.  
  - **Secure Networking**: VPN tunnels and VPC peering for private data channels.  
  - **Monitoring & Alerting**: CloudWatch & Azure Monitor integrations for SLA tracking.
  
  ## Technologies Used
  
  - **Azure & AWS**: EC2, AKS/EKS, S3, Blob Storage, RDS.  
  - **Kubernetes & Docker**: Orchestrated microservices.  
  - **PostgreSQL**: Geo-replicated relational database.  
  - **Terraform**: Infrastructure as code.
  
  ## Challenges and Learnings
  
  Orchestrating cross-cloud networking and ensuring sub-50 ms call latency required careful topology design. Automated cost-reporting dashboards to keep spend under tight budgets. Developed rollback strategies to handle any deployment failures without downtime.
  
  ## Outcome
  
  Reduced infrastructure costs by 70% while improving service uptime to 99.9%, and accelerated deployment cycles by 80%.`
    },
    {
      slug: "forte-lessons-online-marketplace-for-music-teachers",
      title: "Forte Lessons: Online Marketplace for Music Teachers",
      publishedAt: "2020-11-01",
      summary: "A scalable video-conferencing marketplace connecting 13,000+ music teachers with students worldwide.",
      images: [
        "/images/projects/forte-lessons/cover.jpg",
        "/images/projects/forte-lessons/classroom-01.jpg"
      ],
      content: `## Overview
  
  Developed a full-stack platform for booking and conducting music lessons online, featuring live audio/video, scheduling, and billing.
  
  ## Key Features
  
  - **Live Lessons**: Low-latency WebRTC sessions with multi-mic support.  
  - **Teacher Profiles & Scheduling**: Calendar integration and automated reminders.  
  - **Payment Gateway**: Stripe integration for secure payments and payouts.  
  - **Usage Analytics**: Tracks lesson durations, teacher ratings, and revenue.
  
  ## Technologies Used
  
  - **Next.js & NestJS**: End-to-end TypeScript stack.  
  - **Twilio & WebRTC**: Real-time audio/video communication.  
  - **AWS (Lambda, S3)**: Serverless functions and media storage.  
  - **PostgreSQL & Firebase**: Relational & NoSQL data stores.
  
  ## Challenges and Learnings
  
  Ensuring sub-50 ms audio/video latency led to custom TURN/STUN configurations. Scaled media servers horizontally to handle peak loads. Implemented encrypted signaling channels to comply with privacy standards.
  
  ## Outcome
  
  Grew to 13,000+ teachers and logged over 190,000 lesson minutes, maintaining > 99.5% call success rate and 4.8★ average rating.`
    },
    {
      slug: "the-classroom-door-collaborative-edtech-app",
      title: "The Classroom Door: Collaborative EdTech App",
      publishedAt: "2018-03-01",
      summary: "An interactive whiteboard and video-chat platform enabling students and teachers to collaborate in real time.",
      images: [
        "/images/projects/classroom-door/cover.jpg",
        "/images/projects/classroom-door/session-01.jpg"
      ],
      content: `## Overview
  
  Built a cross-platform mobile/web app for live classrooms with drawing tools, chat, and audio/video calling to boost remote learning engagement.
  
  ## Key Features
  
  - **Interactive Whiteboard**: Real-time drawing sync via WebSockets.  
  - **Video/Audio Chat**: Integrated WebRTC for multi-user calls.  
  - **Resource Sharing**: File uploads and slide decks.  
  - **Session Recording**: Store recordings in Firebase Storage.
  
  ## Technologies Used
  
  - **React Native & Redux**: Mobile apps for iOS/Android.  
  - **Firebase Realtime Database**: State sync and presence.  
  - **Node.js & Express**: Back-end APIs.  
  - **WebRTC**: Low-latency media streams.
  
  ## Challenges and Learnings
  
  Handling network fluctuations in classrooms required robust reconnect logic. Optimized canvas redraws for performance on low-end devices. Learned patterns for scaling Firebase listeners without hitting concurrent-connection limits.
  
  ## Outcome
  
  Improved remote engagement, with a 50% reduction in dropout rates and positive feedback from 500+ pilot users.`
    },
    {
      slug: "nextwave-vr-training-application",
      title: "NextWave: VR Training Application",
      publishedAt: "2020-02-01",
      summary: "A Unity-based VR app training first responders, reducing standard training time by 40%.",
      images: [
        "/images/projects/nextwave/cover.jpg",
        "/images/projects/nextwave/scene-01.jpg"
      ],
      content: `## Overview
  
  Contributed to a VR training suite for firefighters and medical staff, simulating high-risk scenarios in immersive 3D environments.
  
  ## Key Features
  
  - **Interactive Scenarios**: Real-time decision trees and physics-based interactions.  
  - **Multi-User Sessions**: Peer-to-peer networking for team drills.  
  - **Performance Analytics**: Tracks reaction times and accuracy.  
  
  ## Technologies Used
  
  - **Unity & C#**: Core application development.  
  - **.NET & InstallShield**: Custom installer and backend services.  
  - **Oculus & HTC Vive**: Target VR headsets.
  
  ## Challenges and Learnings
  
  Balancing realism with performance on consumer-grade headsets required LOD optimizations and dynamic asset streaming. Built CI/CD for automated builds and VR-specific QA pipelines.
  
  ## Outcome
  
  Reduced average training duration by 40% and improved retention scores by 25% in field trials, earning high praise from participating safety organizations.`
    }
  ];
  
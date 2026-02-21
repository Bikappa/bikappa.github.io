export default {
  meta: {
    description: "Luca Bianconi (Bikappa) - Senior Software Engineer offering freelance backend development, full-stack, DevOps, and technical consulting services.",
    title: "Bikappa | Freelance Software Engineer",
  },
  nav: {
    services: "Services",
    about: "About",
    skills: "Skills",
    contact: "Contact",
    getInTouch: "Get in Touch",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Luca Bianconi",
    aka: "aka",
    tagline: "Senior Software Engineer with 8+ years building scalable systems, optimizing infrastructure, and leading technical teams.",
    viewServices: "View Services",
    letsTalk: "Let's Talk",
  },
  services: {
    title: "Services",
    subtitle: "I help companies build reliable, high-performance software and optimize their engineering processes.",
    backend: {
      title: "Backend Development",
      description: "High-performance APIs, database optimization, and scalable microservices architecture. Expertise in Node.js, Golang, PostgreSQL, and GraphQL.",
    },
    fullstack: {
      title: "Full-Stack Development",
      description: "End-to-end web applications with React, TypeScript, and modern frameworks. From pixel-perfect UIs to robust backend systems.",
    },
    devops: {
      title: "DevOps & CI/CD",
      description: "Pipeline optimization, Kubernetes infrastructure, and cloud cost reduction. I've consistently cut CI costs by 60%+ and deployment times by 80%+.",
    },
    consulting: {
      title: "Technical Consulting",
      description: "Architecture reviews, performance audits, and team mentoring. Help your team make data-driven decisions and ship with confidence.",
    },
  },
  about: {
    title: "About Me",
    intro: {
      part1: "I'm a software engineer who loves making things",
      faster: "faster",
      cheaper: "cheaper",
      reliable: "more reliable",
      part2: ". Whether it's cutting cloud costs by 97% or shaving 13 minutes off a CI pipeline, I get a kick out of optimizing systems until they hum.",
    },
    hobbies: "When I'm not deep in code, you'll find me riding my motorbike through the Italian countryside, tinkering with electronics projects, or disconnecting in nature. I believe the best engineers know when to step away from the keyboard.",
    workHistory: "Where I've Worked",
    showMore: "Show Full Experience",
    showLess: "Show Less",
  },
  skills: {
    title: "Skills & Technologies",
    subtitle: "Tools and technologies I use to build great software.",
  },
  contact: {
    title: "Let's Work Together",
    subtitle: "Have a project in mind? I'd love to hear about it. Get in touch and let's discuss how I can help.",
    emailMe: "Email Me",
  },
  footer: {
    role: "Senior Software Engineer | Remote, Italy",
  },
  work: {
    checkly: {
      title: "Senior Backend Engineer",
      location: "Remote, Italy",
      highlight: "Cut operational costs by 97% ($30K to $750/mo)",
      details: [
        "Migrated HTTP synthetic checks from JavaScript to Golang",
        "Optimized CI pipelines: 15 min to 2 min iteration time",
        "Built high-frequency testing flow for enterprise customers with SQL optimization and SQS batching",
      ],
    },
    hygraph: {
      title: "Senior Full-Stack Engineer",
      location: "Remote, Italy",
      highlight: "Led CDN caching redesign, 60% CI cost reduction",
      details: [
        "Redesigned caching model for GraphQL-based CMS improving cache-hit ratios",
        "Frontend work in Remix for caching, backup/restore, and asset migrations",
        "Doubled integration test speed with template database testing",
        "Authored RFCs, conducted interviews, supported onboarding",
      ],
    },
    contentful: {
      title: "Fullstack Engineer",
      location: "Berlin, Germany",
      highlight: "Reduced API requests by 30%, backend ownership",
      details: [
        "Built and optimized Compose and Contentful Web App",
        "Backend technical ownership in content modeling space",
        "Managed CI/CD pipelines and maintained SDKs",
        "On-call rotation, incident handling, post-mortems",
      ],
    },
    sap: {
      title: "Software Engineer, Security Expert",
      location: "Sophia Antipolis, France",
      highlight: "Scaled security platform to 1,000+ concurrent scans",
      details: [
        "Automated security training provisioning, doubled team capacity",
        "Kubernetes-based platform for dynamic security scans",
      ],
    },
  },
  education: {
    ms: {
      degree: "MS Computer Science Engineering",
      school: "University of Padua, Italy",
    },
    be: {
      degree: "BE Computer Science Engineering",
      school: "University of Padua, Italy",
    },
  },
} as const;

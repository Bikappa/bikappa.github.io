export default {
  meta: {
    description: "Luca Bianconi (Bikappa) - Senior Software Engineer, servizi freelance di sviluppo backend, full-stack, DevOps e consulenza tecnica.",
    title: "Bikappa | Software Engineer Freelance",
  },
  nav: {
    services: "Servizi",
    about: "Chi Sono",
    skills: "Competenze",
    contact: "Contatti",
    getInTouch: "Contattami",
  },
  hero: {
    greeting: "Ciao, sono",
    name: "Luca Bianconi",
    aka: "alias",
    tagline: "Senior Software Engineer con 8+ anni di esperienza nella creazione di sistemi scalabili, ottimizzazione infrastrutture e guida di team tecnici.",
    viewServices: "Vedi Servizi",
    letsTalk: "Parliamone",
  },
  services: {
    title: "Servizi",
    subtitle: "Aiuto le aziende a costruire software affidabile e ad alte prestazioni, ottimizzando i processi di sviluppo.",
    backend: {
      title: "Sviluppo Backend",
      description: "API ad alte prestazioni, ottimizzazione database e architettura microservizi scalabile. Esperienza in Node.js, Golang, PostgreSQL e GraphQL.",
    },
    fullstack: {
      title: "Sviluppo Full-Stack",
      description: "Applicazioni web end-to-end con React, TypeScript e framework moderni. Dalle interfacce pixel-perfect ai sistemi backend robusti.",
    },
    devops: {
      title: "DevOps & CI/CD",
      description: "Ottimizzazione pipeline, infrastruttura Kubernetes e riduzione costi cloud. Ho costantemente ridotto i costi CI del 60%+ e i tempi di deploy dell'80%+.",
    },
    consulting: {
      title: "Consulenza Tecnica",
      description: "Review architetturali, audit delle performance e mentoring del team. Aiuto il tuo team a prendere decisioni basate sui dati e a rilasciare con fiducia.",
    },
  },
  about: {
    title: "Chi Sono",
    intro: {
      part1: "Sono un software engineer che ama rendere le cose",
      faster: "veloci",
      cheaper: "economiche",
      reliable: "affidabili",
      part2: ". Che si tratti di tagliare i costi cloud del 97% o di risparmiare 13 minuti su una pipeline CI, mi diverto a ottimizzare i sistemi fino a farli funzionare alla perfezione.",
    },
    hobbies: "Quando non sono immerso nel codice, mi trovi in moto per la campagna italiana, a smanettare con progetti di elettronica, o a staccare nella natura. Credo che i migliori ingegneri sappiano quando allontanarsi dalla tastiera.",
    workHistory: "Dove Ho Lavorato",
    showMore: "Mostra Esperienza Completa",
    showLess: "Mostra Meno",
  },
  skills: {
    title: "Competenze & Tecnologie",
    subtitle: "Strumenti e tecnologie che uso per costruire software di qualita.",
  },
  contact: {
    title: "Lavoriamo Insieme",
    subtitle: "Hai un progetto in mente? Mi piacerebbe sentirne parlare. Contattami e discutiamo come posso aiutarti.",
    emailMe: "Inviami un'Email",
  },
  footer: {
    role: "Senior Software Engineer | Remoto, Italia",
  },
  work: {
    checkly: {
      title: "Senior Backend Engineer",
      location: "Remoto, Italia",
      highlight: "Riduzione costi operativi del 97% (da $30K a $750/mese)",
      details: [
        "Migrazione check HTTP sintetici da JavaScript a Golang",
        "Ottimizzazione pipeline CI: da 15 min a 2 min di iterazione",
        "Sviluppo flusso test ad alta frequenza per clienti enterprise con ottimizzazione SQL e batching SQS",
      ],
    },
    hygraph: {
      title: "Senior Full-Stack Engineer",
      location: "Remoto, Italia",
      highlight: "Guidato redesign caching CDN, riduzione costi CI del 60%",
      details: [
        "Redesign modello caching per CMS basato su GraphQL migliorando cache-hit ratio",
        "Lavoro frontend in Remix per caching, backup/restore e migrazioni asset",
        "Raddoppiata velocita test integrazione con template database testing",
        "Scritto RFC, condotto colloqui, supportato onboarding",
      ],
    },
    contentful: {
      title: "Fullstack Engineer",
      location: "Berlino, Germania",
      highlight: "Riduzione richieste API del 30%, ownership backend",
      details: [
        "Sviluppo e ottimizzazione Compose e Contentful Web App",
        "Ownership tecnica backend nello spazio content modeling",
        "Gestione pipeline CI/CD e manutenzione SDK",
        "Rotazione on-call, gestione incidenti, post-mortem",
      ],
    },
    sap: {
      title: "Software Engineer, Security Expert",
      location: "Sophia Antipolis, Francia",
      highlight: "Scalato piattaforma sicurezza a 1.000+ scan concorrenti",
      details: [
        "Automazione provisioning training sicurezza, raddoppiata capacita team",
        "Piattaforma basata su Kubernetes per scan sicurezza dinamici",
      ],
    },
  },
  education: {
    ms: {
      degree: "Laurea Magistrale in Ingegneria Informatica",
      school: "Universita degli Studi di Padova",
    },
    be: {
      degree: "Laurea Triennale in Ingegneria Informatica",
      school: "Universita degli Studi di Padova",
    },
  },
} as const;

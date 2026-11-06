/** Shell text (header, footer). Page copy moves here page by page. */
export const en = {
  nav: {
    home: 'Home',
    services: 'Services',
    clients: 'Our Clients',
    about: 'About Us',
    contact: 'Contact',
    getStarted: 'Get Started',
  },
  a11y: {
    homeLabel: 'Rowad home',
    switchLanguage: 'Switch to Arabic',
    toggleMenu: 'Toggle navigation menu',
  },
  brand: {
    subtitle: 'Software Development',
  },
  company: {
    fullName: 'Rowad For Software Development',
    location: '584 El-Horreya Road, Gleem, Alexandria, Egypt',
    workingHours: 'Sun - Thu: 9:00 AM - 5:00 PM',
    weekend: 'Fri - Sat: Closed',
  },
  footer: {
    description: 'One team for all your software, from idea to production.',
    explore: 'Explore',
    reachUs: 'Reach Us',
    callCenter: 'Call Center',
    inquiries: 'Inquiries',
    mainOffice: 'Main Office',
    privacy: 'Privacy',
    terms: 'Terms',
    support: 'Support',
  },
  stats: [
    { value: '50+', label: 'Happy Clients' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '15+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
  ],
  serviceItems: {
    web: {
      name: 'Websites & web apps',
      text: 'Company sites, online stores and customer portals that load fast and rank well.',
    },
    mobile: {
      name: 'Mobile apps',
      text: 'iOS and Android apps from one codebase, from prototype to store release.',
    },
    erp: {
      name: 'ERP systems',
      text: 'Sales, stock, accounting, HR and production on one system, tailored to how your business runs.',
    },
    agents: {
      name: 'AI agents',
      text: 'Agents that read your data, use your tools and finish real tasks with human approval.',
    },
    chatbot: {
      name: 'Chatbots',
      text: 'Arabic and English bots on WhatsApp and web, connected to your CRM.',
    },
    cloud: {
      name: 'Hosting & DevOps',
      text: 'Managed hosting, CI/CD, backups and monitoring so releases stay uneventful.',
    },
  },
  // English labels are written in the diagram code; Arabic maps each one (see ar.ts).
  diagramText: {} as Record<string, string>,
  illustrations: {
    web: 'Responsive website shown on desktop and phone with a perfect performance score and a passing build',
    mobile: 'Three mobile app screens with a push notification and iOS and Android store badges',
    erp: 'An ERP system: a quote-to-cash flow across the top, a central dashboard, and sales, CRM, purchasing, inventory, accounting, HR, production and reports all connected to one shared database',
    agents:
      'An AI agent reads documents, email and databases, reasons, calls tools like your ERP and CRM, with human approval before it acts',
    chatbot:
      'A chatbot receiving Arabic and English messages from WhatsApp, Messenger and web chat, answering, and handing over to a human agent while updating the CRM',
    cloud:
      'A deployment pipeline from commit to live, with staging and production servers and a monitoring panel showing 99.9 percent uptime',
  },
  home: {
    hero: {
      title: 'One team for every piece of your software.',
      body: 'Websites, mobile apps, ERP systems, AI agents and chatbots. We design, build and run them, so you deal with one partner from idea to production.',
      primary: 'Book a free consultation',
      secondary: 'Explore services',
    },
    trust: {
      label: 'Trusted by our clients and partners',
      aria: 'Clients',
      viewClient: 'view client',
    },
    services: { title: 'Anything you need in the tech world, built end to end.' },
    process: {
      badge: 'How we work',
      title: 'From idea to live in four stops.',
      stops: [
        { title: 'Discover', text: 'We listen, map the problem and agree the plan.' },
        { title: 'Design', text: 'You click through a prototype before we write code.' },
        { title: 'Build', text: 'Short sprints, with a demo every two weeks.' },
        { title: 'Launch', text: 'We go live, train your team and stay on call.' },
      ],
    },
  },
  servicesPage: {
    eyebrow: 'Services',
    title: 'Web, mobile, ERP and AI from one team.',
    intro:
      'Pick one service or combine them. Each section shows what we build and how we deliver it.',
    navLabel: 'Services',
    startProject: 'Start a project',
    whatWeBuild: 'What we build',
    howWeDeliver: 'How we deliver',
    details: {
      web: {
        lead: 'A site that loads fast, ranks well and turns visitors into customers.',
        text: 'Company websites, online stores, customer portals and SaaS dashboards. We start from your goals and users, then build a fast, accessible, search-friendly product you can update yourself.',
        projects: [
          'Corporate and marketing websites',
          'E-commerce with local and international payments',
          'Customer and partner portals',
          'Internal dashboards and SaaS products',
        ],
        steps: [
          'Plan content, structure and wireframes',
          'Design system and build in short sprints',
          'Launch, measure and improve',
        ],
      },
      mobile: {
        lead: 'One codebase, two stores, a real native feel.',
        text: 'iOS and Android apps for customers, field teams and partners. We prototype first so you can test the idea, then build, release and maintain the app.',
        projects: [
          'Customer ordering and loyalty apps',
          'Field-staff and delivery apps',
          'Booking and on-demand services',
          'Companion apps for your ERP',
        ],
        steps: [
          'Clickable prototype and user testing',
          'Build and test on real devices',
          'Store release, analytics and updates',
        ],
      },
      erp: {
        lead: 'Every department on one system and one source of truth.',
        text: 'We implement, customise and support ERP systems so sales, inventory, accounting, HR and manufacturing work together instead of in separate spreadsheets. We adapt the system to the way your business runs.',
        projects: [
          'ERP implementation and data migration',
          'Custom modules and workflows',
          'Integrations with e-commerce, payments and shipping',
          'Reports, dashboards and user training',
        ],
        steps: [
          'Map your processes and pick the modules',
          'Configure, customise and test with your data',
          'Migrate, train your team and go live',
        ],
      },
      agents: {
        lead: 'Software that does the work, not just answers questions.',
        text: 'Agents read your documents and systems, decide what to do, call your tools and finish tasks like triage, quoting and reporting. People stay in control with approval steps and full logs.',
        projects: [
          'Question answering over your own documents',
          'Sales and support triage',
          'Back-office automation: quotes, invoices, reports',
          'Agents connected to your ERP and CRM',
        ],
        steps: [
          'Choose one workflow worth automating',
          'Prototype on your data and measure accuracy',
          'Deploy with guardrails and monitoring',
        ],
      },
      chatbot: {
        lead: 'Answer customers instantly in Arabic and English, then hand over to a person.',
        text: 'Bots on WhatsApp, Messenger and your website that handle common questions, capture leads and book appointments, then pass the conversation to your team when it matters.',
        projects: [
          'WhatsApp customer support',
          'Lead capture and appointment booking',
          'Order status and FAQ bots',
          'Human handover with full context',
        ],
        steps: [
          'Collect real questions and design flows',
          'Build, connect to CRM and test in both languages',
          'Launch and improve from conversation data',
        ],
      },
      cloud: {
        lead: 'Releases that are routine and downtime that is rare.',
        text: 'Managed hosting, automated pipelines and monitoring for the systems we build and the ones you already run.',
        projects: [
          'Managed hosting with SSL and daily backups',
          'CI/CD pipelines and zero-downtime releases',
          'Disaster recovery and rollbacks',
          'Monitoring and on-call support',
        ],
        steps: [
          'Audit your current setup',
          'Automate build, test and deploy',
          'Monitor, back up and improve',
        ],
      },
    },
    engage: {
      title: 'Ways to work with us',
      items: [
        {
          title: 'Fixed-scope project',
          text: 'A defined outcome, timeline and price. Best for a new website, app or ERP rollout.',
        },
        {
          title: 'Dedicated team',
          text: 'Developers and a designer working as part of your team month to month.',
        },
        {
          title: 'Support retainer',
          text: 'Monitoring, updates and a fast response for software already in production.',
        },
      ],
    },
  },
  contactPage: {
    eyebrow: 'Contact',
    title: 'Tell us what you want to build.',
    intro:
      'Have a project in mind? We would love to hear from you. Let us discuss how we can help.',
    messageTitle: 'Message us directly',
    messageBody:
      'Tell us what you want to build. WhatsApp is the fastest way to reach us, and email works for longer briefs.',
    whatsapp: 'Chat on WhatsApp',
    infoTitle: 'Contact Information',
    callNow: 'Call Us Now',
    openMaps: 'Open in Google Maps',
    cards: {
      phone: { title: 'Phone' },
      email: { title: 'Email', note: 'Best for longer project briefs' },
      office: { title: 'Office', note: 'Available for in-person meetings by appointment' },
      hours: { title: 'Working Hours' },
    },
    faqBadge: 'FAQ',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'How long does a typical project take?',
        a: 'Most standard websites take 2–6 weeks from kickoff to launch. Larger projects such as mobile apps, ERP implementations or AI agents depend on scope and integrations. You get a firm estimate after the first call.',
      },
      {
        q: 'What is your pricing structure?',
        a: 'Because every project is unique, we provide custom quotes based on your specific requirements, timeline, and requested features. Contact us to schedule a free initial consultation.',
      },
      {
        q: 'Do you provide ongoing support?',
        a: 'Yes! We offer flexible maintenance packages for routine updates and backups, and 24/7 priority support for clients on our managed hosting plans.',
      },
      {
        q: 'Can you work alongside our existing team?',
        a: 'Absolutely! We regularly collaborate with in-house developers, designers, and marketing teams to augment your capabilities and accelerate project delivery.',
      },
    ],
  },
  aboutPage: {
    eyebrow: 'About Rowad',
    title: 'A software team that stays for the long run.',
    intro:
      'We are engineers and designers in Alexandria, Egypt. We build and run websites, mobile apps, ERP systems, AI agents and chatbots for companies across the region.',
    storyBadge: 'Our story',
    storyTitle: 'We started with websites and kept growing with our clients.',
    story: [
      'Rowad began by building and hosting websites. As clients grew, they asked for mobile apps, then for ERP systems to run their operations, then for AI agents and chatbots to automate the routine work. We learned each one, and one team now covers all of it, including the hosting and DevOps that keeps it running.',
      'Our mission is simple: give businesses software that works, delivered by people who pick up the phone. We want to be known for quality, reliability and a customer-first approach across the region.',
    ],
    expertiseBadge: 'Expertise',
    expertiseTitle: 'Everything in one place',
    seeServices: 'See all services',
    capabilities: [
      'Websites and web apps',
      'Mobile apps (iOS and Android)',
      'ERP implementation, migration and custom modules',
      'AI agents and automation',
      'Chatbots on WhatsApp and web',
      'Hosting, CI/CD and DevOps',
      'UI/UX design and prototyping',
      'QA and test automation',
      'Maintenance and 24/7 support',
    ],
  },
  clientsPage: {
    eyebrow: 'Clients',
    title: 'Companies that run on our software.',
    intro:
      'Logistics, maritime, healthcare, law and more. Here are some of the organisations we have built for.',
    listLabel: 'Client list',
    searchLabel: 'Search clients',
    searchPlaceholder: 'Search by name or industry',
    visit: 'Visit website',
    empty: 'No clients match your search.',
    paginationLabel: 'Pagination',
    previous: 'Previous page',
    next: 'Next page',
    // English text lives in src/constants/clients.constants.ts; Arabic fills these in (see ar.ts).
    categories: {} as Record<string, string>,
    descriptions: {} as Record<number, string>,
  },
  cta: {
    title: "Have an idea or a messy process? Let's talk.",
    body: 'A 30-minute call is free. You leave with a clear next step, whether you work with us or not.',
    primary: 'Book a free consultation',
    whatsapp: 'WhatsApp us',
  },
};

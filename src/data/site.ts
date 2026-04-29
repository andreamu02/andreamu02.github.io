export const locales = ['it', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'it';

export const nav = {
  it: [
    { href: '/it/', label: 'Home' },
    { href: '/it/about/', label: 'About' },
    { href: '/it/projects/', label: 'Progetti' },
    { href: '/it/contact/', label: 'Contatti' }
  ],
  en: [
    { href: '/en/', label: 'Home' },
    { href: '/en/about/', label: 'About' },
    { href: '/en/projects/', label: 'Projects' },
    { href: '/en/contact/', label: 'Contact' }
  ]
} satisfies Record<Locale, { href: string; label: string }[]>;

export const home = {
  it: {
    eyebrow: 'My Simple Portfolio',
    title: ['Ciao', 'sono', 'Andrea'],
    lead:
      'Sono laureando magistrale in Cybersecurity con una forte passione per la sicurezza informatica in diversi ambiti, tra cui red team, penetration testing e security engineering. Mi interessano anche settori più di nicchia, come l’automotive security. Qui trovi una sintesi di chi sono, cosa faccio e alcuni progetti che rappresentano il mio percorso.',
    primaryCta: { href: '/it/projects/', label: 'Guarda i progetti' },
    secondaryCta: { href: 'mailto:muttiandrea@protonmail.com', label: 'Scrivimi' },
    sidebar: [
      {
        title: 'Chi sono',
        body:
          'Laureando magistrale in Cybersecurity, attualmente impegnato in stage come Cyber & Tech Risk / IRM Consultant. Sto maturando esperienza nella gestione del rischio e nella sicurezza aziendale, con l’obiettivo di orientarmi verso ruoli più tecnici in ambito offensive security e ricerca.'
      },
      {
        title: 'Disponibile per',
        body: 'Lavoro, stage, collaborazioni o contatti professionali.'
      }
    ],
    stats: [
      { value: '3+', label: 'Progetti' },
      { value: '2', label: 'Lingue' },
      { value: '1', label: 'Obiettivo' }
    ]
  },
  en: {
    eyebrow: 'My Simple Portfolio',
    title: ['Hi', "I'm", 'Andrea'],
    lead:
      'I am a master’s student in Cybersecurity with a strong passion for information security across several areas, including red team, penetration testing, and security engineering. I’m also interested in more niche domains such as automotive security. Here you will find a short overview of who I am, what I do, and a few projects that represent my path.',
    primaryCta: { href: '/en/projects/', label: 'View projects' },
    secondaryCta: { href: 'mailto:muttiandrea@protonmail.com', label: 'Write to me' },
    sidebar: [
      {
        title: 'About me',
        body:
          'Master’s student in Cybersecurity, currently doing an internship as a Cyber & Tech Risk / IRM Consultant. I am building experience in risk management and corporate security, with the goal of moving toward more technical roles in offensive security and research.'
      },
      {
        title: 'Available for',
        body: 'Work, internships, collaborations, or professional contact.'
      }
    ],
    stats: [
      { value: '3+', label: 'Projects' },
      { value: '2', label: 'Languages' },
      { value: '1', label: 'Goal' }
    ]
  }
} satisfies Record<Locale, {
  eyebrow: string;
  title: string[];
  lead: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  sidebar: { title: string; body: string }[];
  stats: { value: string; label: string }[];
}>;

export const about = {
  it: {
    title: 'About',
    description:
      'Mi chiamo Andrea e sono laureando magistrale in Cybersecurity. Attualmente sono stagista in Cyber & Tech Risk (IRM) Consultant, dove mi occupo di gestione del rischio e sicurezza in contesti aziendali. Sono particolarmente interessato ad ambiti più tecnici come offensive security, penetration testing e ricerca, con curiosità anche verso settori come l’automotive security.'
  },
  en: {
    title: 'About',
    description:
      'My name is Andrea and I am a master’s student in Cybersecurity. I am currently interning as a Cyber & Tech Risk (IRM) Consultant, where I work on risk management and security in corporate environments. I am especially interested in more technical areas such as offensive security, penetration testing, and research, with curiosity toward domains like automotive security.'
  }
} satisfies Record<Locale, { title: string; description: string }>;

export const projects = {
  it: [
    {
      title: 'Progetto 1',
      description: 'Descrivi il progetto in una frase: obiettivo, tecnologia usata e risultato finale.',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Progetto 2',
      description: 'Inserisci un secondo progetto, anche piccolo: una landing page, un’app o un layout.',
      tags: ['React', 'UI', 'Responsive']
    },
    {
      title: 'Progetto 3',
      description: 'Puoi aggiungere un progetto personale, universitario o un esperimento creativo.',
      tags: ['Portfolio', 'GitHub Pages', 'Design']
    },
    {
      title: 'Progetto 4',
      description: 'Se vuoi, sostituisci questo blocco con un link a un case study o a un PDF.',
      tags: ['Studio', 'Branding', 'Mockup']
    }
  ],
  en: [
    {
      title: 'Project 1',
      description: 'Describe the project in one sentence: goal, tech used, and final result.',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Project 2',
      description: 'Add a second project, even a small one: a landing page, app, or layout.',
      tags: ['React', 'UI', 'Responsive']
    },
    {
      title: 'Project 3',
      description: 'You can include a personal project, university work, or a creative experiment.',
      tags: ['Portfolio', 'GitHub Pages', 'Design']
    },
    {
      title: 'Project 4',
      description: 'If you prefer, replace this block with a case study or a PDF link.',
      tags: ['Study', 'Branding', 'Mockup']
    }
  ]
} satisfies Record<Locale, { title: string; description: string; tags: string[] }[]>;

export const skills = {
  it: ['HTML5', 'CSS3', 'JavaScript', 'GitHub', 'Figma', 'Responsive Design'],
  en: ['HTML5', 'CSS3', 'JavaScript', 'GitHub', 'Figma', 'Responsive Design']
} satisfies Record<Locale, string[]>;

export const contact = {
  it: {
    title: 'Contatti',
    subtitle: 'Contattami!',
    email: 'muttiandrea@protonmail.com',
    github: 'github.com/andreamu02',
    linkedin: 'linkedin.com/in/andrea-mutti-5351a5219'
  },
  en: {
    title: 'Contact',
    subtitle: 'Get in touch!',
    email: 'muttiandrea@protonmail.com',
    github: 'github.com/andreamu02',
    linkedin: 'linkedin.com/in/andrea-mutti-5351a5219'
  }
} satisfies Record<Locale, { title: string; subtitle: string; email: string; github: string; linkedin: string }>;


// Add this at the very bottom of src/data/site.ts
export function isLocale(lang: string | undefined): lang is Locale {
  return locales.includes(lang as any);
}

export const locales = ['it', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'it';

export const nav = {
  it: [
    { href: '/it/', label: 'Home' },
    { href: '/it/about/', label: 'About' },
    { href: '/it/projects/', label: 'Progetti' },
    { href: '/it/writeups/', label: 'Writeups' },
    { href: '/it/contact/', label: 'Contatti' }
  ],
  en: [
    { href: '/en/', label: 'Home' },
    { href: '/en/about/', label: 'About' },
    { href: '/en/projects/', label: 'Projects' },
    { href: '/en/writeups/', label: 'Writeups' },
    { href: '/en/contact/', label: 'Contact' }
  ]
} satisfies Record<Locale, { href: string; label: string }[]>;

export const home = {
  it: {
    eyebrow: 'My Simple Portfolio',
    title: ['Ciao', 'sono', 'Andrea'],
    lead:
      'Sono laureando magistrale in Cybersecurity, con focus su offensive security e penetration testing e un interesse marcato per la sicurezza di sistemi embedded e automotive — l’ambito dei miei progetti più recenti. Punto a crescere verso ruoli tecnici offensivi (red teaming) e di ricerca. Qui trovi una sintesi di chi sono, cosa faccio e i progetti che rappresentano il mio percorso.',
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
    ]
  },
  en: {
    eyebrow: 'My Simple Portfolio',
    title: ['Hi', "I'm", 'Andrea'],
    lead:
      'I’m a master’s student in Cybersecurity focused on offensive security and penetration testing, with a strong interest in embedded and automotive security — the area of my most recent projects. My goal is to grow into technical offensive (red teaming) and research roles. Here you’ll find a short overview of who I am, what I do, and the projects that represent my path.',
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
    ]
  }
} satisfies Record<Locale, {
  eyebrow: string;
  title: string[];
  lead: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  sidebar: { title: string; body: string }[];
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
      title: 'Scan-Then-Strike — Attacco Bus-Off su CAN Bus',
      description:
        'Riproduzione del core timing-critical dell’attacco Scan-Then-Strike (USENIX Security ’21): primitiva Single Frame Bus-Off (SFBO) ed escalation a Persistent Bus-Off DoS. Testbed a 3 nodi ESP32-C3 su CAN bus a 500 kbps con orchestratore/logger Linux via SocketCAN. ~83% di bus-off al primo colpo, ~78% di soppressione sostenuta della vittima.',
      tags: ['CAN Bus', 'Automotive Security', 'ESP32-C3', 'C / C++', 'Embedded'],
      repo: 'https://github.com/andreamu02/Scan-Then-Strike'
    },
    {
      title: 'Remote Attestation — Protocollo SIMPLE',
      description:
        'Workflow di remote attestation challenge–response autenticato (SIMPLE, WiSec ’20) su verifier PC (Python), gateway ESP32 (ESP-IDF) e prover STM32 Nucleo-H503RB. Misurazione SHA-256/HMAC di flash, RAM e configurazione isolata con MPU e GTZC e protetta da MAC e freshness. Tamper detection validata, replay rifiutati, path crypto privilegiato ~0.93 ms.',
      tags: ['Remote Attestation', 'STM32', 'ESP32', 'Python', 'IoT Security'],
      repo: 'https://github.com/andreamu02/Remote_Attestation_SIMPLE'
    }
  ],
  en: [
    {
      title: 'Scan-Then-Strike — CAN Bus Bus-Off Attack',
      description:
        'Reproduced the timing-critical core of the Scan-Then-Strike CAN attack (USENIX Security ’21): the Single Frame Bus-Off (SFBO) primitive and its escalation into a Persistent Bus-Off DoS. 3-node ESP32-C3 testbed on a 500 kbps CAN bus with a Linux orchestrator/logger over SocketCAN. ~83% single-shot bus-off, ~78% sustained victim suppression.',
      tags: ['CAN Bus', 'Automotive Security', 'ESP32-C3', 'C / C++', 'Embedded'],
      repo: 'https://github.com/andreamu02/Scan-Then-Strike'
    },
    {
      title: 'Remote Attestation — SIMPLE Protocol',
      description:
        'Authenticated challenge–response remote attestation workflow (SIMPLE, WiSec ’20) across a PC verifier (Python), an ESP32 gateway (ESP-IDF) and an STM32 Nucleo-H503RB prover. SHA-256/HMAC measurement of flash, RAM and configuration isolated by MPU and GTZC and protected by MAC and freshness checks. Validated tamper detection, replay rejection, ~0.93 ms privileged crypto path.',
      tags: ['Remote Attestation', 'STM32', 'ESP32', 'Python', 'IoT Security'],
      repo: 'https://github.com/andreamu02/Remote_Attestation_SIMPLE'
    }
  ]
} satisfies Record<Locale, { title: string; description: string; tags: string[]; repo?: string }[]>;

export const skills = {
  it: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'CAN Bus / Automotive', 'Embedded (C/C++, Rust)', 'Python', 'Linux', 'Docker', 'Burp Suite', 'Wireshark', 'Nmap'],
  en: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'CAN Bus / Automotive', 'Embedded (C/C++, Rust)', 'Python', 'Linux', 'Docker', 'Burp Suite', 'Wireshark', 'Nmap']
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


export function isLocale(lang: string | undefined): lang is Locale {
  return locales.includes(lang as any);
}

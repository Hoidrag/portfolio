export type Language = 'en' | 'ro'

const english = {
  pageTitle: 'Samuel — Frontend Developer & QA Engineer',
  pageDescription:
    'Samuel Hoidrag — frontend developer and QA engineer working with React, TypeScript, Cypress, and Playwright.',
  navLabel: 'Main navigation',
  homeLabel: 'Samuel home',
  aboutNav: 'ABOUT',
  projectsNav: 'PROJECTS',
  contactNav: 'CONTACT',
  switchLanguage: 'Schimbă limba în română',
  codeBugLabel: 'bugs',
  codeBugValue: 'all intentional',
  codeBuildsLabel: 'builds',
  codeTestsLabel: 'tests',
  codeStatus: 'still in progress',
  codeStatusLabel: 'status',
  codeProgressComment: 'ship after one more test',
  visualCaption: 'IN THE MAKING',
  heroKicker: 'A LITTLE WORK IN PROGRESS',
  heroTitle: 'Good things',
  heroTitleSecond: 'take',
  heroTitleHighlight: 'time.',
  heroDescription:
    'I’m Samuel — a frontend developer and QA engineer who enjoys building thoughtful web experiences and making sure they work beautifully.',
  exploreWork: 'EXPLORE MY WORK',
  getInTouch: 'GET IN TOUCH',
  thanksForStoppingBy: 'Thanks for stopping by',
  aboutKicker: 'A LITTLE ABOUT ME',
  aboutTitle: 'Building for the web,',
  aboutTitleHighlight: 'testing every detail.',
  aboutParagraphOne:
    'I’m Samuel Hoidrag, a frontend developer working with React, TypeScript, and modern web technologies. I also bring a quality assurance perspective to my work, with experience in manual and automated testing.',
  aboutParagraphTwo:
    'I enjoy turning ideas into approachable interfaces and checking that every detail works as it should — using tools like Cypress and Playwright along the way.',
  skillsLabel: 'Technologies and tools',
  manualQa: 'Manual QA',
  projectsKicker: 'SELECTED PROJECT IDEAS',
  projectsTitle: 'Things taking shape.',
  projectsDescription:
    'This portfolio is still growing. Here are a few ideas I’m exploring — more work coming soon.',
  projectConceptLabel: 'CONCEPT PREVIEW',
  projectPreviewLabels: ['ANALYTICS OVERVIEW', 'STORE PREVIEW', 'TEST RUN'],
  discussProjectLink: 'DISCUSS THIS CONCEPT',
  projectStatus: 'IN PROGRESS',
  discussProject: 'Discuss the {title} project idea by email',
  projectEmailSubject: 'Tell me about',
  projectsNote:
    'These are concepts in progress, not published projects. Have an idea in mind?',
  projectsContact: 'Let’s talk.',
  contactKicker: 'OPEN TO OPPORTUNITIES',
  contactTitle: 'Looking for a',
  contactTitleHighlight: 'frontend developer or QA engineer?',
  contactDescription:
    'I’m looking for my next opportunity in frontend development or QA. I combine React and TypeScript development with a quality-focused mindset and hands-on testing using Cypress and Playwright.',
  contactEmailSubject: 'Frontend / QA job opportunity',
  copyEmail: 'COPY EMAIL',
  linkedinProfile: 'VIEW LINKEDIN PROFILE',
  emailCopied: 'Email copied to clipboard.',
  emailCopyFailed: 'Could not copy. Please select and copy the email address.',
  backToTop: 'BACK TO TOP',
  projects: [
    {
      title: 'Analytics dashboard',
      description:
        'A clear, responsive dashboard for exploring data and keeping track of what matters.',
    },
    {
      title: 'E-commerce experience',
      description:
        'A thoughtful storefront concept focused on smooth browsing and a simple checkout.',
    },
    {
      title: 'End-to-end test toolkit',
      description:
        'Reusable browser tests that make essential user journeys easier to trust.',
    },
  ],
}

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? Widen<Item>[]
    : { [Key in keyof T]: Widen<T[Key]> }

export type Translation = Widen<typeof english>

export const translations: Record<Language, Translation> = {
  en: english,
  ro: {
    pageTitle: 'Samuel — Dezvoltator Frontend și QA Engineer',
    pageDescription:
      'Samuel Hoidrag — dezvoltator frontend și QA engineer, cu experiență în React, TypeScript, Cypress și Playwright.',
    navLabel: 'Navigare principală',
    homeLabel: 'Pagina principală a lui Samuel',
    aboutNav: 'DESPRE',
    projectsNav: 'PROIECTE',
    contactNav: 'CONTACT',
    switchLanguage: 'Switch language to English',
    codeBugLabel: 'erori',
    codeBugValue: 'toate intenționate',
    codeBuildsLabel: 'construiește',
    codeTestsLabel: 'teste',
    codeStatus: 'încă în lucru',
    codeStatusLabel: 'stare',
    codeProgressComment: 'public după încă un test',
    visualCaption: 'ÎN LUCRU',
    heroKicker: 'UN MIC PROIECT ÎN LUCRU',
    heroTitle: 'Lucrurile bune',
    heroTitleSecond: 'cer',
    heroTitleHighlight: 'timp.',
    heroDescription:
      'Sunt Samuel — dezvoltator frontend și QA engineer. Îmi place să creez experiențe web atent gândite și să mă asigur că funcționează impecabil.',
    exploreWork: 'VEZI PROIECTELE',
    getInTouch: 'IA LEGĂTURA',
    thanksForStoppingBy: 'Mulțumesc pentru vizită',
    aboutKicker: 'CÂTEVA LUCRURI DESPRE MINE',
    aboutTitle: 'Construiesc pentru web,',
    aboutTitleHighlight: 'testez fiecare detaliu.',
    aboutParagraphOne:
      'Sunt Samuel Hoidrag, dezvoltator frontend cu experiență în React, TypeScript și tehnologii web moderne. Abordez proiectele și din perspectiva asigurării calității, cu experiență în testare manuală și automatizată.',
    aboutParagraphTwo:
      'Îmi place să transform ideile în interfețe ușor de folosit și să verific că fiecare detaliu funcționează așa cum trebuie — cu ajutorul unor instrumente precum Cypress și Playwright.',
    skillsLabel: 'Tehnologii și instrumente',
    manualQa: 'QA manual',
    projectsKicker: 'CÂTEVA IDEI DE PROIECTE',
    projectsTitle: 'Proiecte în devenire.',
    projectsDescription:
      'Acest portofoliu este încă în lucru. Iată câteva idei pe care le explorez — în curând vor apărea și alte proiecte.',
    projectConceptLabel: 'PREZENTARE CONCEPT',
    projectPreviewLabels: ['ANALIZĂ DATE', 'PREZENTARE MAGAZIN', 'RULARE TESTE'],
    discussProjectLink: 'HAI SĂ VORBIM DESPRE IDEE',
    projectStatus: 'ÎN LUCRU',
    discussProject: 'Discută prin e-mail ideea proiectului „{title}”',
    projectEmailSubject: 'Aș dori să discut despre',
    projectsNote:
      'Acestea sunt concepte în lucru, nu proiecte publicate. Ai o idee?',
    projectsContact: 'Hai să vorbim.',
    contactKicker: 'ÎN CĂUTAREA UNUI NOU ROL',
    contactTitle: 'Căutați un',
    contactTitleHighlight: 'dezvoltator frontend sau QA Engineer?',
    contactDescription:
      'Sunt în căutarea următoarei oportunități profesionale în frontend sau QA. Îmbin dezvoltarea cu React și TypeScript cu atenția pentru calitate și testarea cu Cypress și Playwright.',
    contactEmailSubject: 'Oportunitate de angajare — Frontend / QA',
    copyEmail: 'COPIAZĂ E-MAILUL',
    linkedinProfile: 'VEZI PROFILUL LINKEDIN',
    emailCopied: 'Adresa de e-mail a fost copiată.',
    emailCopyFailed:
      'Copierea nu a reușit. Te rog selectează și copiază adresa de e-mail.',
    backToTop: 'ÎNAPOI SUS',
    projects: [
      {
        title: 'Panou de analiză a datelor',
        description:
          'Un panou clar și adaptabil, pentru explorarea datelor și urmărirea informațiilor importante.',
      },
      {
        title: 'Experiență de cumpărături online',
        description:
          'Un concept de magazin online, cu navigare simplă și un proces de cumpărare rapid.',
      },
      {
        title: 'Instrument pentru teste end-to-end',
        description:
          'Teste reutilizabile în browser, pentru verificarea mai ușoară a scenariilor esențiale.',
      },
    ],
  },
}

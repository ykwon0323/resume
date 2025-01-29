import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.png';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';



import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jo',
  description: "About Yong-kwon Jo",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'belief',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Je m'appelle Yong-kwon`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      <strong className="text-stone-100">Trustworthy, responsible developer.</strong> <br/>
      Bonjour ! Je m'appelle Yong-kwon, et je suis développeur backend spécialisé en Java. Avec plus de 5 ans d'expérience professionnelle, <br/>
      je suis passionné par le développement de logiciels et par la création de solutions efficaces et évolutives pour des projets de différentes envergures.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Currently, I am looking for a project to participate in while on a working holiday in the Nantes region of France.<br/>(22/12/30 ~ 23/12/30)<br/>
      I am looking for colleagues and companies to work with in France even after my working holiday is over.
      </p> */}
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1nT5_Zm2Uq8-RH2y6xbHxY7nQluNv6P5K/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */

let today = new Date();

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Bonjour ! Je m'appelle Yong-kwon, et je suis développeur backend spécialisé en Java. Avec plus de 5 ans d'expérience professionnelle, je suis passionné par le développement de logiciels et par la création de solutions efficaces et évolutives pour des projets de différentes envergures.
Je maîtrise principalement le framework Spring pour implémenter des architectures microservices et développer des API RESTful. J'ai également de l'expérience dans la conception et l'optimisation de bases de données, tant relationnelles (SQL) que non relationnelles (NoSQL). Par ailleurs, je suis à l'aise avec le développement piloté par les tests (TDD) et le travail dans des environnements CI/CD.
Curieux et toujours motivé pour apprendre et appliquer de nouvelles technologies, je mets un point d'honneur à collaborer avec les équipes afin de produire les meilleurs résultats. Dans cet univers en constante évolution qu'est le développement logiciel, je suis prêt à grandir avec vous. N'hésitez pas à me contacter pour toute opportunité !`,
  aboutItems: [
    {label: 'Location', text: 'Nantes, France', Icon: MapIcon},
    {label: 'Age', text: (today.getFullYear()-1995)+'', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Republic of Korea', Icon: FlagIcon},
    {label: 'Interests', text: 'Startup, Data, Drawing Art', Icon: SparklesIcon},
    {label: 'Study', text: 'Choong-Am, High School', Icon: AcademicCapIcon},
    {label: 'Work', text: 'Open to Work', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Korean',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'French',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JQuery',
        level: 7,
      },
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Typescript',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java(Spring)',
        level: 9,
      },
      {
        name: 'Javascript(NestJS)',
        level: 5,
      },
      {
        name: 'Javascript(NodeJS)',
        level: 5,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MySql',
        level: 9,
      },
      {
        name: 'Oracle',
        level: 9,
      },
      {
        name: 'Mongo',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'National Police Agency Internal System',
    description: '(Company project) Intelligence System',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Experimart',
    description: '(Personal project) Student science experiment materials sales service for teachers',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Gallery in the room',
    description: '(Team project) An exhibition platform for emerging artists, galleries, and art lovers',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Legal advisory services',
    description: '(Personal project) Free Legal Advisory Services',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Horse racing information service',
    description: '(Team Project) Horse racing information community service using horse racing API',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'MyTeam',
    description: '(Personal project) Local sports vitalization platform (providing matching, confrontation, etc.)',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Routina',
    description: '(Personal project) Daily routine help app',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'National Police Agency Internal System',
    description: '(Company project) Identity Investigation System',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Republic of Korea Ministry of Public Administration and Security',
    description: '(Company project) Non-profit Private Organization Support System',
    url: '',
    image: porfolioImage8,
  },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2019.11 ~ 2019.12',
    location: 'TheJoeun Academy, Seoul, Republic of Korea',
    title: 'Kotlin-based Android app developer course',
    content: <p>- App programming with Kotlin <br/>- kotlin</p>,
  },
  {
    date: '2018.11 ~ 2019.05',
    location: 'Hankyung IT Academy, Seoul, Republic of Korea',
    title: 'Spring Framework-based Java Hybrid Web Developer Training Course',
    content: <p>- Understanding web programming basics<br/>- html, javascript, java, oracle</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022.06 ~ 2022.12',
    location: 'Gaeasoft',
    title: 'Full-stack Developer',
    content: (
      <p>
        - National Police Agency Internal System, Identity Investigation System<br/>
        - Interlocking within the system (RPA, BlockChain)
      </p>
    ),
  },
  {
    date: '2022.04 ~ 2022.10',
    location: 'Acorns',
    title: 'Back-end Developer',
    content: (
      <p>
        - Game community service backend development <br/>
        - Game Item server<br/>
        - Image hosting server<br/>
        - Chatting API design<br/>
      </p>
    ),
  },
  {
    date: '2021.09 ~ 2022.03',
    location: 'BiteCode',
    title: 'Back-end Developer',
    content: (
      <p>
        - Game system cms service backend development<br/>
        - Game data collection&processing<br/>
        - Game Client development
      </p>
    ),
  },
  {
    date: '2019.07 ~ 2021.07',
    location: 'Asadal',
    title: 'Java Developer',
    content: (
      <p>
        - National Police Agency Internal System, Intelligence System<br/>
        - Republic of Korea Ministry of Public Administration and Security Non-profit Private Organization Support System
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Developer Jo',
      text: '#creative #challenge #curious #cooperation #passion',
      image: '',
    },
    {
      name: 'Artist Jo',
      text: '#Meaningful #warm #simple #imagination #picasso #jocasso',
      image: '',
    },
    {
      name: 'Traveler Jo',
      text: '#understanding #friends #life #history #space #dimension',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'ykwon0323@gmail.com',
      href: 'mailto:ykwon0323@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Nantes, France',
      href: 'https://goo.gl/maps/J6n7fd9MMoAtk7Zp9',
    },
    {
      type: ContactType.Instagram,
      text: '@ykwon.0323',
      href: 'https://www.instagram.com/ykwon.0323/',
    },
    {
      type: ContactType.Github,
      text: 'ykwon0323',
      href: 'https://github.com/ykwon0323',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ykwon0323'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yong-kwon-jo/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ykwon.0323/'},
];

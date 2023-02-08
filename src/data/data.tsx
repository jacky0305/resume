import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
// import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/sea.jpg';
import profilepic from '../images/profilepic.jpg';

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
  title: 'Sheng-Yen Hsiao',
  description: "",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'Sheng-Yen Hsiao',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'Experience',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Sheng-Yen Hsiao`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">graduate student</strong> majoring in <strong className="text-stone-100">Economics</strong> at National Taiwan University, <br />
        and currently applying for an internship in <strong className="text-stone-100">data analysis</strong> related fields.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1EaTdGARcQzaAPvbc132yfKDOYlvh5nN3/view?usp=share_link',
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
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi! I'm Sheng-Yen Hsiao, and I'm interested in data analysis and behavioral economics.`,
  aboutItems: [
    {label: 'Location', text: 'Taipei, Taiwan', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Taiwan', Icon: FlagIcon},
    {label: 'Study', text: 'National Taiwan University', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Jazz Music, Coffee, Cats', Icon: SparklesIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
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
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  // {
  //   name: 'Frontend development',
  //   skills: [
  //     {
  //       name: 'React',
  //       level: 9,
  //     },
  //     {
  //       name: 'Typescript',
  //       level: 7,
  //     },
  //     {
  //       name: 'GraphQL',
  //       level: 6,
  //     },
  //   ],
  // },
  // {
  //   name: 'Backend development',
  //   skills: [
  //     {
  //       name: 'Node.js',
  //       level: 8,
  //     },
  //     {
  //       name: 'Rust',
  //       level: 5,
  //     },
  //     {
  //       name: 'Golang',
  //       level: 4,
  //     },
  //   ],
  // },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage1,
  // },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2022 —Jun 2024 (Expected)',
    location: 'National Taiwan University',
    title: 'Master of Arts in Economics',
    content: <ul><li>Research Topic: Behavioral and Experimental Economics</li></ul>,
  },
  {
    date: 'Sep 2018 —Jun 2022',
    location: 'National Taiwan University',
    title: 'Bachelor of Arts in Economics,',
    content: <ul><li>Cumulative GPA: 4.0 / 4.3</li>
    <li>Presidential Award: AUT 2020</li></ul>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2021 - Present',
    location: 'Josie I Chen’s Lab, National Taiwan University',
    title: 'Research Assistant',
    content: (
      
        <ul><li>Analyzed the impact of foreign language exposure on decision bias.</li><li>Analyzed the behavioral difference between contributing monetary and privacy in the public good game.</li><li>Coauthored with a professor in the U.S.</li><li>Developed websites for academic purposes with oTree under Python Django framework.</li><li>Reached 400+ research participants in all projects.</li></ul>
      
    ),
  },
  {
    date: 'Sep 2020 - Feb 2021',
    location: 'Hui-wen Koo, National Taiwan University',
    title: 'Research Assistant',
    content: (
      
        <ul><li>Collected 300+ historical documents from Taiwan Literature Series Database System.</li></ul>
      
    ),
  },
  {
    date: 'Sep 2022 - Present',
    location: 'Principle of Economics, Ming-Jen Lin',
    title: 'Teaching Assistant',
    content: (
      <ul>
        <li>
        Lectured and executed economic experiments for 300+ students.
        </li>
      </ul>
    ),
  },
  {
    date: 'Sep 2021 - Present',
    location: 'Microeconomics, Josie I Chen and Chun-Ting Chen (2 Courses)',
    title: 'Teaching Assistant',
    content: (
      <ul>
        <li>Taught requisite courses in English for 20+ international students in recitation class.</li>
        <li>Supported the professor in lecture materials as well as assignment instructions.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  // imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact Me',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'jacky0305@gmail.com',
      href: 'mailto:jacky0305@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Taipei, Taiwan',
      href: 'https://goo.gl/maps/6TFPAbEka4kkz2Ks9',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];

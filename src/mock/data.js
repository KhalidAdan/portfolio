import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Khalid Adan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey 👋🏾 My name is ',
  name: 'Khalid Adan',
  subtitle: 'and I am a full stack developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'desk.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',// if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Yak.JPG',
    title: 'Yak!',
    info: 'Yak allows for Realtime video, audio, and data transmission between clients with a NodeJS signalling server. It is built using a full mesh architecture.',
    info2: '',
    repo: 'https://github.com/KhalidAdan/Yak', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'computer.jpg',
    title: 'Personal blog',
    info: 'Musings on software, AI, work and life!',
    info2: '',
    url: 'https://medium.com/@khalid.adan', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'grove-design.jpg',
    title: 'Grove',
    info: 'Grove is a simple grocery pickup app that I designed at the beginning of the 2020 pandemic. The idea is to let independent stores register to start receiving pickup orders and having one app house them all means users can look in one place for all of their grocery needs.',
    info2: 'Designed in Figma, developed in React!',
    repo: 'https://github.com/KhalidAdan/Grove', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch',
  btn: '',
  email: 'khalid.adan@cra-arc.gc.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/KHVLD_',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/khalidadan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KhalidAdan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

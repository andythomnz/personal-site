const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Andrew Thompson',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Andrew Thompson',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Andrew Thompson',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Andrew Thompson',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Andrew Thompson',
    heading: 'CONTACT',
  },
];

export { pages, randomString };

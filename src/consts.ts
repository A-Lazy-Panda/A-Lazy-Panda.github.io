// Central site metadata. Edit here, it flows everywhere.
export const SITE = {
  name: 'Shivansh Pandey',
  shortName: 'Shiv Pandey',
  title: 'Shivansh Pandey',
  tagline: 'Economics, statistics, and equity research.',
  description:
    'Personal site of Shivansh Pandey — Cambridge Economics, MSc Statistics at LSE. Cambridge economics notes, equity research and stock pitches, writing on investing and education, programming projects, and dissertations.',
  email: 'shivanshpandeyuk@gmail.com',
  url: 'https://a-lazy-panda.github.io',
} as const;

export const SOCIALS: { label: string; href: string }[] = [
  { label: 'Email', href: 'mailto:shivanshpandeyuk@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/A-Lazy-Panda' },      // TODO: set your GitHub URL
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' }, // TODO: set your LinkedIn URL
];

// Primary navigation.
export const NAV: { label: string; href: string }[] = [
  { label: 'About', href: '/' },
  { label: 'Notes', href: '/notes' },
  { label: 'Pitches', href: '/pitches' },
  { label: 'Writing', href: '/writing' },
  { label: 'Projects', href: '/projects' },
  { label: 'Dissertations', href: '/dissertations' },
];

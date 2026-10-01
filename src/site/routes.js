// Single source of truth for every URL on the site.
export const IG_URL = 'https://instagram.com/shortswiftstudio';
export const FB_URL = 'https://facebook.com/ShortSwiftStudio';

export const PATHS = {
  home: '/',
  services: '/services',
  about: '/about',
  team: '/team',
  towsif: '/team/towsif-khan',
  mesbah: '/team/mesbah-hasin',
  testimonials: '/testimonials',
  gallery: '/gallery',
  contact: '/contact',
  book: '/book-a-meeting',
  brand: '/portfolio/brand',
  web: '/portfolio/web',
  social: '/portfolio/social',
  video: '/portfolio/video',
};

// Old .html file names -> new routes (used for redirects so old links/bookmarks keep working).
export const LEGACY_FILES = {
  'shortswift-home-v5.html': PATHS.home,
  'shortswift-services-v4.html': PATHS.services,
  'shortswift-about-v5.html': PATHS.about,
  'shortswift-team-v3.html': PATHS.team,
  'shortswift-towsif-khan-v2.html': PATHS.towsif,
  'shortswift-mesbah-hasin-v2-small.html': PATHS.mesbah,
  'shortswift-testimonials-v4.html': PATHS.testimonials,
  'shortswift-gallery-v4.html': PATHS.gallery,
  'shortswift-contact-v4.html': PATHS.contact,
  'shortswift-book-a-meeting-v1.html': PATHS.book,
  'portfolio-brand-v2.html': PATHS.brand,
  'portfolio-web-v2.html': PATHS.web,
  'portfolio-social-v2.html': PATHS.social,
  'portfolio-video-v2.html': PATHS.video,
};

export const NAV = [
  { l: 'Home', u: PATHS.home },
  { l: 'Services', u: PATHS.services },
  {
    l: 'Portfolio',
    u: PATHS.brand,
    c: [
      { l: 'Brand Development Portfolio', u: PATHS.brand },
      { l: 'Website Development Portfolio', u: PATHS.web },
      { l: 'Social Media Growth Portfolio', u: PATHS.social },
      { l: 'Video Editing Portfolio', u: PATHS.video },
    ],
  },
  { l: 'About Us', u: PATHS.about },
  {
    l: 'Team',
    u: PATHS.team,
    c: [
      { l: 'Members', u: PATHS.team },
      {
        l: 'Founders',
        u: PATHS.team,
        c: [
          { l: 'Towsif Khan', u: PATHS.towsif },
          { l: 'Mesbah Hasin', u: PATHS.mesbah },
        ],
      },
    ],
  },
  { l: 'Testimonials', u: PATHS.testimonials },
  { l: 'Gallery', u: PATHS.gallery },
  {
    l: 'Contact',
    u: PATHS.contact,
    c: [
      { l: 'Contact Us', u: PATHS.contact },
      { l: 'Book a Meeting', u: PATHS.book },
      { l: 'Instagram', u: IG_URL, ext: true },
      { l: 'Facebook', u: FB_URL, ext: true },
    ],
  },
];

export const FOOTER_PAGES = [
  ['Home', PATHS.home],
  ['Services', PATHS.services],
  ['About Us', PATHS.about],
  ['Team', PATHS.team],
  ['Testimonials', PATHS.testimonials],
  ['Gallery', PATHS.gallery],
  ['Contact', PATHS.contact],
];

export const FOOTER_PORTFOLIO = [
  ['Brand Development', PATHS.brand],
  ['Website Development', PATHS.web],
  ['Social Media Growth', PATHS.social],
  ['Video Editing', PATHS.video],
];

// Footer "Social" chips. The home page always showed "Instagram / Facebook" chips under both
// headings; every other page showed the three accounts. Both variants are kept as designed.
export const SOCIAL_CHIPS = {
  home: {
    instagram: [
      { l: 'Instagram', u: IG_URL, ext: true },
      { l: 'Facebook', u: FB_URL, ext: true },
    ],
    facebook: [
      { l: 'Instagram', u: IG_URL, ext: true },
      { l: 'Facebook', u: FB_URL, ext: true },
    ],
  },
  default: {
    instagram: [
      { l: 'ShortSwift Studio', u: IG_URL, ext: true },
      { l: 'Towsif Khan', u: PATHS.towsif },
      { l: 'Mesbah Hasin', u: PATHS.mesbah },
    ],
    facebook: [
      { l: 'ShortSwift Studio', u: FB_URL, ext: true },
      { l: 'Towsif Khan', u: PATHS.towsif },
      { l: 'Mesbah Hasin', u: PATHS.mesbah },
    ],
  },
};

import { createElement } from 'react';
import HomePage from './home/HomePage.jsx';
import ServicesPage from './services/ServicesPage.jsx';
import AboutPage from './about/AboutPage.jsx';
import TeamPage from './team/TeamPage.jsx';
import TowsifKhanPage from './founders/TowsifKhanPage.jsx';
import MesbahHasinPage from './founders/MesbahHasinPage.jsx';
import TestimonialsPage from './testimonials/TestimonialsPage.jsx';
import GalleryPage from './gallery/GalleryPage.jsx';
import ContactPage from './contact/ContactPage.jsx';
import BookAMeetingPage from './book/BookAMeetingPage.jsx';
import BrandPortfolioPage from './portfolio/BrandPortfolioPage.jsx';
import WebPortfolioPage from './portfolio/WebPortfolioPage.jsx';
import SocialPortfolioPage from './portfolio/SocialPortfolioPage.jsx';
import VideoPortfolioPage from './portfolio/VideoPortfolioPage.jsx';

export const ROUTES = [
  { path: '/', element: createElement(HomePage) },
  { path: '/services', element: createElement(ServicesPage) },
  { path: '/about', element: createElement(AboutPage) },
  { path: '/team', element: createElement(TeamPage) },
  { path: '/team/towsif-khan', element: createElement(TowsifKhanPage) },
  { path: '/team/mesbah-hasin', element: createElement(MesbahHasinPage) },
  { path: '/testimonials', element: createElement(TestimonialsPage) },
  { path: '/gallery', element: createElement(GalleryPage) },
  { path: '/contact', element: createElement(ContactPage) },
  { path: '/book-a-meeting', element: createElement(BookAMeetingPage) },
  { path: '/portfolio/brand', element: createElement(BrandPortfolioPage) },
  { path: '/portfolio/web', element: createElement(WebPortfolioPage) },
  { path: '/portfolio/social', element: createElement(SocialPortfolioPage) },
  { path: '/portfolio/video', element: createElement(VideoPortfolioPage) },
];

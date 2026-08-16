/** Single source of truth for site navigation, reusable in header/footer/sitemap. */
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Games', href: '/games/' },
  { label: 'Art', href: '/art/' },
  { label: 'About', href: '/about/' },
] as const;

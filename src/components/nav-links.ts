/** Single source of truth for site navigation, grouped for the Tavern window. */
export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    label: 'The Realm',
    items: [{ label: 'Castle', href: '/' }],
  },
  {
    label: 'Scriptorium',
    items: [
      { label: 'Grimoire', href: '/blog/' },
      { label: "Squire's Diary", href: '/journal/' },
    ],
  },
  {
    label: 'Guildhall',
    items: [
      { label: 'Deeds', href: '/games/' },
      { label: 'Gallery', href: '/art/' },
      { label: 'Workshop', href: '/workspace/' },
    ],
  },
  {
    label: "Wanderer's Wing",
    items: [
      { label: 'Reliquary', href: '/shrines/' },
      { label: "Bard's Radio", href: '/radio/' },
      { label: "Merchant's Stock", href: '/resources/' },
    ],
  },
  {
    label: 'The Inn',
    items: [
      { label: "Inn's Ledger", href: '/guestbook/' },
      { label: 'The Bard', href: '/about/' },
    ],
  },
];

/** Flat list, kept for any consumer that doesn't care about groups. */
export const navLinks = navGroups.flatMap(({ items }) => items);

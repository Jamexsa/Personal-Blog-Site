/**
 * The Merchant's Stock — tools and wonders the realm runs on.
 * Edit freely; groups render in order.
 */
export interface ResourceLink {
  name: string;
  url: string;
  note: string;
  /** small specialty plaque, e.g. "free" */
  specialty?: string;
}

export interface ResourceGroup {
  id: string;
  title: string;
  blurb: string;
  items: ResourceLink[];
}

export const resourceGroups: ResourceGroup[] = [
  {
    id: 'forge',
    title: 'The Forge',
    blurb: 'engines & code — where the games are hammered out',
    items: [
      {
        name: 'Godot',
        url: 'https://godotengine.org/',
        note: 'free and open engine; the forge’s main anvil.',
        specialty: 'free',
      },
      {
        name: 'GameMaker',
        url: 'https://gamemaker.io/',
        note: 'for the odd 2D ones that want to ship fast.',
      },
      {
        name: 'Tiled',
        url: 'https://www.mapeditor.org/',
        note: 'tile maps for courtyards, crypts, and coastlines.',
        specialty: 'free',
      },
      {
        name: 'Visual Studio Code',
        url: 'https://code.visualstudio.com/',
        note: 'the desk where all of this is written.',
      },
    ],
  },
  {
    id: 'scriptorium',
    title: 'The Scriptorium',
    blurb: 'art & pixel tools — ink for the illustrated pages',
    items: [
      {
        name: 'Aseprite',
        url: 'https://www.aseprite.org/',
        note: 'pixel art and animation; worth every coin.',
        specialty: 'paid',
      },
      {
        name: 'Krita',
        url: 'https://krita.org/',
        note: 'the big canvas for painted work.',
        specialty: 'free',
      },
      {
        name: 'LibreSprite',
        url: 'https://libresprite.github.io/',
        note: 'free Aseprite fork, in a pinch.',
        specialty: 'free',
      },
      {
        name: 'PureRef',
        url: 'https://www.pureref.com/',
        note: 'mood boards pinned above the desk.',
        specialty: 'free',
      },
    ],
  },
  {
    id: 'alchemy',
    title: 'The Alchemy Cabinet',
    blurb: 'audio — potions for the ears',
    items: [
      {
        name: 'BeepBox',
        url: 'https://beepbox.co/',
        note: 'sketch chiptunes straight in the browser.',
        specialty: 'free',
      },
      {
        name: 'jsfxr',
        url: 'https://sfbgames.com/jsfxr/',
        note: 'retro sound effects, shaken not stirred.',
        specialty: 'free',
      },
      {
        name: 'Audacity',
        url: 'https://www.audacityteam.org/',
        note: 'recording and cleanup of noisy tavern audio.',
        specialty: 'free',
      },
    ],
  },
  {
    id: 'cartography',
    title: 'The Cartographer’s Table',
    blurb: 'web & making-of — how this keep itself is built',
    items: [
      {
        name: 'Astro',
        url: 'https://astro.build/',
        note: 'this very kingdom is built with it.',
        specialty: 'free',
      },
      {
        name: 'Nekoweb',
        url: 'https://nekoweb.org/',
        note: 'free static hosting with a village around it.',
        specialty: 'free',
      },
      {
        name: 'Cloudflare Pages',
        url: 'https://pages.cloudflare.com/',
        note: 'where this keep is deployed.',
        specialty: 'free',
      },
      {
        name: 'The Belly of the Web',
        url: 'https://indieweb.org/',
        note: 'maps for keeping your own corner of the internet.',
      },
    ],
  },
  {
    id: 'curiosities',
    title: 'Curiosities',
    blurb: 'friends’ keeps and small wonders — traded, not bought',
    items: [
      {
        name: 'A friend’s keep',
        url: '#',
        note: 'banner exchange ally — placeholder until the banners are traded.',
        specialty: 'ally',
      },
      {
        name: 'Another friend’s keep',
        url: '#',
        note: 'a fellow builder of small weird worlds.',
        specialty: 'ally',
      },
      {
        name: 'Web Archive',
        url: 'https://archive.org/web/',
        note: 'the kingdom’s memory, kept safe.',
        specialty: 'free',
      },
    ],
  },
];

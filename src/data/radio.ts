/**
 * The Bard's Radio — station dial and the tuned station's playlist.
 * Display-only placeholders for now: drop real audio files in
 * `public/radio/` and wire an <audio> element when the bard arrives.
 */
export interface Track {
  title: string;
  artist: string;
  length: string;
}

export interface Station {
  id: string;
  name: string;
  tagline: string;
  kind: 'music' | 'talk';
  nowPlaying: Track;
}

/** The station the dial rests on — its playlist renders under the player. */
export const tunedStationId = 'wandering-minstrels';

export const stations: Station[] = [
  {
    id: 'wandering-minstrels',
    name: 'The Wandering Minstrels',
    tagline: 'lute core, dungeon synth, and songs with dirt on their boots',
    kind: 'music',
    nowPlaying: { title: 'lute core — disc 03', artist: 'the house bard', length: '02:00' },
  },
  {
    id: 'tavern-tales',
    name: 'Tavern Tales',
    tagline: 'talk — gossip from the common room, lightly fact-checked',
    kind: 'talk',
    nowPlaying: { title: 'Ep. 12 — the cart merchant mystery', artist: 'two regulars', length: '31:40' },
  },
  {
    id: 'dragons-lullaby',
    name: 'Dragon’s Lullaby',
    tagline: 'slow airs for the last hour before the candles die',
    kind: 'music',
    nowPlaying: { title: 'embers settle, side B', artist: 'the quiet choir', length: '05:12' },
  },
  {
    id: 'bards-circle',
    name: 'Bard’s Circle',
    tagline: 'talk — craft, process, and arguing about string gauges',
    kind: 'talk',
    nowPlaying: { title: 'on finishing the ugly version', artist: 'circle session', length: '44:05' },
  },
];

export const playlist: Track[] = [
  { title: 'lute core — disc 03', artist: 'the house bard', length: '02:00' },
  { title: 'rooftop (for a giant)', artist: 'the house bard', length: '03:26' },
  { title: 'fog comes to the hill', artist: 'the quiet choir', length: '04:10' },
  { title: 'the crier’s tune', artist: 'town ensemble', length: '01:48' },
  { title: 'hammer on anvil', artist: 'the forge (unreleased)', length: '02:33' },
];

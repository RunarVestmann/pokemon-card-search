export interface PokemonCardModel {
  id: string;
  images: { small: string; large: string };
  name: string;
  level: string;
  hp: string;
  types: string[];
  flavorText: string;
  artist: string;
  rarity: string;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: { symbol: string; logo: string };
  };
}

import Link from "next/link";

import type { PokemonCardModel } from "@/types";

import { PokemonCard } from "../PokemonCard/PokemonCard";

import styles from "./PokemonCardList.module.css";

interface PokemonCardListProps {
  cards: PokemonCardModel[];
}

export const PokemonCardList = ({ cards }: PokemonCardListProps) => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Link key={card.id} href={`/${card.id}`}>
          <PokemonCard card={card} variant="small" />
        </Link>
      ))}
    </div>
  );
};

import Image from "next/image";
import type { PokemonCardModel } from "@/types";

import styles from "./PokemonCard.module.css";

const BASE_WIDTH = 245;
const BASE_HEIGHT = 342;

interface PokemonCardProps {
  card: PokemonCardModel;
  variant: "small" | "large";
}

export const PokemonCard = ({ card, variant }: PokemonCardProps) => {
  const imageSrc = variant === "small" ? card.images.small : card.images.large;
  const width = variant === "small" ? BASE_WIDTH : BASE_WIDTH * 2;
  const height = variant === "small" ? BASE_HEIGHT : BASE_HEIGHT * 2;
  return (
    <Image
      className={styles.container}
      width={width}
      height={height}
      src={imageSrc}
      alt=""
    />
  );
};

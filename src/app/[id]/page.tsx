import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { API_BASE_URL } from "@/constants";
import type { PokemonCardModel } from "@/types";

import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

type PokemonCardDetailsResponse =
  | {
      data: PokemonCardModel;
    }
  | {
      error: { message: string; code: number };
    };

interface PokemonCardDetailsPageProps {
  params: Promise<{ id: string }>;
}

const PokemonCardDetailsPage = async ({
  params,
}: PokemonCardDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(`${API_BASE_URL}/${id}`);
  const json: PokemonCardDetailsResponse = await response.json();

  if ("error" in json) {
    if (json.error.code === 404) {
      notFound();
    }
    throw Error(json.error.message);
  }

  const card = json.data;

  const setReleaseDate = new Date(card.set.releaseDate);

  const releaseDay = setReleaseDate.getDate();
  const releaseMonth = setReleaseDate.getMonth();
  const releaseYear = setReleaseDate.getFullYear();

  return (
    <div className={styles.container}>
      <PokemonCard card={card} variant="large" />
      <div>
        <h1>{card.name}</h1>
        <p>{card.flavorText}</p>
      </div>
      <div>
        <h2>Artist</h2>
        <p>{card.artist}</p>
      </div>
      <div>
        <h2>Rarity</h2>
        <p>{card.rarity}</p>
      </div>

      {Boolean(card.hp) ||
        (Boolean(card.level) && (
          <div className={styles.statsContainer}>
            <h2>Stats</h2>
            {card.hp && (
              <div>
                <h3>HP</h3>
                <p>{card.hp}</p>
              </div>
            )}
            {card.level && (
              <div>
                <h3>Level</h3>
                <p>{card.level}</p>
              </div>
            )}
          </div>
        ))}

      <div className={styles.statsContainer}>
        <h2>Set</h2>
        <Image
          className={styles.setImage}
          alt=""
          src={card.set.images.logo}
          width={128 * 2}
          height={128}
        />
        <div>
          <h3>Name</h3>
          <p>{card.set.name}</p>
        </div>
        <div>
          <h3>Release date</h3>
          <p>
            {releaseDay}.{releaseMonth + 1}.{releaseYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardDetailsPage;

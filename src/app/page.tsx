import type { PokemonCardModel } from "@/types";
import { PokemonCardList } from "@/components/PokemonCardList/PokemonCardList";
import { Pagination } from "@/components/Pagination/Pagination";
import { API_BASE_URL } from "@/constants";

import styles from "./page.module.css";
import { SearchSection } from "@/components/SearchSection/SearchSection";

const PAGE_SIZE = 12;

interface PokemonCardListResponse {
  count: number;
  data: PokemonCardModel[];
  page: number;
  pageSize: number;
  totalCount: number;
}

interface PokemonCardListPageProps {
  searchParams: Promise<{
    page?: string;
    name?: string;
  }>;
}

export default async function PokemonCardListPage({
  searchParams,
}: PokemonCardListPageProps) {
  const { page = "1", name = "" } = await searchParams;
  const currentPage = Number(page);

  const response = await fetch(
    `${API_BASE_URL}?pageSize=${PAGE_SIZE}&page=${currentPage}&q=name:*${name}*`
  );
  const json: PokemonCardListResponse = await response.json();

  const totalPages = Math.ceil(json.totalCount / PAGE_SIZE);

  return (
    <div className={styles.container}>
      <SearchSection />
      <PokemonCardList cards={json.data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}

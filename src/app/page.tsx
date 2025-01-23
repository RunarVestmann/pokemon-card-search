import type { PokemonCardModel } from "@/types";
import { PokemonCardList } from "@/components/PokemonCardList/PokemonCardList";
import { Pagination } from "@/components/Pagination/Pagination";
import { API_BASE_URL } from "@/constants";
import { SearchSection } from "@/components/SearchSection/SearchSection";

import styles from "./page.module.css";

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

const PokemonCardListPage = async ({
  searchParams,
}: PokemonCardListPageProps) => {
  const { page = "1", name = "" } = await searchParams;
  const currentPage = Number(page);

  const response = await fetch(
    `${API_BASE_URL}?pageSize=${PAGE_SIZE}&page=${currentPage}&q=name:*${name}*`
  );
  const json: PokemonCardListResponse = await response.json();

  const totalPages = Math.ceil(json.totalCount / PAGE_SIZE);

  const nameParam = name ? `&name=${name}` : "";

  return (
    <div className={styles.container}>
      <SearchSection />
      <PokemonCardList cards={json.data} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousLinkHref={`/?page=${currentPage - 1}${nameParam}`}
        nextLinkHref={`/?page=${currentPage + 1}${nameParam}`}
      />
    </div>
  );
};

export default PokemonCardListPage;

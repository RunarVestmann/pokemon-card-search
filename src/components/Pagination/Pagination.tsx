import Link from "next/link";

import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  previousLinkHref: string;
  nextLinkHref: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  previousLinkHref,
  nextLinkHref,
}: PaginationProps) => {
  return (
    <div className={styles.container}>
      <Link
        style={{
          visibility: currentPage > 1 ? "visible" : "hidden",
        }}
        href={previousLinkHref}
      >
        Previous
      </Link>
      Page {currentPage} of {totalPages}
      <Link
        style={{
          visibility: currentPage < totalPages ? "visible" : "hidden",
        }}
        href={nextLinkHref}
      >
        Next
      </Link>
    </div>
  );
};

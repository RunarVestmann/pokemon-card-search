import Link from "next/link";

import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <div className={styles.container}>
      <Link
        style={{
          visibility: currentPage > 1 ? "visible" : "hidden",
        }}
        href={`/?page=${currentPage - 1}`}
      >
        Previous
      </Link>
      Page {currentPage} of {totalPages}
      <Link
        style={{
          visibility: currentPage < totalPages ? "visible" : "hidden",
        }}
        href={`/?page=${currentPage + 1}`}
      >
        Next
      </Link>
    </div>
  );
};

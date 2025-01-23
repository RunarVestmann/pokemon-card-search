import Link from "next/link";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">Pokémon card search</Link>
    </header>
  );
};

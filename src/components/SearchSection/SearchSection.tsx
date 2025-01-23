"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./SearchSection.module.css";
import { useRouter } from "next/navigation";

export const SearchSection = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            router.push(`/?name=${name}`);
          }
        }}
      />
      <Link href={`/?name=${name}`}>Search</Link>
    </div>
  );
};

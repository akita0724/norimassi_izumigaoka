"use client";

import { useRouter } from "next/navigation";

export const StarButton = () => {
  const { push } = useRouter();
  return (
    <button className="inp bg-yellow-200" onClick={() => push("/star")}>
      お気に入りを使う
    </button>
  );
};

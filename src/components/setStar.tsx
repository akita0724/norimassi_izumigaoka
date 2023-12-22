"use client";
import { StarValue } from "@/lib/atom";
import { verifyStar } from "@/lib/star";
import { starElement } from "@/types/star";
import { useAtom } from "jotai";
import { useState } from "react";

export const SetStar = ({ value }: { value: starElement }) => {
  const [stars, setStar] = useAtom(StarValue);
  const [add, setAdd] = useState(false);

  const star: starElement = {
    depature: value.depature,
    dest: value.dest,
    head: value.head,
  };
  if (
    stars.some(
      (v) =>
        v.depature === star.depature &&
        v.dest === star.dest &&
        v.head === star.head
    )
  ) {
    return <></>;
  }

  const handler = () => {
    if (
      stars.some(
        (v) =>
          v.depature === star.depature &&
          v.dest === star.dest &&
          v.head === star.head
      )
    ) {
      return;
    }
    setStar((cr) => {
      let f = [...cr];
      f.push(star);
      return f;
    });
    setAdd(true);
  };
  return (
    <>
      {!add ? (
        <>
          <button className="btn-star" onClick={handler}>
            お気に入りに登録する
          </button>
        </>
      ) : (
        <>追加済み</>
      )}
    </>
  );
};

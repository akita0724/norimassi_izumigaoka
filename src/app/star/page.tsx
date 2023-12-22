"use client";

import { LinkButton, SearchButton } from "@/components/button";
import { StarCard } from "@/components/card";
import {
  AheadInput_Star,
  DateInput_Star,
  TimeInput_Star,
} from "@/components/starSearch";
import { depature_options, stopOptions } from "@/data/depature";
import { StarValue } from "@/lib/atom";
import { useAtom } from "jotai";

const SearchFromStar = () => {
  const [star, setStar] = useAtom(StarValue);
  if (star.length === 0) return <>登録されていません</>;
  try {
    return (
      <div className="center-flex">
        <div className="flex flex-col content-center fixed top-20 space-y-2 bg-white">
          <TimeInput_Star />
          <DateInput_Star />
          <AheadInput_Star />
          <LinkButton href="/">トップへ戻る</LinkButton>
        </div>
        <div className="center-flex mt-64">
          <div className="flex flex-col justify-center text-3xl space-y-10 m-auto">
            <p className="text-2xl text-center border-b-4">
              検索するものを選択してください。
            </p>
            {star.map((data, index) => (
              <StarCard data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (e) {
    const msg = e as string;
    return (
      <div className="center-flex">
        <p>エラーが発生しました</p>
        <p>{msg}</p>
      </div>
    );
  }
};

export default SearchFromStar;

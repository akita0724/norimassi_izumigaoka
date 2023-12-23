import { LinkButton } from "@/components/button";
import {
  AheadInput,
  TimeInput,
  DateInput,
  SearchButton,
} from "@/components/search";
import {
  Depatureselect,
  Destinationselect,
  Stopselect,
} from "@/components/search_select";
import { StarButton } from "@/components/useStar";

export default function Home() {
  return (
    <div className="center-flex">
      <div className="flex flex-col space-y-5">
        <Depatureselect />
        <Stopselect />
        <Destinationselect />
        <AheadInput />
        <TimeInput />
        <DateInput />
        <SearchButton />
        <StarButton />
        <LinkButton href="/">目的地入力での検索はこちら</LinkButton>
      </div>
    </div>
  );
}

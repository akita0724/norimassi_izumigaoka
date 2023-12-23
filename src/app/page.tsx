import { LinkButton } from "@/components/button";
import {
  AheadInput,
  DateInput,
  DepatureSelect,
  DestinationSelect,
  SearchButton,
  StopSelect,
  TimeInput,
} from "@/components/search";
import { StarButton } from "@/components/useStar";

export default function Home() {
  return (
    <div className="center-flex">
      <div className="form">
        <DepatureSelect />
        <StopSelect />
        <DestinationSelect />
        <AheadInput />
        <TimeInput />
        <DateInput />
        <SearchButton />
        <StarButton />
        <LinkButton href="/select">選択式での検索はこちら</LinkButton>
      </div>
    </div>
  );
}

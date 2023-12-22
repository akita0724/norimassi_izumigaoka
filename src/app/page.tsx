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
      <div className="flex flex-col space-y-5">
        <DepatureSelect />
        <StopSelect />
        <DestinationSelect />
        <AheadInput />
        <TimeInput />
        <DateInput />
        <SearchButton />
        <StarButton />
      </div>
    </div>
  );
}

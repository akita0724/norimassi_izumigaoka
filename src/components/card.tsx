import { depature_options, stopOptions } from "@/data/depature";
import { routeLabel } from "@/data/label";
import { displayTime } from "@/lib/time";
import { searchResult } from "@/types/result";
import { starElement } from "@/types/star";
import { SearchButton_Star } from "./starSearch";
import { dest } from "@/data/destination";

export const Card = ({ result }: { result: searchResult }) => {
  const routeLabelId = Number(result.serviceId.slice(0, 5));
  return (
    <div className="card">
      <p className="text-3xl mx-5 text-left">
        {routeLabel[routeLabelId].route} 番
      </p>
      <p className="">{routeLabel[routeLabelId].dest} ゆき</p>
      <p className="text-3xl">{displayTime(result.depaTime)}</p>
    </div>
  );
};
export const StarCard = ({ data }: { data: starElement }) => {
  return (
    <div className="card text-center">
      <p>{depature_options[data.depature].label} から</p>
      <p>{dest[data.dest - 1]} まで</p>
      <SearchButton_Star data={data} />
    </div>
  );
};

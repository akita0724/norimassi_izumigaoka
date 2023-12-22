import { starSearchAtom } from "@/lib/atom";
import { calUnix } from "@/lib/time";
import { starElement } from "@/types/star";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

export const AheadInput_Star = () => {
  const setFunction = useSetAtom(starSearchAtom);
  return (
    <div className="row-flex space-x-4">
      <input
        type="number"
        max={60}
        min={0}
        className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight text-center focus:outline-none w-[10vw]"
        onChange={(e) =>
          setFunction((cr) => ({ ...cr, ahead: Number(e.target.value) }))
        }
        defaultValue={3}
      />
      <p>分前までで検索</p>
    </div>
  );
};

export const TimeInput_Star = () => {
  const setFunction = useSetAtom(starSearchAtom);
  const currentTIme = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  setFunction((cr) => ({
    ...cr,
    time: currentTIme,
    unix: calUnix(cr.date, currentTIme),
  }));
  return (
    <>
      <p className="text-xl">検索時刻</p>
      <input
        type="time"
        className="inp"
        onChange={(e) =>
          setFunction((cr) => ({
            ...cr,
            time: e.target.value,
            unix: calUnix(cr.date, e.target.value),
          }))
        }
        defaultValue={currentTIme}
      />
    </>
  );
};

export const DateInput_Star = () => {
  const setFunction = useSetAtom(starSearchAtom);
  const date = new Date().toISOString().slice(0, 10);
  setFunction((cr) => ({
    ...cr,
    date: date,
    unix: calUnix(date, cr.time),
  }));
  return (
    <>
      <p className="text-xl">検索日</p>
      <input
        type="date"
        className="inp w-[10vw]"
        onChange={(e) => {
          setFunction((cr) => ({
            ...cr,
            date: e.target.value,
            unix: calUnix(e.target.value, cr.time),
          }));
        }}
        defaultValue={date}
      />
    </>
  );
};

export const SearchButton_Star = ({ data }: { data: starElement }) => {
  const [value, set] = useAtom(starSearchAtom);
  const { push } = useRouter();
  const handler = () => {
    let query = [];
    query.push(`depature=${data.depature}`);
    query.push(`dest=${data.dest}`);
    query.push(`head=${data.head}`);
    query.push(`ahead=${value.ahead}`);
    query.push(`unix=${value.unix}`);
    // お気に入りに戻るために付与
    query.push("stop=1");
    push(`timetable?${query.join("&")}`);
  };
  return (
    <>
      <button
        className="btn-star bg-gray-200 w-[30vw] self-center"
        // onClick={() => {
        //   alert(JSON.stringify(value));
        // }}
        onClick={() => handler()}
      >
        検索
      </button>
    </>
  );
};

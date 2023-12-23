"use client";

import { depature_options, stopOptions } from "@/data/depature";
import { dest_options } from "@/data/destination";
import { searchReqAtom } from "@/lib/atom";
import { calUnix } from "@/lib/time";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import Select from "react-select";

export const DepatureSelect = () => {
  const [data, setFunction] = useAtom(searchReqAtom);
  return (
    <>
      <p className="text-xl">乗車バス停</p>
      <Select
        className="text-center"
        options={depature_options}
        required={true}
        onChange={(e) =>
          setFunction((cr) => ({
            ...cr,
            stop: 0,
            dest: 0,
            depature: Number(e?.value || ""),
          }))
        }
        defaultValue={depature_options[data.depature]}
        placeholder="出発バス停"
      />
    </>
  );
};

export const StopSelect = () => {
  const [value, setFunction] = useAtom(searchReqAtom);
  return (
    <>
      <p className="text-xl">のりば</p>
      <Select
        className="text-center"
        options={stopOptions[value.depature]}
        required={true}
        onChange={(e) =>
          setFunction((cr) => ({
            ...cr,
            dest: 0,
            stop: Number(e?.value || ""),
          }))
        }
        defaultValue={stopOptions[value.depature][0]}
        placeholder="のりば"
      />
    </>
  );
};

export const DestinationSelect = () => {
  const [value, setFunction] = useAtom(searchReqAtom);
  return (
    <>
      <p className="text-xl">下車バス停</p>
      <Select
        className="text-center"
        options={dest_options[value.depature][value.stop]}
        required={true}
        onChange={(e) =>
          setFunction((cr) => ({
            ...cr,
            dest: Number(e?.value || ""),
          }))
        }
        placeholder="到着バス停"
      />
    </>
  );
};

export const AheadInput = () => {
  const setFunction = useSetAtom(searchReqAtom);
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

export const TimeInput = () => {
  const setFunction = useSetAtom(searchReqAtom);
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

export const DateInput = () => {
  const setFunction = useSetAtom(searchReqAtom);
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

export const SearchButton = () => {
  const [value, set] = useAtom(searchReqAtom);
  const { push } = useRouter();
  const handler = () => {
    let query = [];
    if (value.dest == 0) {
      return;
    }
    query.push(`depature=${value.depature}`);
    // query.push(`stop=${value.stop}`);
    query.push(`dest=${value.dest}`);
    query.push(`head=${value.head}`);
    query.push(`ahead=${value.ahead}`);
    query.push(`unix=${value.unix}`);

    push(`timetable?${query.join("&")}`);
  };
  return (
    <>
      <button
        className="inp bg-gray-200 w-[10vw]"
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

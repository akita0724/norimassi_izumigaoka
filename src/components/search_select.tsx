"use client";

import { depature_options, stopOptions } from "@/data/depature";
import { dest_options } from "@/data/destination";
import { searchReqAtom } from "@/lib/atom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

export const Depatureselect = () => {
  const [data, setFunction] = useAtom(searchReqAtom);
  return (
    <>
      <p className="text-xl">乗車バス停</p>
      <select
        className="select"
        required={true}
        onChange={(e) =>
          setFunction((cr) => ({
            ...cr,
            stop: 0,
            dest: 0,
            depature: Number(e?.target.value || ""),
          }))
        }
        defaultValue={depature_options[data.depature].value}
        placeholder="出発バス停"
      >
        {depature_options.map((v, i) => (
          <option key={i} value={v.value}>
            {v.label}
          </option>
        ))}
      </select>
    </>
  );
};

export const Stopselect = () => {
  const [value, setFunction] = useAtom(searchReqAtom);
  return (
    <>
      <p className="text-xl">のりば</p>
      <select
        className="select"
        required={true}
        onChange={(e) =>
          setFunction((cr) => ({
            ...cr,
            dest: 0,
            stop: Number(e?.target.value || ""),
          }))
        }
        defaultValue={stopOptions[value.depature][0].value}
        placeholder="のりば"
      >
        {stopOptions[value.depature].map((v, i) => (
          <option key={i} value={v.value}>
            {v.label}
          </option>
        ))}
      </select>
    </>
  );
};

export const Destinationselect = () => {
  const [value, setFunction] = useAtom(searchReqAtom);
  return (
    <>
      <p className="text-xl">下車バス停</p>
      <select
        className="select"
        required={true}
        onChange={(e) =>
          setFunction((cr) => ({
            ...cr,
            dest: Number(e?.target.value || ""),
          }))
        }
        placeholder="到着バス停"
      >
        {dest_options[value.depature][value.stop].map((v, i) => (
          <option key={i} value={v.value}>
            {v.label}
          </option>
        ))}
      </select>
    </>
  );
};

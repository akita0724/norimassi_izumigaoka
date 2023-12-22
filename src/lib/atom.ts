import { SearchReq } from "@/types/search";
import { starElement } from "@/types/star";
import { atom, PrimitiveAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const searchReqAtom: PrimitiveAtom<SearchReq> =
    atom<SearchReq>({
        depature: 0,
        dest: 0,
        stop: 0,
        date: "",
        head: 0,
        time: "",
        ahead: 0,
        unix: 0
    });
export const starSearchAtom: PrimitiveAtom<SearchReq> =
    atom<SearchReq>({
        depature: 0,
        dest: 0,
        stop: 0,
        date: "",
        head: 0,
        time: "",
        ahead: 0,
        unix: 0
    });

export const StarValue = atomWithStorage<Array<starElement>>(
    "norimassi-star", []
)
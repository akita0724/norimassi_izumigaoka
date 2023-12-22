import { starType, starElement } from "@/types/star";

export const verifyStar = (value: starType): starType => {
    let res: starType = []

    for (const i of value) {
        if (verifyStarElement(i)) res.push(i)
    }

    return res
}

export const verifyStarElement = (value: starElement): boolean => {
    return value !== null &&
        typeof value === "object" &&
        typeof value.depature === "number" &&
        typeof value.head === "number" &&
        typeof value.dest === "number"
}

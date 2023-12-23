import { stopInfo, stopNum } from "@/data/metadata"
import { SearchParam } from "@/types/params"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc);
dayjs.extend(timezone);

export const verifyParam = (params: SearchParam): SearchParam | null => {
    const now = dayjs().unix()

    let res: SearchParam = {
        depature: 0,
        dest: 0,
        unix: (params.unix || now) - (params.ahead || 3) * 60,
        head: 0,
        ahead: 0,
        stop: params.stop || 0
    }

    const depature = Number(params.depature || "a")

    if (isNaN(depature) || depature < 0 || depature > stopNum) {
        return null
    }

    res.depature = depature

    const head = Number(params.head || "a")

    if (isNaN(head) || head < 0 || head > stopInfo[depature]) {
        return null
    }

    res.head = head

    const dest = Number(params.dest || "a")

    if (isNaN(dest)) {
        return null
    }

    res.dest = dest

    return res
}

export const verifyParam_api = (params: SearchParam) => {

}
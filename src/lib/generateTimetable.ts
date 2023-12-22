import { SearchParam } from "@/types/params";
import dayjs from "dayjs";
import { ConvertData } from "./convertData";
import { supabaseClient } from "./supabase";
import { routeID_ALL } from "@/data/routes";

export const generateTimetable = async (params: SearchParam, dataset: string) => {
    const searchDate = dayjs.unix(params.unix)
    // const day = searchDate.day()
    const day = 0
    const hour = searchDate.hour()
    const minu = searchDate.minute()

    // 時刻
    const time = hour * 100 + minu
    const isHoliday = day === 0 ? [0] : day == 6 ? [1, 3] : [2, 3]

    const routes = await getRoutes(dataset, params.depature, params.head, params.dest)

    const { data, error } = await supabaseClient
        .from(dataset).select(`time, serviceID`)
        .in("routeID", routes)
        .in("operateDay", isHoliday)
        .gte("time", time)
        .order("time")
        .limit(3)

    if (error) {
        return []
    }

    return ConvertData(data)


}

const getRoutes = async (dataset: string, depature: number, head: number, dest: number): Promise<number[]> => {
    const routeID = `${depature}${head}`
    const row = `r${routeID}`
    const { data, error } = await supabaseClient
        .from(`${dataset}-r`).select(row).eq("destID", dest)

    if (error) {
        return []
    }

    const routeData: any = data[0]
    const route10 = routeData[row]
    const route2 = (Array(routeID_ALL[routeID].length).join("0") + route10.toString(2)).slice(-routeID_ALL[routeID].length).split("").map(Number)

    let res: number[] = []

    route2.forEach((v, i) => {
        if (v === 1) {
            res.push(routeID_ALL[routeID][i])
        }
    })
    return res
}
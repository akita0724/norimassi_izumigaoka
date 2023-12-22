import { searchResult } from "@/types/result"

export const ConvertData = (data: any) => {
    let res: Array<searchResult> = []

    data.forEach((element: any) => {
        res.push({
            serviceId: ("00000000" + element.serviceID).slice(-8),
            depaTime: element.time
        })
    })

    return res
}
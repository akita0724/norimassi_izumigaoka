import { BusStopLabel } from "@/types/params";

export const depature_options: Array<BusStopLabel> =
    [{ value: '0', label: '泉丘高校前' },
    { value: '1', label: '有松' },
    { value: '2', label: '上有松' },
    { value: '3', label: '市総合体育館前' },
    { value: '4', label: '泉が丘' }]

export const stopOptions: Array<Array<BusStopLabel>> = [
    [{ value: '0', label: 'ファンファーレ前' },
    { value: '1', label: 'ファンファーレ向かい' }],
    [{ value: '0', label: '二万堂方面' }],
    [{ value: '1', label: 'スターバックス前' },
    { value: '0', label: '丸亀製麺前' }],
    [{ value: '0', label: '体育館横' }],
    [{ value: '0', label: '図書館前' }]
]

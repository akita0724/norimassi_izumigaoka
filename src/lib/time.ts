import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export const calUnix = (date: string, time: string) => {

    let [year, month, day] = date.split('-').map(val => Number(val || 0));
    let [hour, minute] = time.split(':').map(val => Number(val || 0));


    const now = useTime()
    if (year == 0) {
        year = now.year();
        month = now.month() + 1;
        day = now.date();
    }
    if (time == "") {
        hour = now.hour()
        minute = now.minute()
    }

    const unix = dayjs(`${year}-${("00" + month).slice(-2)}-${("00" + day).slice(-2)} ${("00" + hour).slice(-2)}:${("00" + minute).slice(-2)}:00`)

    return unix.unix();
}

export const displayTime = (time: number): string => {
    return `${Math.floor(time / 100)} : ${("00" + time % 100).slice(-2)}`
}

export const useTime = () => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const date = dayjs().tz("Asia/Tokyo");
    return date
}
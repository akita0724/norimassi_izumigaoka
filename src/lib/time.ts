export const calUnix = (date: string, time: string) => {

    let [year, month, day] = date.split('-').map(val => Number(val || 0));
    let [hour, minute] = time.split(':').map(val => Number(val || 0));

    const now = new Date();

    if (year == 0) {
        year = now.getFullYear();
        month = now.getMonth() + 1;
        day = now.getDate();
    }
    if (time == "") {
        hour = now.getHours()
        minute = now.getMinutes()
    }

    const unix = Math.floor(new Date(year, month - 1, day, hour, minute).getTime() / 1000);

    return unix;
}

export const displayTime = (time: number): string => {
    return `${Math.floor(time / 100)} : ${("00" + time % 100).slice(-2)}`
}

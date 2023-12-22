import { SearchParam } from "@/types/params";

export const log = (param: SearchParam, dataset: string) => {
    if (process.env.NODE_ENV === "development") return
    const formId = "1FAIpQLSc0P-9TFJV4aBA77sdqt9UjrCsNHq0wBuSg9y0IcEQvtxhHOg";

    let query: string[] = [];

    query.push(`entry.993773062=${JSON.stringify(param)}`);
    query.push(`entry.480194889=${dataset}`);

    fetch(
        `https://docs.google.com/forms/d/e/${formId}/formResponse`,
        {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: query.join("&"),
        }
    );
    return
}
export interface SearchReq {
    depature: number
    dest: number
    stop: number
    unix: number
    date: string
    time: string
    head: number
    ahead: number
}

export interface SearchProps {
    // setFunction(arg: SetStateAction<SearchReq>): void
}
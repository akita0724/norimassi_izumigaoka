export interface routeLabelType_All {
    [key: number]: routeLabel
}

export interface routeLabel {
    route: number
    via: string
    dest: string
}
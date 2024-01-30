export type TimelineItem ={
    title: string
    description: string
    place?: string
    link?: string
    date: string
}
export type TimelineItems = {[year: number]: TimelineItem[]}
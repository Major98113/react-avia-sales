export interface TicketInterface {
    origin: string,
    origin_name: string,
    destination: string,
    destination_name: string,
    departure_date: string,
    departure_time: string,
    arrival_date: string,
    arrival_time: string,
    carrier: string,
    stops: number,
    price: number
}
export interface TicketsInterface {
    isLoading: boolean,
    tickets: TicketInterface[],
    ticketsCount: number,
    error: any
}

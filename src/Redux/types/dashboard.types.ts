export interface EventData {
    id: string;
    title: string;
    picture: string;
    date: string;
    status: string;
    organizerName: string;
    ticketsSold: number;
}

export interface datastatic {
    isSucces: boolean;
    message: string;
    loading: string;
    stats: {
        // Statistik tambahan
        totalUsers: number;
        totalEvents: number;
        totalOrganizers: number;
    };
    events: EventData[];
}
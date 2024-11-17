

export interface Events {
    _id : string,
    category: String,
    organizer?: string,
    title: string,
    date: Date,
    address: String,
    description: string,
    status: string,
    quota: number,
    price: number,
    startTime: string,
    finishTime: string,
    picture: string,
  
  }
  
  export interface PaginationData {
    total: number;
    page: number;
    lastPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }
  
  export interface eventType {
    events: Events[];
    selectedEvent: Events | null
    isEvent: boolean
    message: string
    loading: boolean
    pagination: PaginationData
  }
export interface Organizer {
  _id: string;
  organizerName: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface Events {
  _id: string,
  // categoryy: Category,
  category: string;
  organizer?: Organizer,
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
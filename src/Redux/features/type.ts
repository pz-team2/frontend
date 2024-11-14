;

export interface authState {
  email: string;
  password: string;
  message: string;
  isLogged: boolean;
  username: string;
  isRegistered: boolean;
  isverified: boolean;
  verifyMessage: string
}

export interface category {
  name: string;
  description: string;
  _id: string;
}

export interface categoryState {
  name: string;
  description: string;
  isCategory: boolean;
  message: string;
  datacategory: category[];
  _id: string;
}

export interface Organizer {
  _id: string;
  username: string;
  email: string;
  organizerName: string;
  phoneNumber: string;
  password: string;
}

export interface OrganizerState {
  organizers: Organizer[];
  isOrganizer: boolean;
  message: string;
  loading: boolean;
}

export interface loginOragnizerState {
  email: string;
  password: string;
  role: string;
  message: string;
  isLogged: boolean
}

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
  stats: {  // Statistik tambahan
    totalUsers: number;
    totalEvents: number;
    totalOrganizers: number;
  };
  events: EventData[];  // Array event
}

export interface eventType {
  _id: string;
  organizerId: string
  category: String,
  title: String,
  date: Date,
  address: String,
  description: string,
  status: string,
  quota: number,
  price: number,
  startTime: string,
  finishTime: string,
  picture: string
}


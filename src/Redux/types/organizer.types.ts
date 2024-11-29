export interface Organizer {
  _id: string;
  username: string;
  email: string;
  organizerName: string;
  phoneNumber: string;
  password: string;
}

export interface Events {
  _id: string,
  title: string,
  date: Date,
  address: string,
  description: string,
  status: string,
  quota: number,
  price: number,
  startTime: string,
  finishTime: string,
  picture: string,

}

export interface OrganizerState {
  organizers: Organizer[];
  isOrganizer: boolean;
  message: string;
  loading: boolean;
  paymentReport: PaymentReport | null;
  searchResults: Events[];
}

export interface loginOragnizerState {
  email: string;
  password: string;
  role: string;
  message: string;
  isLogged: boolean;
}

export interface PaymentReport {
  totalPayment: number;
  totalTransactions: number;
  totalTicketsSold: number;
  monthlySales: {
    month: string;
    ticketsSold: number;
  }[];
}

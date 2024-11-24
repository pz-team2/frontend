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
  paymentReport: PaymentReport | null;
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

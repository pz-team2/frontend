export interface Ticket {
    _id: number;
    name: string;
    code: string;
    payment: {
      _id: number;
      event: {
        title: string;
        date: string;
        address: string;
        description: string;
        status: string;
        startTime: string;
        finishTime: string;
        picture: string;
      };
      user: {
        fullname: string;
        username: string;
      };
    };
    qrcode: string;
    status: string;
  }
  
  export interface TicketState {
    tickets: Ticket[];
    isTicket: boolean;
    message: string;
    loading: boolean;
  }
  
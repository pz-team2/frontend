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
    isLogged: boolean;
  }
export interface authState {
    email: string;
    password: string;
    message: string;
    isLogged: boolean;
    username: string;
    isRegistered: boolean;
    isverified:  boolean;
    verifyMessage: string
}

export interface category{
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
  
  
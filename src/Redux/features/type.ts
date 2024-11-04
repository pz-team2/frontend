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

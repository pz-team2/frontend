
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
    category: string;
    datacategory: category[];
    _id: string;
  }
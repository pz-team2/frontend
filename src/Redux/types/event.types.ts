// Tipe untuk Category
export interface Category {
  _id: string;
  name: string;
}

// Tipe untuk Organizer
export interface Organizer {
  _id: string;
  organizerName: string;
}

// Tipe untuk PaginationData
export interface PaginationData {
  total: number;        
  page: number;        
  lastPage: number;     
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// Tipe untuk Events
export interface Events {
  _id: string;
  organizer: string; // ID organizer untuk tambah/update
  category: string;  // ID kategori untuk tambah/update
  title: string;
  date: Date;
  address: string;
  description: string;
  status: string;
  quota: number;
  price: number;
  startTime: string;
  finishTime: string;
  picture: string;
}

export interface EventsData {
  _id: string;
  organizer: Organizer; // ID organizer untuk tambah/update
  category: Category;  // ID kategori untuk tambah/update
  title: string;
  date: Date;
  address: string;
  description: string;
  status: string;
  quota: number;
  price: number;
  startTime: string;
  finishTime: string;
  picture: string;
}

// Tipe untuk eventType (menambahkan pagination)
export interface eventType {
  events: Events[];      // Array data event
  selectedEvent: EventsData | null;  // Event yang terpilih
  isEvent: boolean;      // Status event
  message: string;       // Pesan terkait event
  loading: boolean;      // Status loading
  pagination: PaginationData;  // Menyimpan informasi pagination
}

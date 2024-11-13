import api from '../../../services/api';

export interface IOrganizer {
  _id: string;
  username: string;
  email: string;
  organizerName: string;
  phoneNumber: string;
  password?: string;
}

export interface login {
  email: string;
  password: string;
  role: string;
}


export const apiLoginOrganizer = async (data: login) => {
  try {
    const response = await api.post('organizers/login', data);
    return response.data
  }catch(error){
    console.error(error);
  }
}

export const addOrganizerApi = async (data: Omit<IOrganizer, '_id'>) => {
  try {
    const response = await api.post('organizers/add', data);
    return response.data;
  } catch (error) {
    console.error('Gagal Menambahkan Organizer', error);
    return { success: false, message: 'Gagal Menambahkan Organizer' };
  }
};

export const getOrganizersApi = async () => {
  try {
    const response = await api.get('organizers/');
    return response.data;
  } catch (error) {
    console.error('Gagal Mengambil Data Organizer', error);
    return { success: false, message: 'Gagal Mengambil Data Organizer' };
  }
};

// Fungsi untuk mengambil detail organizer berdasarkan ID
export const getOrganizerByIdApi = async (id: string) => {
  try {
    const response = await api.get(`organizers/detail/${id}`);  // Mengambil data berdasarkan ID
    return response.data;
  } catch (error) {
    console.error('Gagal Mengambil Data Organizer berdasarkan ID', error);
    return { success: false, message: 'Gagal Mengambil Data Organizer' };
  }
};

export const deleteOrganizerApi = async (id: string) => {
  try {
    const response = await api.delete(`organizers/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Gagal Menghapus Organizer', error);
    return { success: false, message: 'Gagal Menghapus Organizer' };
  }
};

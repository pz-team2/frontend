import api from '../../../services/api';

export interface Organizer {
  _id: string;
  username: string;
  email: string;
  organizerName: string;
  phoneNumber: string;
  password?: string;
}

export const addOrganizerApi = async (data: Omit<Organizer, '_id'>) => {
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

export const deleteOrganizerApi = async (id: string) => {
  try {
    const response = await api.delete(`organizers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Gagal Menghapus Organizer', error);
    return { success: false, message: 'Gagal Menghapus Organizer' };
  }
};

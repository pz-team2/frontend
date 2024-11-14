import api from "../../../services/api";

interface categorytype {
    name: string;
    description: string;
}

export const addcategory = async (data: categorytype) => {
    try {
        const response = await api.post('categories/add', data);
        return response.data;
    } catch (error) {
        console.error('Gagal Menambahkan Category', error);
        return { success: false, message: 'Gagal Menambahkan Category' };
    }
};

export const listcategory = async () => {
    try {
        const response = await api.get('categories/');
        return response.data;
    } catch (error) {
        console.error('Gagal Mengambil Data Kategori', error);
        return { success: false, message: 'Gagal Mengambil Data Kategori' };
    }
};

export const delcategory = async(id:string) => {
    try {
        const response = await api.delete(`categories/${id}`)
        return response.data
    }catch(error){
        return console.log('Gagal Hapus Category',  error)

    }
}
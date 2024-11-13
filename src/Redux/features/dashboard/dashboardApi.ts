import api from "../../../services/api"


export const staticApi = async () => {

    try {

        const response = await api.get('dashboard/stats')
        return response.data;
        // console.log(response.data)
    } catch (error) {
        console.error('Gagal Mengambil Data', error);
        return { success: false, message: 'Gagal Mengambil Data Kategori' };
    }

}

export const dataDashbord = async () => {
    try {
        const response = await api.get('events/dataterbaru')
        // return console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Gagal Mengambil Data Kategori', error);
        return { success: false, message: 'Gagal Mengambil Data Kategori' };
    }
}
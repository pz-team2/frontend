import api from "../../../services/api"

interface eventType {
    category: String,
    title: String,
    date: Date,
    address: String,
    description: string,
    status: string,
    quota: number,
    price: number,
    startTime: string,
    finishTime: string,
    picture: string

}

export const tambahEventApi = async (id: string, data: eventType,) => {
    try {
        const respon = await api.post(`events/add/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        return respon.data
    } catch (error) {
        return Response.error
    }
}

export const getDataEventApi = async () => {
    try {
        const respon = await api.get('events/list')
        return respon.data
    }catch(error){
        return Response.error
    }
}

// export const getEventByIdApi = async (id: string) => {
// }

export const getEventByOrganizerApi = async(organizerId: string, page: number) => {
    try {

        const respon = await api.get(`events/listevent/${organizerId}`, {params: {page}})
        return respon.data
    }catch(error){
        return Response.error
    }
}
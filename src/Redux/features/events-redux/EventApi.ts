import api from "../../../services/api"

interface eventType {
    category: string
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
        console.log(respon)
        return respon.data
    } catch (error) {
        console.log(error)
        return error

    }
}



export const getEventByOrganizerApi = async (organizerId: string, page: number) => {
    try {
        const respon = await api.get(`events/listevent/${organizerId}`, { params: { page } })
        return respon.data
    } catch (error) {
        return 'terjadi kesalahan'
    }
}

export const getEventByIdApi = async (id: string) => {
    try {
        const response = await api.get(`events/detail/${id}`)
        return response.data
    } catch (error) {
        return 'terjadi kesalahan'
    }
}

export const deleteEventApi = async (id: string) => {
    try {
        const respon = await api.delete(`events/delete/${id}`)
        return respon.data
    } catch (error) {
         return 'terjadi kesalahan'
    }
}

export const updateEventApi = async (id: string, data: eventType) => {
    try {
        const respon = await api.put(`events/update/${id}`, data)
        return respon.data

    } catch (error) {
         return 'terjadi kesalahan'
    }
}
import api from "../../../services/api"

interface eventType {
    _id: string;
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

export const tambahEventApi = async ( organizerid:string, data:eventType, ) => {
    try {
        const respon = await api.post(`events/add/${organizerid}`, data)
        return respon.data
    } catch (error) {
        return Response.error
    }
}
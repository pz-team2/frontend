
import { Link } from 'react-router-dom'
import gambar from '../../assets/img/banner1.png'

export const Event = () => {
    return (
        <div>
            <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black" > My Event </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-16'>
                <div className="card  w-full card-compact bg-base-100 shadow-xl mt-3">
                    <figure>
                        <img src={gambar} />
                    </figure>
                    <div className="card-body bg-white rounded-b-2xl">
                        <h2 className="card-title text-black">Konser Festival</h2>
                        <p>31 Desember 2024</p>
                        <div className="card-actions justify-start mt-3">
                            <Link to='/organizer/event/detail' className='btn bg-secondary hover:bg-cyan-600 border-0 text-white'>Lihat Detai</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

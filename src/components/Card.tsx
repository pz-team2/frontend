interface cardProps {
    title: String,
    jumlah: String,
    icons: React.ReactNode,

}

const Card: React.FC<cardProps> = ({ title, jumlah, icons }) => {
    return (
        <div className="card bg-custom-secondary text-white w-full shadow-md">
            <div className="card-body flex flex-row justify-between items-center p-4 md:p-6">
                <div>
                    <h2 className="card-title text-2xl md:text-3xl">{jumlah}</h2>
                    <h3 className="md:text-lg mt-3 lg:text-2xl font-medium ">{title}</h3>
                </div>
                <div className="flex items-center text-4xl">
                    {icons}
                </div>
            </div>
        </div>
    )
}

export default Card
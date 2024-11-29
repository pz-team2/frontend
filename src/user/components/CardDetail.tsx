interface CardDetailProps {
  title: string;
  description: string;
  address: string;
  date: Date | string;
  picture?: string;
}

const CardDetail: React.FC<CardDetailProps> = ({
  title,
  description,
  address,
  date,
}) => {
  return (
    <div className="card bg-[#f4f4f4] p-4 shadow-xl rounded-md space-y-6">
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">{`Lokasi: ${address}`}</p>
      <p className="text-gray-600">{`Tanggal: ${date}`}</p>
    </div>
  );
};

export default CardDetail;

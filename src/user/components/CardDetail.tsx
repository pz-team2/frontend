// CardDetail.tsx
interface CardDetailProps {
  title: string;
  description: string;
  location: string;
  date: Date;
  lineup: string[];
}

const CardDetail: React.FC<CardDetailProps> = ({
  title,
  description,
  location,
  date,
  lineup
}) => {
  return (
    <div className="card w-full bg-[#f4f4f4] shadow-xl p-4 sm:p-6">
      <div className="card-body">
        <h2 className="card-title text-blue-900 text-xl sm:text-2xl mb-4">
          {title}
        </h2>

        <p className="text-gray-700 text-sm sm:text-base mb-4">{description}</p>

        <div className="mb-4">
          <p className="text-gray-700 text-sm sm:text-base">
            Event akan diselenggarakan pada:
          </p>
          <div className="ml-4">
            <p className="text-gray-700 text-sm sm:text-base">Lokasi: {location}</p>
            <p className="text-gray-700 text-sm sm:text-base">Tanggal: {date.toLocaleDateString("id-ID")}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 font-medium text-sm sm:text-base">Line Up:</p>
          <ul className="list-disc ml-4 sm:ml-8 text-gray-700 text-sm sm:text-base">
            {lineup.map((artist, index) => (
              <li key={index}>{artist}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

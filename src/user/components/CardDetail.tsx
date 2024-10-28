const CardDetail = () => {
    return (
      <div className="card w-full bg-[#f4f4f4] shadow-xl p-4 sm:p-6">
        <div className="card-body">
          <h2 className="card-title text-blue-900 text-xl sm:text-2xl mb-4">
            Konser Cosmyc Fest
          </h2>
  
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            IMWE (Imagene Week of Himakom) merupakan rangkaian acara tahunan yang
            diadakan oleh Program Studi Ilmu Komputer Universitas Lambung
            Mangkurat (ULM) dalam rangka memperingati HUT HIMAKOM.
          </p>
  
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Tema dari kegiatan ini adalah "Navigating Through The Stars in COSMYC
            Voyage" dengan nama acara puncak{" "}
            <span className="font-bold">COSMYC FEST</span>. Acara festival musik
            dan bazaar yang menyediakan tenant - tenant untuk pengunjung.
          </p>
  
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Untuk itu, jangan sampai kelewatan war tiket Early Bird yang akan
            dibuka ditanggal: 1 Agustus 2024, pukul 20.00 WITA
          </p>
  
          <div className="mb-4">
            <p className="text-gray-700 text-sm sm:text-base">
              Eventnya sendiri akan diselenggarakan pada:
            </p>
            <div className="ml-4">
              <p className="text-gray-700 text-sm sm:text-base">Lokasi: Banjar Baru</p>
              <p className="text-gray-700 text-sm sm:text-base">Tanggal: 2024</p>
            </div>
          </div>
  
          <div className="mb-4">
            <p className="text-gray-700 font-medium text-sm sm:text-base">Line Up:</p>
            <ul className="list-disc ml-4 sm:ml-8 text-gray-700 text-sm sm:text-base">
              <li>Juicy Lucy</li>
              <li>Widiya Angela</li>
              <li>RCKA</li>
            </ul>
          </div>
  
          <div>
            <p className="text-gray-700 font-medium text-sm sm:text-base">Penukaran Tiket:</p>
            <p className="text-gray-700 text-sm sm:text-base">
              Untuk waktu dan lokasi penukaran tiket dapat dilihat pada postingan
              Instagram @cosmycfest
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardDetail;
  
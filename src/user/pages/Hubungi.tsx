import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import Navbar from "../components/Navbar";

export const Hubungi = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-10 px-4 md:h-[calc(100vh-10rem)]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
          Hubungi Kami
        </h2>
        <div className="bg-[#f4f4f4] text-black rounded-lg shadow-lg p-6 md:p-10 w-full max-w-3xl">
          <p className="text-md mb-4">
            GoEvent adalah platform yang dirancang khusus untuk event organizer
            dalam membuat, mengelola, dan menjual tiket untuk berbagai acara,
            seperti konser, seminar edukasi, dan banyak lagi. Bergabunglah
            dengan kami untuk menyukseskan acara Anda dan menjangkau lebih
            banyak pengunjung!
          </p>
          <details className="collapse bg-gray-100 rounded-lg mb-6">
            <summary className="p-4 text-md text-white font-bold bg-blue-950 rounded-t-lg cursor-pointer">
              Informasi Pembuatan Event
            </summary>
            <div className="p-4 text-sm text-black font-medium">
              <ul className="list-disc list-inside">
                <li>Menyediakan Dokumen Pendukung KTP & NPWP</li>
                <li>Menghubungi WhatsApp atau Email</li>
              </ul>
            </div>
          </details>
          <div className="flex flex-col md:flex-row justify-around lg:items-center gap-4 text-gray-700">
            <div className="flex items-center gap-3">
              <MdEmail size={24} />
              <span>goevent@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <IoLogoWhatsapp size={24} />
              <span>+6281321242020</span>
            </div>
            <div className="flex items-center gap-3">
              <RiInstagramFill size={24} />
              <span>GoEvent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

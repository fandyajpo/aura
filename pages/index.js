import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-4">
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-violet-500 to-red-500">
          Aku lupa nama kaka, kalo ga salah Ka Aura ya?
        </p>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-violet-500 to-red-500">
          Aku sengaja buat ini special buat kakak
        </p>
        <p className="text-2xl text-gray-800 font-bold bg-blue-200 p-2 rounded-md">
          Waktu itu ada maba yang ga tau dia kelas apa, terus dia nanya ke kaka
          di gedung 5, lantai 2, kalo gasalah yang gedungnya deket parkiran
          belakang
        </p>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-800 to-orange-800">
          Makasi ya kak udah mau ngasih tau aku kelas ku, ternyata aku kelas...
        </p>
        <div className="flex flex-col gap-y-4">
          <p className="font-bold text-sm underline">
            Klik button dibawah kak ya setelah baca kalimat diatas
          </p>
          <div className="p-8 bg-pink-500 w-44 h-16 flex items-center justify-center rounded-full">
            <Link href={"daftarkelas"}>
              <a className="flex items-center">
                <p className="font-bold text-pink-200">Ayok Kak tekan aku</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

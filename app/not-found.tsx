import Link from'next/link';

const NotFound=() => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 p-8 font-mono">
            <svg className="w-24 h-24 text-red-500 mb-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round"strokeLinejoin="round" strokeWidth="1.5" d="M10 1412-2m0 012-2m-2 21-2-2m2 212 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-7x1 md:text-9x1 font-black text-red-600 mb-6 drop-shadow-lg">
                ERROR 404
            </h1>
            <h2 className="text-xl md:text-2x1 font-semibold mt-4 mb-3 text-center text-res-400">
                // Halaman ini tidak dapat ditemukan karena URL yang dimasukan salah.
            </h2>

            <p className="text-base text-gray-400 mb-10text-center max-w-lg">
                Alamat yang kamu akses tidak terdaftar dalam sitem *routing* kamu. Coba periksa kembali URL atau klik tombol dibawah untuk kembali ke direktori utama.
            </p>

            <Link href="/" passHref>
            <button className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-blue-500/50 shadow-x1 hover:bg-blue-600 transition duration-300 transfrom hover:scale-105 border-b-4 border-blue-900">
            
                $ cd /home
            </button>
        </Link>

        </div>
    )
};

export default NotFound;
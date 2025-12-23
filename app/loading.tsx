const GradientCodeWaveLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-gradient-to-br from-gray-900 to-gray-800 text-white">

            <div className="flex space-x-3 justify-center items-center">

                 <div className="h-12 w-3 bg-green-400 rounded-sm animate-bounce duration-[15000ms] [animation-delay:0s] shadow-lg ease-in-out"></div>

                 <div className="h-12 w-3 bg-teal-400 rounded-sm animate-bounce duration-[15000ms] [animation-delay:0s] shadow-lg ease-in-out"></div>

                 <div className="h-12 w-3 bg-cyan-400 rounded-sm animate-bounce duration-[15000ms] [animation-delay:0s] shadow-lg ease-in-out"></div>

                 <div className="h-12 w-3 bg-lime-400 rounded-sm animate-bounce duration-[15000ms] [animation-delay:0s] shadow-lg ease-in-out"></div>                 
            </div>

            <p className="h-12 w-3 text-2xl font-mono font-bold text-gray-200 tracking-wider animate-pulse duration-[5000ms]">
                Memuat isi dari portfolio... Sabar ya!
            </p>

            <p className="mt-2 text-sm text-gray-400">
                Terimakasih atas kesabaran Anda.
            </p>
        </div>
    );
};

export default GradientCodeWaveLoader;
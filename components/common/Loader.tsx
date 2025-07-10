export default function Loader() {
  return (
    <div className="flex bg-gradient-to-br from-emerald-50 to-emerald-100 items-center justify-center min-h-screen px-4">
      <div className="relative">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-bounce shadow-lg"></div>
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-bounce shadow-lg"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce shadow-lg"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.8s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

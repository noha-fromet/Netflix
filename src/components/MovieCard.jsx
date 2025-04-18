function MovieCard({ movie }) {
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=Pas+de+visuel";

    const title = movie.title || movie.name || "Titre inconnu";

    return (
        <div className="relative group cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out w-[200px]">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-[300px] object-cover rounded-xl shadow-lg"
            />

            {/* Conteneur pour le titre uniquement */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-xl">
                <h3 className="text-white text-sm font-bold mb-1 truncate">{title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;

function MovieCard({ movie }) {
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=Pas+de+visuel";

    const title = movie.title || movie.name || "Titre inconnu";
    const note = movie.vote_average || "N/A";
    const releaseDate = movie.release_date || "Date inconnue";

    return (
        <div className="relative rounded overflow-hidden shadow-md group">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-[225px] object-cover rounded"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                <h3 className="text-white text-xs font-bold truncate">{title}</h3>
                <p className="text-gray-300 text-[11px]">
                    ⭐ {note} &nbsp;|&nbsp; 📅 {releaseDate}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;

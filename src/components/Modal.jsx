import React, { useEffect, useState } from "react";
import './modal.css';  // Importation du fichier CSS

function Modal({ movie, onClose }) {
    const [trailer, setTrailer] = useState(null);  // État pour la bande-annonce
    const imageUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
        : movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=Pas+de+visuel";

    const title = movie.title || movie.name || "Titre inconnu";
    const overview = movie.overview || "Pas de description disponible.";
    const vote = movie.vote_average || "N/A";
    const releaseDate = movie.release_date || movie.first_air_date || "Date inconnue";
    const type = movie.title ? "Film" : "Série";

    useEffect(() => {
        const fetchTrailer = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=VOTRE_CLE_API`);
            const data = await response.json();
            const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
            setTrailer(trailer ? trailer.key : null);
        };
        fetchTrailer();
    }, [movie.id]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="modal-close-btn"
                >
                    ×
                </button>

                <img src={imageUrl} alt={title} className="modal-img" />

                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <div className="modal-info">
                        <p className="text-sm text-gray-400 mb-1">📅 Date de sortie : {releaseDate}</p>
                        <p className="text-sm text-gray-400 mb-1">⭐ Note : {vote}</p>
                        <p className="text-sm text-gray-400 mb-3">🎬 Type : {type}</p>
                        <p className="text-base">{overview}</p>
                    </div>

                    {/* Si une bande-annonce est disponible, l'afficher */}
                    {trailer ? (
                        <div className="modal-trailer">
                            <h3 className="text-lg font-bold mt-4">Bande-annonce</h3>
                            <iframe
                                width="100%"
                                height="315"
                                src={`https://www.youtube.com/embed/${trailer}`}
                                title="Bande-annonce"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : (
                        <p className="text-gray-400 mt-4">Aucune bande-annonce disponible.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal;

import React from "react";
import './modal.css';  // Importation du fichier CSS

function Modal({ movie, onClose }) {
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

    return (
        <div className="modal-overlay">
            <div className="modal-content">
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
                </div>
            </div>
        </div>
    );
}

export default Modal;

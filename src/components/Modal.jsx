import React from 'react';
import './Modal.css'; // Assurez-vous de créer ce fichier CSS

function Modal({ movie, onClose }) {
    if (!movie) return null; // Si aucune information sur le film n'est passée, ne rien afficher

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>X</button>
                <h2 className="text-white text-3xl font-semibold">{movie.title}</h2>
                <p className="text-white">{movie.overview}</p>
                <p><strong>Date de sortie :</strong> {movie.release_date}</p>
                <p><strong>Note :</strong> {movie.vote_average}</p>
                {/* Ajoute d'autres informations que tu veux afficher */}
            </div>
        </div>
    );
}

export default Modal;

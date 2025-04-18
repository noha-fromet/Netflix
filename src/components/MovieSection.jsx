import React, { useState } from "react";
import MovieCard from "./MovieCard"; // Importation de votre composant MovieCard
import Modal from "./Modal";  // Importation du composant Modal
import "./MovieSection.css";  // Assurez-vous que ce fichier CSS existe et est bien appliqué

function MovieSection({ title, items }) {
    const [selectedMovie, setSelectedMovie] = useState(null); // Pour gérer le film sélectionné pour le modal

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie); // Ouvre le modal avec les informations du film
    };

    const handleCloseModal = () => {
        setSelectedMovie(null); // Ferme le modal en réinitialisant l'état
    };

    return (
        <div className="movieRow mb-8">
            <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
            <div className="movieRow--listarea overflow-x-auto">
                <div className="movieRow--list flex space-x-4">
                    {items.map((movie) => (
                        <div className="movieRow--item" key={movie.id}>
                            <div onClick={() => handleMovieClick(movie)}>
                                <MovieCard movie={movie} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Si un film est sélectionné, afficher le Modal */}
            {selectedMovie && <Modal movie={selectedMovie} onClose={handleCloseModal} />}
        </div>
    );
}

export default MovieSection;

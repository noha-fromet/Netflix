import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Modal from "./Modal";
import "./MovieSection.css";

function MovieSection({ title, items }) {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="movieRow mb-8">
            <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
            <div className="movieRow--listarea overflow-x-auto">
                <div className="movieRow--list flex space-x-4">
                    {items.map((movie) => (
                        <div className="movieRow--item" key={movie.id} onClick={() => handleMovieClick(movie)}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedMovie && <Modal movie={selectedMovie} onClose={handleCloseModal} />}
        </div>
    );
}

export default MovieSection;

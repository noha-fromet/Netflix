import React from 'react';
import MovieSection from '../components/MovieSection';

function Films({ moviesList }) {
    return (
        <div className="container mx-auto px-4 py-6">
            <section className="list">
                {/* Affiche uniquement les films (même filtrés) */}
                {moviesList.map((item, key) => (
                    item.items.length > 0 && (
                        <MovieSection key={key} title={item.title} items={item.items} />
                    )
                ))}
            </section>
        </div>
    );
}

export default Films;

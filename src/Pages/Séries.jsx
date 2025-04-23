import React from 'react';
import MovieSection from '../components/MovieSection';

function Séries({ seriesList }) {
    return (
        <div className="container mx-auto px-4 py-6">
            <section className="list">
                {/* Affiche uniquement les séries (même filtrées) */}
                {seriesList.map((item, key) => (
                    item.items.length > 0 && (
                        <MovieSection key={key} title={item.title} items={item.items} />
                    )
                ))}
            </section>
        </div>
    );
}

export default Séries;

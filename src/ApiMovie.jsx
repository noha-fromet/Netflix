const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fonction générique pour faire des requêtes vers l’API TMDB
 */
const fetchMovies = async (endpoint) => {
    try {
        const separator = endpoint.includes('?') ? '&' : '?';
        const url = `${API_URL}/${endpoint}${separator}language=fr-FR&api_key=${API_KEY}`;

        console.log("➡️ Appel vers :", url);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`);
        }

        const data = await response.json();
        console.log("📦 Données reçues :", data);

        return data.results ? data.results : [data];
    } catch (error) {
        console.error("❌ Erreur lors du fetch :", error.message);
        return [];
    }
};

const ApiMovie = {
    getHomeMovies: async () => {
        return [
            {
                slug: 'top-rated',
                title: 'Mieux notés (Films)',
                items: await fetchMovies('movie/top_rated'),
            },

            {
                slug: 'upcoming',
                title: 'Prochainement (Films)',
                items: await fetchMovies('movie/upcoming'),
            },
            {
                slug: 'popular',
                title: 'Films Populaires',
                items: await fetchMovies('movie/popular'),
            },
            {
                slug: 'now-playing',
                title: 'Actuellement au cinéma (Films)',
                items: await fetchMovies('movie/now_playing'),
            },
            {
                slug: 'latest-movie',
                title: 'Dernier film',
                items: await fetchMovies('movie/latest'),
            },
            {
                slug: 'trending-movies-week',
                title: 'Tendance cette semaine (Films)',
                items: await fetchMovies('trending/movie/week'),
            },
            {
                slug: 'trending-movies-day',
                title: 'Tendance aujourd’hui (Films)',
                items: await fetchMovies('trending/movie/day'),
            },
            // Autres catégories de films...
        ];
    },

    getHomeSeries: async () => {
        return [
            {
                slug: 'tv-popular',
                title: 'Séries Populaires',
                items: await fetchMovies('tv/popular'),
            },
            {
                slug: 'tv-top-rated',
                title: 'Séries Mieux Notées',
                items: await fetchMovies('tv/top_rated'),
            },
            {
                slug: 'tv-airing-today',
                title: 'Séries diffusées aujourd’hui',
                items: await fetchMovies('tv/airing_today'),
            },
            {
                slug: 'tv-on-the-air',
                title: 'Séries en cours',
                items: await fetchMovies('tv/on_the_air'),
            },
            {
                slug: 'trending-tv-week',
                title: 'Tendance cette semaine (Séries)',
                items: await fetchMovies('trending/tv/week'),
            },
            {
                slug: 'trending-tv-day',
                title: 'Tendance aujourd’hui (Séries)',
                items: await fetchMovies('trending/tv/day'),
            },
            // Autres catégories de séries...
        ];
    },

    // Récupérer les détails d'un film
    getMovieDetails: async (id) => {
        return await fetchMovies(`movie/${id}`);
    },

    // Récupérer les détails d'une série
    getSeriesDetails: async (id) => {
        return await fetchMovies(`tv/${id}`);
    },

    // Tu peux également étendre la logique pour d'autres catégories
};

export default ApiMovie;

import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ApiMovie from './ApiMovie';
import Films from './Pages/Films.jsx';
import Séries from './Pages/Séries.jsx';
import MovieSection from './components/MovieSection.jsx';
import MovieDetail from './Pages/MovieDetail.jsx';
import SeriesDetail from './Pages/SeriesDetail.jsx';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);

  // Charger les films au démarrage
  useEffect(() => {
    const loadAllMovies = async () => {
      const list = await ApiMovie.getHomeMovies();
      setMoviesList(list);
    };

    loadAllMovies();
  }, []);

  // Charger les séries au démarrage
  useEffect(() => {
    const loadAllSeries = async () => {
      const list = await ApiMovie.getHomeSeries();
      setSeriesList(list);
    };

    loadAllSeries();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route d'accueil qui affiche Films et Séries */}
          <Route
            index
            element={
              <>
                <div className="container mx-auto px-4 py-6">
                  <h2 className="text-white text-2xl font-bold mb-4">Films à venir</h2>
                  {moviesList.map((item, key) => (
                    <MovieSection key={key} title={item.title} items={item.items} />
                  ))}
                </div>

                <div className="container mx-auto px-4 py-6">
                  <h2 className="text-white text-2xl font-bold mb-4">Séries à venir</h2>
                  {seriesList.map((item, key) => (
                    <MovieSection key={key} title={item.title} items={item.items} />
                  ))}
                </div>
              </>
            }
          />

          {/* Pages de détail pour un film et une série */}
          <Route path="film/:id" element={<MovieDetail />} />
          <Route path="serie/:id" element={<SeriesDetail />} />

          {/* Page Séries */}
          <Route
            path="Séries"
            element={<Séries seriesList={seriesList} />}  // Passe la liste des séries
          />
          {/* Page Films */}
          <Route
            path="Films"
            element={<Films moviesList={moviesList} />}  // Passe la liste des films
          />
          {/* Route par défaut pour 404 */}
          <Route
            path="*"
            element={<h1 className="text-white">404 - Page non trouvée</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ApiMovie from './ApiMovie';
import Films from './Pages/Films.jsx';
import Séries from './Pages/Séries.jsx';
import MovieSection from './components/MovieSection.jsx';

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
        <Route path="/" element={
          <Layout />
        }>
          <Route
            index
            element={
              <div className="container mx-auto px-4 py-6">
                <section className="list">
                  {moviesList.map((item, key) => (
                    <MovieSection key={key} title={item.title} items={item.items} />
                  ))}
                  {seriesList.map((item, key) => (
                    <MovieSection key={`serie-${key}`} title={item.title} items={item.items} />
                  ))}
                </section>
              </div>
            }
          />
          <Route
            path="Séries"
            element={<Séries seriesList={seriesList} />}
          />
          <Route
            path="Films"
            element={<Films moviesList={moviesList} />}
          />
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

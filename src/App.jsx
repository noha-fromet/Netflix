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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);

  // Chargement des films
  useEffect(() => {
    const loadAllMovies = async () => {
      const list = await ApiMovie.getHomeMovies();
      setMoviesList(list);
      setFilteredMovies(list);
    };
    loadAllMovies();
  }, []);

  // Chargement des séries
  useEffect(() => {
    const loadAllSeries = async () => {
      const list = await ApiMovie.getHomeSeries();
      setSeriesList(list);
      setFilteredSeries(list);
    };
    loadAllSeries();
  }, []);

  // Fonction de recherche
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredMovies(moviesList);
      setFilteredSeries(seriesList);
    } else {
      const filteredMoviesList = moviesList.map((category) => ({
        ...category,
        items: category.items.filter((movie) =>
          movie.title?.toLowerCase().includes(query)
        ),
      }));

      const filteredSeriesList = seriesList.map((category) => ({
        ...category,
        items: category.items.filter((serie) =>
          serie.name?.toLowerCase().includes(query)
        ),
      }));

      setFilteredMovies(filteredMoviesList);
      setFilteredSeries(filteredSeriesList);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout searchQuery={searchQuery} handleSearch={handleSearch} />}>
          <Route
            index
            element={
              <div className="container mx-auto px-4 py-6">
                <section className="list">
                  {/* Affiche les films filtrés */}
                  {filteredMovies.length === 0 ? (
                    <h2 className="text-white">Aucun film trouvé</h2>
                  ) : (
                    filteredMovies.map((item, key) => (
                      item.items.length > 0 && (
                        <MovieSection key={key} title={item.title} items={item.items} />
                      )
                    ))
                  )}
                  {/* Affiche les séries filtrées */}
                  {filteredSeries.length === 0 ? (
                    <h2 className="text-white">Aucune série trouvée</h2>
                  ) : (
                    filteredSeries.map((item, key) => (
                      item.items.length > 0 && (
                        <MovieSection key={`serie-${key}`} title={item.title} items={item.items} />
                      )
                    ))
                  )}
                </section>
              </div>
            }
          />
          {/* Routes des séries et films avec les listes filtrées */}
          <Route path="Séries" element={<Séries seriesList={filteredSeries} />} />
          <Route path="Films" element={<Films moviesList={filteredMovies} />} />
          <Route path="*" element={<h1 className="text-white">404 - Page non trouvée</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

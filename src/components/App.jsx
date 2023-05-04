import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayouts from './SharedLayout/SharedLayout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayouts />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} /> */
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}
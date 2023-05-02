// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayouts from './SharedLayout/SharedLayout';

// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayouts />}>
        {/* <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route> */}
      </Route>
    </Routes>
  );
}

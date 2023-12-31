import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://my-movies-app-c413353d6931.herokuapp.com/movies')
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            _id: movie._id,
            title: movie.title,
            imagePath: movie.imagePath,
            description: movie.description,
            year: movie.year,
            genre: {
              name: movie.genre.name
            },
            director: {
              name: movie.director.name
            }
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.lenght === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};

//{
//  id: 1,
//  title: 'Fight Club',
//  image: 'https://mhsphoenix.com/wp-content/uploads/2023/02/81DKJkO4SL.jpg',
//  director: 'David Fincher'
// },
//{
//  title: 'Interstellar',
// image:
//    'http://thediscoverer.columbus.edu.co/wp-content/uploads/2023/02/gggg.jpg',
//  director: 'Christopher Nolan'
// },
// {
//  id: 3,
//  title: 'Good Fellas',
//  image: 'https://biblioteca.udem.edu.mx/images/2020/02/24/Goodfellas.jpg',
//  director: 'Martin Scorsese'
// },
// {
//  id: 4,
//  title: 'Natural Born Killers',
//  image:
//    'https://moviepostermexico.com/cdn/shop/products/2_cf7a481c-134a-4a0c-a4ec-1a3a58ffc857_1024x1024@2x.jpg?v=1595957403',
//  director: 'Oliver Stone'
// }

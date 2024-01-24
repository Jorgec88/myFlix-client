import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './movie-view.scss';

export const MovieView = ({ movie, removeFav, addFav }) => {
  const { movieId } = useParams();
  const movie = movies.find((b) => b.id === movieId);

  return (
    <div>
      <div>
        <img className='w-100' src={movie.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <div>
        {user.FavoriteMovies.includes(movie._id) ? (
          <Button className='my-2 me-2' on onClick={() => removeFav(movie._id)}>
            Remove from Favorite
          </Button>
        ) : (
          <Button className='my-2 me-2' onClick={() => addFav(movie._id)}>
            Add to Favorite
          </Button>
        )}
      </div>
      <Link to={`/`}>
        <button className='back-button'>Back</button>
      </Link>
    </div>
  );
};

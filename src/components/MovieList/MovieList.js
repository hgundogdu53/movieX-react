import React from 'react';
import Movie from '../Movie/Movie';


function MovieList({ movies }) {
    return (
        <div className="movie-list">

            {movies && movies.map(movie => {
                return (
                    <Movie
                        id={movie.id}
                        key={movie.id}
                        title={movie.original_title}
                        posterPath={"http://image.tmdb.org/t/p/w400" + movie.poster_path}
                    />
                );
            })}
        </div>
    );
}

export default MovieList;
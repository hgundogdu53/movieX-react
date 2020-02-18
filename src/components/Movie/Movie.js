import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../index.css';

function Movie(props) {
    const history = useHistory();
    const { posterPath, title } = props;

    function navigateToMovie() {
        history.push(`/movie/${props.id}`);
    }

    return (
        <div className='card-container'>
            <img className='card' src={posterPath} alt={title} onClick={navigateToMovie} />
            <h5>{title}</h5>
        </div>
    )

}
export default Movie;
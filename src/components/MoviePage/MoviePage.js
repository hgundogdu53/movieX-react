import React, { Component } from 'react';
import moment from 'moment';
import './MoviePage.css'
import config from '../../config'


class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = { crew: [], data: {} };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`${config.API_ENDPOINT}/api/movie/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
        fetch(`${config.API_ENDPOINT}/api/movie/${id}/credits`)
            .then(response => response.json())
            .then(data => this.setState({ crew: data.crew }));
    }

    render() {
        const {
            original_title,
            overview,
            poster_path,
            release_date,
            vote_average
        } = this.state.data;

        return (
            <div className="movie-container">
                <img className='detail-poster' alt='poster' src={"http://image.tmdb.org/t/p/w200" + poster_path} />
                <div className='detail-title'>{original_title}</div>
                <div className='detail-release-date'>Released on: {moment(release_date).format("MMM Do YYYY")}</div>
                <div className='detail-score'>Viewer Rating: {vote_average}</div>
                <div className='detail-overview'>{overview}</div>
            </div>
        );
    }
}

export default MoviePage;

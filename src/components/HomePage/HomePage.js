import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './HomePage.css';
import { GoSearch } from 'react-icons/go';
import { MdLocalMovies } from 'react-icons/md';
import logo from '../../images/movie-logo-illustration-35102546.jpg';
import config from '../../config';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        let url = `${config.API_ENDPOINT}/api/movie/popular`;
        if (search) {
            url = `${config.API_ENDPOINT}/api/search/movie?query=${search}`
        }
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later.')
                }
                return res;
            })
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(err =>
                console.error(err.message)
            );
    }, [search]);

    return (
        <div className="App">
            <header className="header">
                <Link to='/' className='title'><img className='icon' src={logo} alt='logo'></img><span className='title'>MovieX</span></Link>
                <div className='bar'>
                    <label htmlFor='search'><GoSearch /></label>
                    <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button type="submit">
                        Go!
                    </button>
                </div>
            </header>
            <div className='movie-box'>
                <MovieList movies={movies} />
            </div>
            <footer>
                <MdLocalMovies />Huseyin Gundogdu @2020
            </footer>
        </div>
    )

}

export default HomePage


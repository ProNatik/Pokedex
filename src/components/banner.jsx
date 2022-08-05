import React from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import styles from '../css/banner.module.css';

function banner() {
    const pokedex = useSelector(state => state.pokedex);
    return (
        <header className={styles.header}>
            <h1>
                <Link to="/">Pokemon</Link>
            </h1>
            <input placeholder='Recherche'></input>
            <div>
                <Link to="/pokedex"> <strong>Pokedex {pokedex.length}</strong> </Link>
            </div>
        </header>
    );
};

export default banner;
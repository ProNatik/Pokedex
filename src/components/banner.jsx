import React from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import styles from '../css/banner.module.css';

function banner() {
    const pokedex = useSelector(state => state.pokedex);
    return (
        <header className={styles.header}>
            <h1>
                <Link to="/" className={styles.text}>Pokemon</Link>
            </h1>
            <div></div>
            <h3>
                <Link to="/pokedex" className={styles.text}> Pokedex ({pokedex.length})</Link>
            </h3>
        </header>
    );
};

export default banner;
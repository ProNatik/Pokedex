import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../css/pokemonCard.module.css';
import PokemonCard from '../components/pokemonCard';

function pokedex() {
    const pokemons = useSelector(state=>state.pokedex);
    return (
        <div className={`${styles.container}`}>
            <div className='row'>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default pokedex;
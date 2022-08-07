import React from 'react';
import { useListPokemons } from '../service/pokelist';
import PokemonList from '../components/pokemonList';

const home = () => {
    const pokemons = useListPokemons();

    return (
        <>  
            <div>{pokemons && <PokemonList pokemons={pokemons} />}</div>
        </>
    )
    
};

export default home;
import { useState, useEffect } from 'react';
import axios from 'axios';

export function useListPokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
            setPokemons(data.results);
        }
        fetchData();
    }, []); 

    return pokemons;
}
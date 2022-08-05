import { useState, useEffect } from 'react';
import axios from 'axios';

export function useInfoPokemons(id) {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemons(data);
        }
        fetchData();
    }, [id]); 
    return pokemons;
}
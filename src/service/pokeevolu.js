import { useState, useEffect } from 'react';
import axios from 'axios';

export function useEvoPokemons(id) {
    const [pokeSpecies, setPokeSpecies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            setPokeSpecies(data);
        }
        fetchData();
    }, [id]); 
    const PokeEvolution = takeEvoPokemon(pokeSpecies.evolution_chain && pokeSpecies.evolution_chain.url);
    return {PokeEvolution, pokeSpecies};
}

function takeEvoPokemon(url) {
    const [pokeEvo, setPokeEvo] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(({ data }) => {

    setPokeEvo(getEvolutions(data?.chain));
})
    }, [url]); 

    return pokeEvo;
}

function getEvolutions(chain, evolutions = []) {
    const name = chain.species.name;
    const id = Number(chain.species.url.split('/').reverse()[1]);

    evolutions.push({ name, id });

    if (chain.evolves_to.length === 0)
        return evolutions;
    else
        return getEvolutions(chain.evolves_to[0], evolutions);
}
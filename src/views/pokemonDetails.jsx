import React from 'react';
import { useParams } from 'react-router-dom';
import { useInfoPokemons } from '../service/pokeinfo';
import { useEvoPokemons } from '../service/pokeevolu';
import styles from '../css/pokemonDetails.module.css';
import { v4 as uuidv4 } from 'uuid';

function pokemonDetails({ pokemon }){
    const params = useParams();
    const { id } = params;
    const url= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
    
    const pokemons = useInfoPokemons(id);
    const {PokeEvolution, pokeSpecies} = useEvoPokemons(id);

    const { flavor_text : description } = pokeSpecies.flavor_text_entries?.find(({ language, version }) => {
        return (language.name === 'en' && version.name === 'sword')
    }) ?? {};

    return (
        
        <div className={`${styles.container_card}`}>
            {pokemons && <>
            <div className={`${styles.card}`}>
                <div className={`${styles.card_img}`}>
                    <img src={url} alt="Pokemon" />
                </div>
                <div className={`${styles.card_dis}`}>
                    <h1>{pokemons.name}</h1>
                    <p>{description}</p>
                    <div className={`${styles.prezInfo}`}>
                        <ul className={`${styles.info}`}>
                            <li>Type: {pokemons.types && pokemons.types.map(type => <p key={uuidv4()}>{type.type.name}</p>)}</li>
                            <li>Weight: { (Math.round(pokemons.weight * 10) / 100).toFixed(2) }kg</li>
                            <li>Height: { (Math.round(pokemons.height * 10) / 100).toFixed(2) }m</li>
                            <li>Base Experience:112</li>
                            <li>Abilities: {pokemons.abilities && pokemons.abilities.map(ab => (<p key={uuidv4()}>{ab.ability.name}{','}</p>))}</li>
                        </ul>
                        <ul className={`${styles.info} list-group`}>
                            {pokemons.stats && pokemons.stats.map(stat => <li className="list-group-item" key={uuidv4()}>{stat.stat.name}: {stat.base_stat}</li>)}
                        </ul>
                    </div>
                </div>
                <div>
                    <ul>
                            {PokeEvolution && PokeEvolution.map(Evolution => <li key={uuidv4()}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${Evolution.id}.gif`} /><p>{Evolution.name}</p></li>)}
                    </ul>
                </div>
            </div>
            </> }
        </div>
        
    );
};

export default pokemonDetails;
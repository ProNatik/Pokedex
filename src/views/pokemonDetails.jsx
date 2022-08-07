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
                    <h2>{pokemons.name}</h2>
                </div>
                <div className={`${styles.info}`}>
                    <p className={`${styles.t_description}`}>Description :</p>
                    <p className={`${styles.description}`}>{description}</p>
                    <div className={`${styles.prezInfo}`}>
                        <ul className={`${styles.ul_caracteristique}`}>
                            <li className={`${styles.li_caracteristique}`}>Type: {pokemons.types && pokemons.types.map(type => (<p key={uuidv4()}>{type.type.name}{','}</p>))}</li>
                            <li className={`${styles.li_caracteristique}`}>Weight: { (Math.round(pokemons.weight * 10) / 100).toFixed(2) }kg</li>
                            <li className={`${styles.li_caracteristique}`}>Height: { (Math.round(pokemons.height * 10) / 100).toFixed(2) }m</li>
                            <li className={`${styles.li_caracteristique}`}>Base Experience:112</li>
                            <li className={`${styles.li_caracteristique}`}>Abilities: {pokemons.abilities && pokemons.abilities.map(ab => (<p key={uuidv4()}>{ab.ability.name}{','}</p>))}</li>
                        </ul>
                        <ul className={`${styles.ul_caracteristique} ${styles.stats} list-group`}>
                            {pokemons.stats && pokemons.stats.map(stat => <li className={`list-group-item ${styles.stats}`} key={uuidv4()}>{stat.stat.name}: {stat.base_stat}</li>)}
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className={`${styles.t_evolution}`}>Evolutions :</h2>
                    <ul className={`${styles.evolutions}`}>
                            {PokeEvolution && PokeEvolution.map(Evolution => (<><li key={uuidv4()}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${Evolution.id}.gif`} /><p>{Evolution.name}</p></li></>))}
                    </ul>
                </div>
            </div>
            </> }
        </div>
        
    );
};

export default pokemonDetails;
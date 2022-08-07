import React from 'react';
import PokemonCard from './pokemonCard';
import styles from '../css/pokemonList.module.css';
import { useState } from 'react';

function PokemonList({ pokemons }) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <form  className={`${styles.form}`}>
        <input placeholder='Search' onChange={(e)=>setSearchValue(e.target.value)}  className={`${styles.search} form-control`}></input>
      </form>
      <div className={`${styles.container}`}>
          <div className='row'>
              {pokemons?.filter((pokemon)=>{
                        if(searchValue==""){
                            return pokemon
                        }else if(pokemon.name.toLowerCase().includes(searchValue?.toLowerCase())){
                            return pokemon
                        }
                    }).map((pokemon) => (
                  <PokemonCard key={pokemon.name} pokemon={pokemon} />
              ))}
          </div>
      </div>
    </>
  );
}

export default PokemonList;
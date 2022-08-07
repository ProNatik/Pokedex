import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToLocalStorage, RemoveToLocalStorage } from '../actions/index';
import styles from '../css/pokemonCard.module.css';
import { getPokemonIdUrl } from "../service/pokeid";
import Swal from 'sweetalert2';

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const pokedex = useSelector(state=>state.pokedex);
  const {url, name} = pokemon;
  const id = getPokemonIdUrl(url);
  const isInLocalStorage = pokedex.find((pokemon)=>
    pokemon.name===name
  );
  const onTagle =()=>{
    console.log("isInLocalStorage in if",isInLocalStorage)
    if(isInLocalStorage){
      Swal.fire({
        title: 'Veux-tu retirer ce pokemon de ton pokedex ?',
        showCancelButton: true,
        cancelButtonText: 'Non',
        confirmButtonText: 'Oui',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(RemoveToLocalStorage({
            name,
            url
          }));
          Swal.fire('Pokemon supprimé', '', 'success')
        };
      })
    }
    else{
        dispatch(AddToLocalStorage({
            name,
            url
        }))
    }

}
  const URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/${id}.png`;
  return (
    <div  className={`col-10 mx-auto col-sm-6 col-lg-3 ${styles.Card_pokemon}`} pokemon={pokemon}>
      <div className={`${styles.img}`}>
        <img src={URL} alt={pokemon.name} />
      </div>
      <div>
        <h3>
          {pokemon.name}
        </h3>
      </div>
        <button onClick={()=>onTagle()} className={isInLocalStorage?`btn btn-danger ${styles.btn}`:`btn btn-success ${styles.btn}`}>{isInLocalStorage?"Remove":"Add"}</button>
        <Link to={`/pokemonDetails/${id}`} className={`btn btn-info ${styles.btn}`}>Details</Link>
    </div>
  );
}

export default PokemonCard;

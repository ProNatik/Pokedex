import { ADD_POKEMON, DELETE_POKEMON } from "../actions/types";
import { setLocalStorage } from "../LocalStorage/LocalStorage";

const initialState = localStorage.getItem("pokedex") ? JSON.parse(localStorage.getItem("pokedex")):[];

export default function PokemonReducer(state = initialState, action) {
  switch(action.type){
    case ADD_POKEMON:
      console.log(action, state)
      if(!state.find((pokemon)=>{
        pokemon.name===action.payload.name;
      })){
        setLocalStorage([...state,action.payload]);
        return [...state,action.payload]
      };
    case DELETE_POKEMON:
      let pokemons = structuredClone(state);
      pokemons.splice(pokemons.findIndex((pokemon)=>{
        pokemon.name===action.payload.name;
      }),1)
      setLocalStorage(pokemons);
      return pokemons
    default:
      return state;
  }
}
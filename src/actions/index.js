/**
 * TOUS LES IMPORTS DES FONCTIONS ET LIBRAIRIES ICI
 */
 import {ADD_POKEMON,DELETE_POKEMON} from "./types";
 /**
  * action creator ayant pour but d'ajouter un pokémon du localStorage
  */
 export function AddToLocalStorage(pokemon){
 
     return {
         type : ADD_POKEMON,
         payload:pokemon
     }
 
 }
 /**
  * action creator ayant pour but de retirer un pokémon du localStorage
  */
 export function RemoveToLocalStorage (pokemon){
     return {
         type : DELETE_POKEMON,
         payload : pokemon
     }
 }
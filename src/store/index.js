import { legacy_createStore, combineReducers } from 'redux';
import PokemonReducer from '../reducers/pokemonRedu';


const rootReducer = combineReducers({
  pokedex:PokemonReducer,
})


const store = legacy_createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(()=>{
//   console.log('le store vient de changer', store.getState());
// })

export default store;

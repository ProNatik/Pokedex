export function getPokemonIdUrl(pokemonUrl){
    let id = Number(pokemonUrl.split('/').reverse()[1])
    return id
}
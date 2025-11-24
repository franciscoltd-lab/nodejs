const { httpClientPlugin: httpClient } = require("../plugins");


const getPokemonById = async ( id ) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const data = await httpClient.get(url);

 return data.name;

//   const resp = await fetch(url);
//   const pokemon = await resp.json();

//   return pokemon.name;
  
  
//   return fetch(url)
//   .then((resp) => resp.json())
// //   .then(() => { throw new Error('Error al obtener el pokemon') })
//   .then((pokemon)=> pokemon.name )
};

module.exports = getPokemonById;

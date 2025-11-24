const { getAge, getUUID } = require("./plugins");

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02 - destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');

// const { buildMakePerson } = require("./js-foundation/05-factory");

const getPokemonById = require("./js-foundation/06-promises");

getPokemonById(200)
  .then((name) => console.table({ name }))
  .catch((err) => console.error("Por davor intente de nuevo"))
  .finally(() => console.log("Proceso terminado"));

//REFERENCIA A FACTORY y USO DE LA MISMA

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = {
//   name: "John",
//   birthdate: "1997-03-21",
// };

// const john = makePerson(obj);

// console.log(john);

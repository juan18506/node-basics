const { getUUID, getAge } = require('./plugins');

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// require('./js-foundation/04-arrow-functions');
// const { makeBuildPerson } = require('./js-foundation/05-factory');
const { getPokemonById } = require('./js-foundation/06-promises');

getPokemonById(4)
  .then( ( pokemon ) => console.log({ pokemon }) )
  .catch( ( error ) => console.error( error ) );

// ! Factory fn | dependency injection
// const buildPerson = makeBuildPerson({ getUUID, getAge });

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = buildPerson( obj );

// console.log( john );

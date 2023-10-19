// import { getUUID, getAge } from './plugins';

// import { emailTemplate } from './js-foundation/01-template';
// import './js-foundation/02-destructuring';
// import { getUserById } from './js-foundation/03-callbacks';
// import './js-foundation/04-arrow-functions';
// import { makeBuildPerson } from './js-foundation/05-factory';
// import { getPokemonById } from './js-foundation/06-promises';
import { buildLogger } from './plugins';

// getPokemonById(4)
//   .then( ( pokemon ) => console.log({ pokemon }) )
//   .catch( ( error ) => console.error( error ) );

const logger = buildLogger('app.js');

logger.log('Hello world');
logger.error('division by 0');

// ! Factory fn | dependency injection
// const buildPerson = makeBuildPerson({ getUUID, getAge });

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = buildPerson( obj );

// console.log( john );

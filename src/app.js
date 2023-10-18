
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
const { getUserById } = require('./js-foundation/03-callbacks');

const id = 1;

getUserById( id, function ( error, user ) {
  if ( error ) {
    throw new Error( error );
  }

  console.log({ user });
});
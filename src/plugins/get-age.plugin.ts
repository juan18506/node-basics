export const getAge = ( birthdate: string ) => {
  if ( !birthdate ) {
    return new Error('bithdate is required');
  }

  // return getAgePlugin( birthdate );
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
}

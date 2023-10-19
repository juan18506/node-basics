// import { getUUID, getAge } from '../plugins';

interface MakeBuildPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const makeBuildPerson = ({ getUUID, getAge }: MakeBuildPersonOptions) => {

  return ({ name, birthdate }: PersonOptions) => {
    
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge( birthdate ),
    }
  }
}

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = buildPerson( obj );

// console.log(john);


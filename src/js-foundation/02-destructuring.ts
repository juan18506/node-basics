
// console.log( process.env.PORT ?? 3000 );

const { SHELL, HOME, LANGUAGE } = process.env;

// console.table({ SHELL, HOME, LANGUAGE });

export const characters: string[] = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [ , , , batman ] = characters;

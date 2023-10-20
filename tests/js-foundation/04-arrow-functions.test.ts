import { getUserById } from '../../src/js-foundation/04-arrow-functions';

describe('js-foundation/04-arrow-functions.ts', () => {

  test('getUserById should return an error if user does not exist', (done) => {

    const id = 10;

    getUserById(id, (err, user) => {

      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done();

    });
  });

  test('getUserById should return John Doe', (done) => {

    const id = 1;

    getUserById(id, (err, user) => {

      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 1,
        name: 'John Doe',
      })

      done();

    });
  });

});
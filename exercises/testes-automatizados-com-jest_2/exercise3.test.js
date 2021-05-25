const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
    };
    
    const findUserById = (id) => {
      return new Promise((resolve, reject) => {
          if (users[id]) {
            return resolve(users[id]);
          };
    
          return reject({ error: 'User with ' + id + ' not found.' });
      });
    };
    
    const getUserName = (userID) => {
      return findUserById(userID).then(user => user.name);
    };
describe("promise asinc/await", () => {
    it("resolve com async/await", async() => {
        expect.assertions(1);
        const data = await getUserName(4);
        return expect(data).toEqual('Mark');
    });
    it("reject async/await", async () => {
        expect.assertions(1);
        try {
            await getUserName(2);
        } catch (error) {
            return expect(error).toEqual({error: 'User with 2 not found.' });
        }
    })
});
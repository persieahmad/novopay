export const Users = [
  {
    id: 0,
    username: 'admin',
    password: 'password'
  },
];

export function dummyLoginAPICall(username: string, password: string) {
  return new Promise((resolve, reject) => {
    for(let data of Users) {
      if(data.username === username && data.password === password) {
        resolve({res: 'Success', msg: 'User found'})
      } else {
        reject({res: 'Error', msg: 'Username/Password invalid'})
      }
    }
  })
}

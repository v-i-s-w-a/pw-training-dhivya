import { User } from './user.ts';

const credentials = new User("Quantum", "12345");
console.log("Calling via object creation");
console.log(credentials.userDetails1());

console.log("------------------------------------------");

console.log("Calling via static method");
console.log(User.userDetails2("Assembly"));

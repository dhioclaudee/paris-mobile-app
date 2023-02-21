import {john} from "./index.js";

const greetings = (fullName) => `Hello ${fullName}`;

let result = greetings(john.fullName);
console.log(result);


//Default Parameter
const login = (username, password = "12345") => {
  return `Username = ${username}, Password = ${password}`;
};

console.log(login("faith ganteng", "paris paling rajin"));

let kalimat6 = `Hallo nama saya ${john.fullName}, umur saya ${john.age} tahun, dan saya tinggal di ${john.address}`;

console.log(kalimat6);
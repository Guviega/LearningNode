const dotenv = require(`dotenv`);
dotenv.config();

const connect = require(`./src/database/connection`);
connect();

// require(`./modules/path`);
// require(`./modules/fs`);
// require(`./modules/http`);
require(`./modules/express`);

// const { Person } = require("./person");
// const person = new Person(`Gustavo`);
// console.log(person.sayMyName());

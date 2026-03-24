const path = require(`path`);

//Basename
console.log(path.basename(__filename));
// Dir name
console.log(path.dirname(__filename));
// File extension
console.log(path.extname(__filename));
// Creating path obj
console.log(path.parse(__filename));
// Join Paths
console.log(path.join(__dirname, `teste`, "teste.html"));

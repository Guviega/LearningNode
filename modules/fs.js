const { error } = require("console");
const fs = require(`fs`);
const path = require(`path`);

//Make dir
fs.mkdir(path.join(__dirname, `teste`), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log(`Pasta criada com sucesso!`);
});

// Write file (Overwrite)
fs.writeFile(
  path.join(__dirname, `teste`, `teste.txt`),
  `Hello Node!`,
  (error) => {
    if (error) {
      return console.log(`Erro: `, error);
    }
    console.log("Arquivo criado com sucesso!");
  },
);

// Append file (Write)
fs.appendFile(
  path.join(__dirname, `teste`, `teste.txt`),
  `Hello World!`,
  (error) => {
    if (error) return console.log(`Erro: `, error);
    console.log(`Sucessful append`);
  },
);

// File read
fs.readFile(
  path.join(__dirname, `teste`, `teste.txt`),
  `utf8`,
  (error, data) => {
    if (error) return console.log(`Erro: `, error);
    console.log(data);
  },
);

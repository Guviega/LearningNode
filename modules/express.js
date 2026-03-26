const express = require(`express`);

const app = express();

app.get(`/home`, (req, res) => {
  res.status(200).send(`Hello Express World`);
});

const users = [
  {
    name: `Gustavo`,
    email: `guviega@gmail.com`,
  },
  { name: `Mabel`, email: `melbf@gmail.com` },
];

app.get(`/users`, (req, res) => {
  res.contentType(`application/html`);
  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}!`);
});

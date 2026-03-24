const http = require(`http`);

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === `/home`) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>home Page</h1>");
  }

  const users = [
    {
      name: `Gustavo`,
      email: `guviega@gmail.com`,
    },
    { name: `Mabel`, email: `melbf@gmail.com` },
  ];

  if (req.url === `/users`) {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta: ${port}!`));

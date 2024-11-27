import http from 'http';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  switch (req.method) {
    case 'PUT':
      res.end(`${req.method}-запрос обработан`);
      break;
    case 'DELETE':
      res.end(`${req.method}-запрос обработан`);
      break;
    default:
      res.statusCode = 405;
      res.end(`${req.method}-запрос не разрешен`);
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

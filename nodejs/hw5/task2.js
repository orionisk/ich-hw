import http from 'http';
import fs from 'fs/promises';

const server = http.createServer(async (_, res) => {
  try {
    throw new Error('Test error for logging');
  } catch (error) {
    await fs.appendFile(
      'errors.log',
      `${new Date().toISOString()} - ${error.message}\n`
    );

    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

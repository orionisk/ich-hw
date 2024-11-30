import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/data', (req: Request, res: Response) => {
  const receivedData = req.body;
  res.json({
    message: 'Data received successfully',
    data: receivedData
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

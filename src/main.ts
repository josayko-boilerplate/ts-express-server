import express, { Request, Response } from 'express';
import { greeting } from './utils/greeting';

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  greeting('World');
});

app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Hello Friends</h1>');
});

import express from 'express';
const app = express();
import cors from 'cors';

// parser
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  const a = 10;
  res.send(a);
});

export default app;

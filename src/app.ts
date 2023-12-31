import express from 'express';
const app = express();
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';

// parser
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/students', StudentRoute);

app.get('/', (req, res) => {
  const a = 10;
  res.send(a);
});

export default app;

import { db } from '../config/db';
import app from './index';

const port = process.env.PORT;

db();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// import express, { Request, Response } from 'express';
// import * as dotenv from 'dotenv';
// dotenv.config();


// const app = express();
// const PORT = 3000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, World!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

import express from 'express';
// import homeRoutes from './routes/homeRoutes';
// import userRoutes from './routes/userRoutes';
// @ts-ignore
import sequelize from './Models/index.ts'; // Import the Sequelize instance
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use('/', homeRoutes);
// app.use('/', userRoutes);

// Sync Sequelize and start server only if sync is successful
sequelize.sync()
  .then(() => {
    console.log('Database connected and synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

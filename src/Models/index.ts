import { Sequelize } from 'sequelize';
// @ts-ignore
import User from './userModel.ts';
import * as dotenv from 'dotenv';

dotenv.config();

// Initialize Sequelize with your PostgreSQL database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // This is required for Supabase
        rejectUnauthorized: false // Allows self-signed certificates
      }
    }
  }
);

sequelize.sync().then(() => {
  console.log('Database & tables created!');
}).catch((error) => {
  console.error('Error synchronizing the database:', error);
});

// Define associations or other setup (if needed in the future)

// Synchronize the User model with the database
sequelize.sync().then(() => {
  console.log('Database & tables created!');
}).catch((error) => {
  console.error('Error synchronizing the database:', error);
});

export default sequelize;
export { User };

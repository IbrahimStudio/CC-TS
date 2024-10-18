import { DataTypes, Model } from 'sequelize';
// @ts-ignore
import sequelize from '../database.ts'; // Import from the new database.ts file

class User extends Model {
  public id!: number;
  public name!: string;
  public surname!: string;
  public username!: string;
  public email!: string;
  public password!: string;
  public geoid!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    geoid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;

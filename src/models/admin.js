import { DataTypes } from 'sequelize'
import { db } from '../db/instance.js'

export const Admin = db.define('Admin', {
  name: DataTypes.STRING,
  code: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
})
import { DataTypes } from 'sequelize'
import { db } from '../db/instance.js'

export const User = db.define('User', {
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
})
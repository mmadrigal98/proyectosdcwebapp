import { Sequelize } from 'sequelize'
import betterSqlite3 from 'better-sqlite3'

export const db = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // Use in-memory SQLite database
  dialectModule: betterSqlite3, // Use better-sqlite3 as the SQLite driver
})

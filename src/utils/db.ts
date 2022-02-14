import { db } from '../db'

export default class DB {
  DB: string;

  constructor(db: string) {
    this.DB = db;
  }
  findMany(page: number, limit: number) {
    return db.query(`SELECT * FROM "${this.DB}"`, undefined, true)
  }

  findById(id: number) {
      return db.query(`SELECT * FROM "${this.DB}" WHERE id=$1`, [id])
  }
}
import { db } from '../db'
import DB from "../utils/db";

interface UserCreateInput{
  name: string;
  email: string;
  password: string
}

class User extends DB{
  constructor() {
    super("USER")
  }

  findOne(email: string) {
    return db.query('SELECT * FROM "USER" WHERE email=$1', [email])
  }

  create({name, email, password}: UserCreateInput) {
    return db.query('INSERT INTO "USER" (name, email, password) VALUES ($1, $2, $3)', [name, email, password])
  }
}

export default new User();
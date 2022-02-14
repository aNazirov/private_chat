import { db } from '../db'
import DB from "../utils/db";

interface ChatCreateInput{
  type: boolean
}

class Participant extends DB{
  constructor() {
    super("PARTICIPANTS")
  }

  create({ type = false }: ChatCreateInput) {
    return db.query('INSERT INTO "CHAT" (type) VALUES ($1)', [type])
  }
}

export default new Participant();
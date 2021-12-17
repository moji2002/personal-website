// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const JSONdb = require("simple-json-db");
const db = new JSONdb("./db/database.json");
import { nanoid } from "nanoid";
const API_KEY = process.env.API_KEY

export default function handler(req, res) {
  if (req.method === "POST" && req.body.email) {
    db.set(nanoid(), { ...req.body, date: Date.now() });

    return res.status(200).send();
  }

  if (req.method === "GET" && req.headers.token === API_KEY) {
    return res.status(200).json(db.JSON());
  }

  return res.status(400).send();
}

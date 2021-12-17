// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const JSONdb = require("simple-json-db");
// const db = new JSONdb("./db/database.json");

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { nanoid } from "nanoid";
const API_KEY = process.env.API_KEY;

export default async function handler(req, res) {
  try {
    if (req.method === "POST" && req.body.email) {
      // db.set(nanoid(), { ...req.body, date: Date.now() });
      await prisma.contact.create({
        data: {
          ...req.body,
          id: nanoid(),
        },
      });
      return res.status(200).send();
    }
    // if (req.method === "GET" && req.headers.token === API_KEY) {
  
    if (req.method === "GET") {
      const result = await prisma.contact.findMany();
      return res.status(200).json(result);
  
      // return res.status(200).json(db.JSON());
    }
  } catch (error) {
    return res.status(400).json(error.message);

  }


  return res.status(400).send();
}

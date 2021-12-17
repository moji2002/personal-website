// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/mongodb";
import Contact from "../../model/Contact";

const API_KEY = process.env.API_KEY;

const handler =async (req, res)=> {

  try {
    if (req.method === "POST" && req.body.email) {
      await Contact.create({ ...req.body });
      return res.status(200).send();
    }
    if (req.method === "GET" && req.headers.token === API_KEY) {

      const result = await Contact.find();
      return res.status(200).json(result);

    }
  } catch (error) {
    return res.status(400).json(error.message);
  }

  return res.status(400).send();
}


export default connectDB(handler)
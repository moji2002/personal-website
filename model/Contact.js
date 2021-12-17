import mongoose from "mongoose";
var Schema = mongoose.Schema;

const contact = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

const Contact = mongoose.model("Contact", contact);

export default Contact;

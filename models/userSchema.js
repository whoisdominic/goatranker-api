const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      unique: false,
    },
    lastName: {
      type: String,
      required: true,
      unique: false,
    },
    votes: [
      {
        category: String,
        artistId: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model("Account1", accountSchema);
module.exports = Account;

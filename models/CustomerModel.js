const mongoose = require("mongoose");
const { Schema } = mongoose;
// const bcrypt = require("bcryptjs");

SALT_WORK_FACTOR = 10;

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  history: {
    type: Array,
    default: [],
  },
});

customerSchema.pre("save", function (next) {
  var user = this;
});

customerSchema.methods.comparePassword = function (candidatePassword, cb) {};

const CustomerModel = mongoose.model("Customer", customerSchema);

module.exports = CustomerModel;

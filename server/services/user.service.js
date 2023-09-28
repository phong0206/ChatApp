const User = require("../models/userModel");

exports.findOneByUsername = async (username) => User.find({ username: username }).lean();

exports.findOneByEmail = async (email) => User.findOne({ email: email }).lean();


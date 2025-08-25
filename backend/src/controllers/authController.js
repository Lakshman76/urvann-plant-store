const bcrypt = require("bcrypt");
const User = require("../models/user");
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
   
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: encryptedPassword,
    });
    await user.save();
    res.send("User created successfully!!");
  } catch (error) {
    res.status(400).send("Failed to create user: " + error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Invalid email or password");
    }
    const isValidPassword = await user.validatePassword(password);
    if (!isValidPassword) {
      throw new Error("Invalid email or password");
    }
    const token = await user.generateJwtToken();
    res.cookie("token", token);
    res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).send("Failed to login user: " + error.message);
  }
};
const logout = async (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("Logout Successful!!");
};

const profile = async (req, res) => {
  res.send(req.user);
};

module.exports = {
  signup,
  login,
  logout,
  profile,
};

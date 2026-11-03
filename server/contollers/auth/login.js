import sendResponse from "../../utils/sendResponse.js";
import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return sendResponse(
        req,
        res,
        400,
        false,
        "Email and password are required.",
      );

    const user = await User.findOne({ email });
    if (!user)
      return sendResponse(req, res, 401, false, "Invalid email or password.");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return sendResponse(req, res, 401, false, "Invalid email or password.");

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION },
    );
    return sendResponse(req, res, 200, true, "Login successful.", {
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default login;

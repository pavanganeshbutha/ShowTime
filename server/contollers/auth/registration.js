import sendResponse from "../../utils/sendResponse.js";
import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return sendResponse(req, res, 400, false, "All fields are required.");

    const existingEmail = await User.findOne({ email });
    if (existingEmail)
      return sendResponse(
        req,
        res,
        400,
        false,
        "Email already exist try with another one.",
      );

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const data = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };
    return sendResponse(
      req,
      res,
      201,
      true,
      "User registered successfully!",
      data,
    );
  } catch (error) {
    return next(error);
  }
};

export default register;

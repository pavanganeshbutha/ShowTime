import mongoose from "mongoose";
import { configDotenv } from "dotenv";

import User from "./models/userModel.js";
import Movie from "./models/movieModel.js";
import Theater from "./models/theaterModel.js";

configDotenv();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // clear existing data
    await User.deleteMany({});
    await Movie.deleteMany({});
    await Theater.deleteMany({});

    const partner = await User.create({
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      password: "password123",
      role: "partner",
    });

    const movie = await Movie.create({
      title: "Inception",
      description: "Dream-sharing corporate espionage thriller.",
      genre: "Sci-Fi",
      rating: 8.8,
      releaseDate: new Date("2010-07-16"),
      language: "English",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESL0fi2HezXKXh8TYAypzy_j6kWNPMoPMOVBLXNeXFA&s=10",
    });

    const theater = await Theater.create({
      name: "PVR Pheonix",
      address: "Phoenix Mall, Lower Parel, Mumbai",
      phone: "+91 9876543210",
      email: "pvr.pheonix@example.com",
      owner: partner._id,
    });

    console.log("Seed completed");
    process.exit(0);
  } catch (error) {
    console.error("Error: ", error.message);
    process.exit(1);
  }
};

seedData();

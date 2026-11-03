import express from "express";
import sendResponse from "./utils/sendResponse.js";

// importing routes
import healthRoute from "./routes/healthRoute.js";
import authRoutes from "./routes/authRoutes.js";

// importing middlewares
import logger from "./middlewares/loggerMiddleware.js";
import errorHandler from "./middlewares/errorHandlerMiddleware.js";

const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/showtime/health", healthRoute);
app.use("/api/showtime/auth", authRoutes);

app.use((req, res) =>
  sendResponse(req, res, 404, false, "route not found.", null),
);

// Global error handler
app.use(errorHandler);

export { PORT };
export default app;

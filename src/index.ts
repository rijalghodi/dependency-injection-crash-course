import express from "express";
import authRoute from "./routes/authRoute";
import userRoute from "./routes/userRoute";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use(userRoute);
app.use(authRoute);

// Start the server
app.listen(PORT, () => {});

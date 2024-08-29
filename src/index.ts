import express from "express";
import userRoute from "./routes/userRoute";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

// Use the user route
app.use(userRoute);

// Start the server
app.listen(PORT, () => {});

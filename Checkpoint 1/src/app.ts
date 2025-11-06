import express from "express";
import postRoute from "./routes/post-route";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/", postRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
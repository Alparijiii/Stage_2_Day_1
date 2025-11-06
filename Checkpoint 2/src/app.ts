import express from "express";
import postRoute from "./routes/product";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/", postRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
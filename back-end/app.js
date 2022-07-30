require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const router = require("./routes/router.js")

const corsOptions = {
  origin: "*"
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

require("dotenv").config();

const items = require("./routes/api/items");

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      j: true,
    },
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

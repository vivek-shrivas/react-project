const express = require("express");
const app = express();
const port = process.env.port || 5000;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.get("/api", (req, res) => {
  res.set("content-type", "application/json");
  const msg = "you are connected to the server on the cloud";
  res.json({ message: msg });
});

app.listen(port, () => {
  console.log(`server running on port  : ${port}`);
});

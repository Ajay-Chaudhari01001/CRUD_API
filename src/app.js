const express = require("express");
// const MensRanking = require("./models/mens");
require("../src/db/conn");
const router = require("../src/routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Connection port no ${port}`);
})
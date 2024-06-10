require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use("/", require("./routes/index"));

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
    console.log(`Server is running on ${process.env.HOSTNAME}:${process.env.PORT}`);
})
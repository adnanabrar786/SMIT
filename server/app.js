const express = require("express")
const app = express();
const port = 5000;
const connectb = require("./database/db")
const adminRouter = require("./routes/adminRouter")

const cors = require('cors')


app.use(express.json());
app.use(cors())

connectb();

app.use("/admin" , adminRouter)

app.get("/", (req, res) => {
    res.send("hello")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
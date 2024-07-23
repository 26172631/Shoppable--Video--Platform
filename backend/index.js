const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors())

app.use("/video",require("./routes/video"));
app.use("/product",require("./routes/product"));
const port = 4000
mongoose.connect("mongodb+srv://shahidkhan199417:Shahid123@form-validate-db.deeidv6.mongodb.net/?retryWrites=true&w=majority&appName=form-validate-db").then(()=>{
    app.listen(port,()=>{
        console.log(`Server listening on ${port}`)
    })
})
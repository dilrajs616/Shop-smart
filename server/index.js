const express = require("express")
const app = express(express())
const cors = require("cors")
app.use(cors())
app.use(express.json())

const PORT = 1322

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.get("/", (req,res)=>{
    res.send("Hello World")
})
const express = require('express')
const cors = require('cors')
cookieParser = require('cookie-parser')
require(`dotenv`).config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connect to DB")
        console.log("server is running")
        console.log(`Server is running on http://localhost:${PORT}`);
    })
})
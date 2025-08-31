import express, { json } from 'express'
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT ;

const app = express()

app.use(cors())
app.use(express.json())


  app.get('/' , (req,res)=>{
    res.send("API working")
  })


app.listen( PORT , ()=>{
console.log(`Server is running on port ${PORT}`);

})
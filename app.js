import express from "express"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"
import {testingRouter} from "./routes/TestingRouter.js";

dotenv.config()
const app = express();
app.use(cors())

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

const PORT = process.env.PORT || 5000
//Authentication
app.use("/", testingRouter);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});










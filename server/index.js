import dotenv from 'dotenv';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

import postRoutes from './routes/posts.js'
import hostRoutes from './routes/hosts.js'
import userRoutes from './routes/users.js'

dotenv.config();

const path = require("path")
const app = express();

const _dirname = path.dirname("")
const buildPath = path.join(_dirname , "../client/build")

app.use(express.static(buildPath))

app.get("/*", function(req, res) {
  res.sendFile(
    path.join(_dirname, "../client/build/index.html"),
    function(err) {
      if(err) {
        res.status(500).send(err);
      }
    }
  )
})

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use(
    helmet({ crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" } })
  );

app.use('/discover', postRoutes);
app.use('/hosts', hostRoutes);
app.use('/user', userRoutes);

app.get("/", (res, req) => {
  res.send("App Is Running")
})

const PORT  = process.env.REACT_APP_PORT || 5000;

mongoose.connect(process.env.REACT_APP_CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((ERROR) => console.log(ERROR))


require('dotenv').config();

const express = require('express');
const cors = require("cors");
const connectDatabase = require("./db");

const app = express();

const port = process.env.PORT || 8081;

// middleware
app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    // Connect Database
    await connectDatabase();

    // Testing routes
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

startServer();

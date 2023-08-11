const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://newuser01:12345@cluster0.7xf1ace.mongodb.net/300361745-renz";
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true   }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })


const bookRouter = require('./routes/route');

app.use('/', bookRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
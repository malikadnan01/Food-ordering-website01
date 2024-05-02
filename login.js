const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true }));

process.on('warning', (warning) => {
    console.warn(warning.message);
});

mongoose.connect('mongodb://localhost:27017/Database', 
{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error("Error in connecting to database:", err);
    });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.post("/log_in", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send("User not found");
        } else {
            if (user.password === password) {
                // Redirect to index.html upon successful login
                return res.redirect('http://127.0.0.1:5500/index.html');
            } else {
                return res.status(401).send("Incorrect password");
            }
        }
    } catch (err) {
        console.log(err); 
        return res.status(500).send("Internal Server Error");
    }
});

app.post("/order", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var totalItems = req.body.totalItems;
    var address = req.body.address;
    var foodItems = [];

    for (let i = 1; i <= totalItems; i++) {
        foodItems.push(req.body[`foodItem${i}`]);
    }

    var orderData = {
        "name": name,
        "email": email,
        "phone": phone,
        "totalItems": totalItems,
        "address": address,
        "foodItems": foodItems
    };

    db.collection('orders').insertOne(orderData, (err, result) => {
        if (err) {
            console.error("Error adding order:", err);
            return res.status(500).send("Error adding order");
        }
        console.log("Order added successfully");
        res.redirect('http://127.0.0.1:5500/index.html');
    });
});

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('login.html');
});

app.listen(3002, () => {
    console.log("Listening on port 3002"); // Corrected the port number in the log message
});

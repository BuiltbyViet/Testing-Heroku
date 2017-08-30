var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var customers = [{
        customerName: "Kristin",
        customerEmail: "khenno@uci.edu",
        customerID: "khenno",
        phoneNum: "805382888"
    },
    {
        customerName: "Taylor",
        customerEmail: "taylor@uci.edu",
        customerID: "taylor",
        phoneNum: "7384937463"

    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api", function(req, res){
     res.json(customers);
})



app.post("/api/new", function(req, res) {
    var newCustomer = req.body;
    // newCustomer.customerID = newCustomer.CustomerName.replace(/\s+/g, "").toLowerCase();

    console.log(newCustomer);

    customers.push(newCustomer);

    res.json(newCustomer);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
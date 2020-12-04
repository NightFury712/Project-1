var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var mysql = require('mysql');
var store;

//lang nghe port 3000
app.listen(3000, () => {
    console.log("hello nodejs running on port 3000")
})

//su dung cac file tinh nhu css/js/img
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//cau hinh file ejs
app.set("view engine", "ejs");
app.set("views", "./views")

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'tracnghiem'
});

//ket noi database
var connect = () => {
    connection.connect(function(err) {
        if(!err) {
            console.log("Database is connected!!!");
        } else {
            console.log("Database is error")
        }
    });
}

//ngat ket noi database
var closeDB = function() {
    connection.end(function(err) {
        if(!err) {
            console.log("closed db")
        }
    });
}

//truy van du lieu va hien thi ra trang web
app.get("/home", function(req, res) {
    connect();
    connection.query("select * from test1 limit 1", function(err, results, fields) {
        if(!err) {
            res.render("home", {data: results})
        } else {
            console.log(err);
        }
    });
});

app.get("/test1", function(req, res) {
    connect();
    connection.query("select * from test1 limit 10", function(err, results, fields) {
        if(!err) {
            res.render("home1", {data: results})
        } else {
            console.log(err);
        }
    });
});

app.get("/getdata1", function(req, res) {
    connection.query("select * from test1 limit 10", function(err, results, fields) {
        if(!err) {
            res.json(results)
        } else {
            console.log(err);
        }
    });
});

app.get("/getdata2", function(req, res) {
    connection.query("select * from test1", function(err, results, fields) {
        if(!err) {
            res.json(results)
        } else {
            console.log(err);
        }
    });
});

app.get("/getdata3", function(req, res) {
    connection.query("select * from test1 limit 10 offset 20", function(err, results, fields) {
        if(!err) {
            res.json(results)
        } else {
            console.log(err);
        }
    });
});

app.get("/getResult", function(req, res) {
    connection.query("select Result from test1", function(err, results, fields) {
        if(!err) {
            res.json(results)
        } else {
            console.log(err);
        }
    });
});

app.get("/test", (req, res) => {
    res.render("test.ejs");
})

app.post("/postTime", (req, res) => {
    var date = req.body.date;
    console.log("insert into timestart(time) values " + "'" + date + "'");
    connection.query("insert into timestart(time) values " + "('" + date + "')", (err, results, fields) => {
        if(err) {
            console.log(err);
        }
    });
})
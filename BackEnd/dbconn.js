const express = require("express");
const app = express();
var mysql = require("mysql");
var session = require("express-session");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

cors = require("cors");

app.use(cors());

var connection = mysql.createPool({
    host: "necro.mysql.database.azure.com",
    user: "giannisxristodou@necro",
    password: "Giannis007",
    database: "portofolio",
    port: '3306'
});

connection.getConnection(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }

    console.log("Connected as id " + connection.threadId);
});

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

const secretToken = "aaqaqqaqaqaqqaq";
// app.get('/', function (request, response) {
//     response.sendFile(path.join(__dirname + '/login.html'));
// });

app.post("/auth", function (request, response) {
    var email = request.body.email;
    var password = request.body.password;
    console.log(email)
    if (email && password) {
        connection.query(
            "SELECT * FROM accounts WHERE email = ? AND password = ?",
            [email, password],
            function (error, results, fields) {
                if (results.length>0) {
                    const accessToken = jwt.sign({
                            email: email,
                        },
                        secretToken
                    );
                    request.session.email = email;

                    response.json({
                        email,
                        accessToken,
                        auth: true,
                    });
                } else {
                    response.json({
                        message: "Incorrect email or Password!",
                        auth: false,
                    });
                }
                response.end();
            }
        );
    } else {
        response.json({
            message: "Please fill username and password",
            auth: false,
        });
        response.end();
    }
});

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        //console.log(token)
        jwt.verify(token, secretToken, (err, user) => {
            if (err) {
                console.log("error");
                return res.json({
                    valid: false,
                });
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.get("/verifyJwt", authenticateJWT, function (req, res) {
    res.json({
        valid: true,
    });
});

app.get("/Folders",function (request, response){
    var path = request.query.Path
  
    connection.query("SELECT * FROM Folders WHERE path=?",
    [path],
    function(error, results, fields){
        response.json(results)
    }
    )

})

app.listen(3001);
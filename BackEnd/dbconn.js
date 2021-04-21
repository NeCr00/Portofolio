const express = require("express");
const app = express();
var mysql = require("mysql");
var session = require("express-session");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(fileUpload());
app.use(express.static("Files"));

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "portofolio",
  port: "3307",
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

app.post("/auth", function (request, response) {
  var email = request.body.email;
  var password = request.body.password;
  console.log(email);
  if (email && password) {
    connection.query(
      "SELECT * FROM accounts WHERE email = ? AND password = ?",
      [email, password],
      function (error, results, fields) {
        if (results.length > 0) {
          const accessToken = jwt.sign(
            {
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

app.get("/Folders", function (request, response) {
  var path = request.query.Path;

  connection.query(
    "SELECT * FROM Folders WHERE path=?",
    [path],
    function (error, results, fields) {
      response.json(results);
    }
  );
});

app.post("/NewFolder", (req, res) => {
  var path = req.body.path;
  var name = req.body.name;

  connection.query(
    "SELECT * FROM folders WHERE path=? AND name=?",
    [path, name],
    function (error, results) {
      if (results && results.length > 0) res.send("This name already exists");
      else {
        connection.query(
          "INSERT INTO folders (name,path)  VALUES (?,?)",
          [name, path],
          function (err, results) {
            if (err) throw err;
            res.send("Successful");
          }
        );
      }
    }
  );
});

app.get("/Files", function (request, response) {
  var path = request.query.Path;
  connection.query(
    "SELECT * FROM files WHERE path=?",
    [path],
    function (error, results, fields) {
      response.json(results);
    }
  );
});

app.post("/upload", (req, res) => {
  if (!req.files) {
    res.send("Not Found");
  }
  // accessing the file
  const myFile = req.files.file;
  const name = req.files.file.name.split(".");
  const type = name.pop();
  const path = req.body.path;

  console.log(path);

  //  mv() method places the file inside public directory
  myFile.mv(`${__dirname}/Files/${myFile.name}`, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "Error occured" });
    }
  });

  connection.query(
    "SELECT id FROM folders Where path =?",
    [path],
    function (error, results) {
      if (results) var id = JSON.parse(JSON.stringify(results[0].id));

      connection.query(
        "INSERT INTO files (name,type,path) VALUES (?,?,?)",
        [name, type, path],
        function (error, results) {
          if (error) console.log(error);
        }
      );
    }
  );
  res.send("success");
});

app.get("/SearchResults", function (request, response) {
  var searchInput = request.query.searchInput;
  console.log(request)
  connection.query(
    "Select * from files WHERE name LIKE '%" + searchInput + "%'",
    function (error, results) {
      if (error) console.log(error);
      else response.json(results);
    }
  );
});


app.get("/DownloadFiles",function (request, response) {
  console.log(1)
  const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  response.send(url);

})

app.listen(3001);

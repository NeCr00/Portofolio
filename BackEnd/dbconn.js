const express = require('express')
const app = express()
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

cors = require("cors");

app.use(cors());




var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodelogin',
    port:'3307'
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', function (request, response) {
//     response.sendFile(path.join(__dirname + '/login.html'));
// });

app.post('/auth', function (request, response) {
    var email = request.body.email;
    var password = request.body.password;
    if (email && password) {
        connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                const secretToken = email+password;
                const accessToken = jwt.sign({email:email},secretToken)
                request.session.email = email
                
                response.json({email,accessToken,auth:true});
            } else {
                response.json({message:'Incorrect email or Password!',auth:false});
            }
            response.end();
        });
    } else {
        response.json({message:'Please fill username and password',auth:false});
        response.end();
    }
});

app.post('/', function (request, response) {
        response.send('Welcome back, ' + request.session.email + '!');
    console.log(request.body.email)
});

app.listen(3001);
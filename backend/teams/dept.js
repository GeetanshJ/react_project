var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('./db_teams.js');

db.connect(function(err) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }

    console.log('Connected to database');
});
app.use(session({secret:"123!@#"}));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render('home')
});

app.get('/listdept', function(req, res) {
    db.query('SELECT * FROM departments', function(err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        console.log('Result from the database:', result); // Add this line to log the result

        res.render('listdept', { result: result });
    });
});



app.get('/adddep',function(req,res){
    db.query("select * from departments",function(err,result){
        res.render('adddep',{result:result});
    })
});


app.post('/adddep_submit', function(req, res) {
    let { ename, add1, dob, salary, deptid } = req.body;
    let cdate = new Date();
    let month = cdate.getMonth() + 1;
    let doj = cdate.getFullYear() + "-" + month + "-" + cdate.getDate();
    let sql = "INSERT INTO departments (dname) VALUES ('" + dname + "')";

    db.query(sql, function(err, result) {
        if (result.insertId > 0) {
            res.redirect('/listdep');
        }
    });
});



// app.get('/editemp',function(req,res){
//     let empid = req.query();
//     db.query("select * from emp where empid="+empid,function(err,empdata){
//         db.query("select * from emp data",function(err,deptdata){
//             res.render('editemp',{editemp:editemp,deptdata:deptdata})
//         })
//     })
// })

app.listen(8000,function(){console.log("at 8000")});
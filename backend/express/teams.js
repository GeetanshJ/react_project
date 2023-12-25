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

app.get('/listemp', function(req, res) {
    db.query('SELECT * FROM emp', function(err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        console.log('Result from the database:', result); // Add this line to log the result

        res.render('listemp', { result: result });
    });
});



app.get('/addemp',function(req,res){
    db.query("select * from departments",function(err,result){
        res.render('addemp',{result:result});
    })
});


app.post('/addemp_submit', function(req, res) {
    let { ename, add1, dob, salary, deptid } = req.body;
    let cdate = new Date();
    let month = cdate.getMonth() + 1;
    let doj = cdate.getFullYear() + "-" + month + "-" + cdate.getDate();
    let sql = "INSERT INTO emp (ename, add1, dob, doj, salary, deptid) VALUES ('" + ename + "','" + add1 + "','" + dob + "','" + doj + "','" + salary + "','" + deptid + "')";

    db.query(sql, function(err, result) {
        if (result.insertId > 0) {
            res.redirect('/listemp');
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
    let { dname } = req.body;

    let sql = "INSERT INTO departments (dname) VALUES ('" + dname + "')";

    db.query(sql, function(err, result) {
        if (result.insertId > 0) {
            res.redirect('/listdept');
        }
    });
});














app.get('/addprojects',function(req,res){
    db.query("select * from projects",function(err,result){
        res.render('addprojects',{result:result});
    })
});


app.post('/addprojects_submit', function(req, res) {
    let {project_name,project_description,languages_used } = req.body;

    let sql = "INSERT INTO projects (project_name,project_description,languages_used) VALUES ('" + project_name+ "','" + project_description+ "','" + languages_used+ "')";

    db.query(sql, function(err, result) {
        if (result.insertId > 0) {
            res.redirect('/listprojects');
        }
    });
});


app.get('/listprojects', function(req, res) {
    db.query('SELECT * FROM projects', function(err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        console.log('Result from the database:', result); // Add this line to log the result

        res.render('listprojects', { result: result });
    });
});















app.get('/listservices', function(req, res) {
    db.query('SELECT * FROM services', function(err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        console.log('Result from the database:', result); // Add this line to log the result

        res.render('listservices', { result: result });
    });
});



app.get('/addservices',function(req,res){
    db.query("select * from services",function(err,result){
        res.render('addservices',{result:result});
    })
});


app.post('/addservice_submit', function(req, res) {
    let { service_name } = req.body;

    let sql = "INSERT INTO services (service_name) VALUES ('" + service_name + "')";

    db.query(sql, function(err, result) {
        if (result.insertId > 0) {
            res.redirect('/listservices');
        }
    });
});



















app.get('/listfeedbacks', function(req, res) {
    db.query('SELECT feedback.*, services.service_name from feedback join services on services.service_id = feedback.service_id', function(err, result) {
        if (err) {
            console.error('Error querying the database:', err);
            return;
        }

        console.log('Result from the database:', result); // Add this line to log the result

        res.render('listfeedbacks', { result: result });
    });
});



app.get('/addfeedbacks',function(req,res){
    db.query("select * from services",function(err,result){
        res.render('addfeedbacks',{result:result});
    })
});


app.post('/addfeedback_submit', function(req, res) {
    let { client_name,creativity,designing,team_work,feedback } = req.body;
    let sql = "INSERT INTO feedback ( client_name,creativity,designing,team_work,feedback) VALUES ('" + client_name + "','" + creativity + "','" + designing + "','" + team_work + "','" + feedback + "')";

    db.query(sql, function(err, result) {
        if (result.insertId > 0) {
            res.redirect('/listfeedbacks');
        }
    });
});
app.listen(8000,function(){console.log("at 8000")});
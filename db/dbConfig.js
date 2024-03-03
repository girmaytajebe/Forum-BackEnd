require("dotenv").config();
const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
  // socketPath: process.env.SOCKETPATH,
  user: process.env.USERS,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: 10,
});

// const dbconnection = mysql2.createPool({
// 	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
// 	user: "u460728151_girmay",
// 	database: "u460728151_evangadi_forum",
// 	host: "srv1101.hstgr.io",
// 	password: "Forum123456789",
// 	connectionLimit: 10,
// });

// dbconnection.execute("select 'test' ", (err, result) => {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log(result);
// 	}
// });
// CREATE TABLE users (
//     userid INT(20) NOT NULL AUTO_INCREMENT,
//     username VARCHAR(20) NOT NULL,
//     firstname VARCHAR(20) NOT NULL,
//     lastname VARCHAR(20) NOT NULL,
//     email VARCHAR(48) NOT NULL,
//     password VARCHAR(100) NOT NULL,
//     PRIMARY KEY(userid)
// );
// CREATE TABLE questions (
//     id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     questionid VARCHAR(100) NOT NULL UNIQUE,
//     userid INT(20) NOT NULL,
//     title VARCHAR(50) NOT NULL,
//     description VARCHAR(200) NOT NULL,
//     tag VARCHAR(20),
//     FOREIGN KEY (userid) REFERENCES users(userid)
// );

// CREATE TABLE answers (
//     answerid VARCHAR(100) NOT NULL,
//     userid INT(20) NOT NULL,
//     questionid VARCHAR(100) NOT NULL,
//     answer VARCHAR(200) NOT NULL,
//     PRIMARY KEY (answerid),
//     FOREIGN KEY (questionid) REFERENCES questions(questionid),
//     FOREIGN KEY (userid) REFERENCES users(userid)
// );

// CREATE TABLE answers (
//     answerid INT(20) NOT NULL AUTO_INCREMENT,
//     userid INT(20) NOT NULL,
//     questionid VARCHAR(100) NOT NULL,
//     answer VARCHAR(200) NOT NULL,
//     PRIMARY KEY (answerid),
//     FOREIGN KEY (questionid) REFERENCES questions(questionid),
//     FOREIGN KEY (userid) REFERENCES users(userid)
// );

module.exports = dbconnection.promise();

//the correct table

// CREATE TABLE users(
// userid INT(20) NOT NULL AUTO_INCREMENT,
// username VARCHAR(20) NOT NULL,
// firstname VARCHAR(20) NOT NULL,
// lastname VARCHAR(20) NOT NULL,
// email VARCHAR(40) NOT NULL,
// password VARCHAR(100) NOT NULL,
// PRIMARY KEY (userid)
// );
// CREATE TABLE questions (
//     id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     questionid VARCHAR(100) NOT NULL UNIQUE,
//     userid INT(20) NOT NULL,
//     title VARCHAR(50) NOT NULL,
//     description VARCHAR(200) NOT NULL,
//     tag VARCHAR(20),
//     FOREIGN KEY (userid) REFERENCES users(userid)
// );
// CREATE TABLE answers(
// answerid INT(20) NOT NULL AUTO_INCREMENT,
// userid INT(20) NOT NULL,
// questionid VARCHAR(100) NOT NULL,
// answer VARCHAR(200) NOT NULL,
// PRIMARY KEY(answerid ),
// FOREIGN KEY(questionid) REFERENCES questions(questionid),
// FOREIGN KEY(userid) REFERENCES users(userid)
// );





const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vishal2005',
    database: 'contact_manager',
});

db.connect((err) => {
    if (err) {
        console.log('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});

module.exports = db;

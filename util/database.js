const mysql = request('mysql2');

const pool = mysql.createpool({
    host: 'localhost',
    user: 'root',
    database: 'sakila',
    password: '10509037@Niha'
});

module.exports = pool.promise();
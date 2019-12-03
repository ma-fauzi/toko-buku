const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 4000;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'toko_buku'
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    const ALL_BOOK = `SELECT * FROM buku_index`;
    connection.query(ALL_BOOK, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})
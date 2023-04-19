// Express import and app
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();
const app = express()
const port = 8800
const hostName = 'localhost'


// Connect to MySQL db

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.VITE_DBUSER,
    password: process.env.VITE_DBPASS,
    database: process.env.VITE_DBNAME,
})

// Express server middleware; allows use to send JSON file using the client
app.use(express.json())
app.use(cors())

// Connect to backend server
app.get("/", (req, res) => {
    res.send(`Hello, this is the backend. process.env.VITE_DBPASS`);
})

// SELECT all sernums
app.get("/sernums", (req, res) => {
    const q = "SELECT * FROM sernums";
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

/****************************************************************************************
// INSERT a pokemon
app.post("/pokemon", (req, res) => {
    const q = "INSERT INTO pokemon (`name`, `type`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.type,
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Book has been created successfully!")
    })
})

// UPDATE pokemon with specific id
app.put("/pokemon/:id", (req, res) => {
    const monId = req.params.id
    const q = "UPDATE pokemon SET `name` = ?, `type` = ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.type,
    ]

    db.query(q, [...values, monId], (err, data) => {
        if(err) return res.json(err)
        return res.json("Book has been updated successfully!")
    })
})

// DELETE pokemon with specific id
app.delete("/pokemon/:id", (req, res) => {
    const monId = req.params.id
    const q = "DELETE FROM pokemon WHERE id = ?"

    db.query(q, [monId], (err, data) => {
        if(err) return res.json(err)
        return res.json("Book has been deleted successfully!")
    })
})
***********************************************************************************/

app.listen(port, (err) => {
    if(err) {
        console.log("Error in server setup")
    }
    console.log("Listening on port", port)
});

//export {pool}18:23
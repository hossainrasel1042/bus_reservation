const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, 
    }
});

app.use(bodyParser.json());
app.use(cors());

app.post("/register", async (req, res) => {
    const { username, password, email, phone_number } = req.body;

   
    const userCheck = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (userCheck.rows.length > 0) {
        return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    await pool.query(
        "INSERT INTO customer (username, password, email, phone_number) VALUES ($1, $2, $3, $4)",
        [username, hashedPassword, email, phone_number]
    );

    res.status(201).json({ message: "User registered successfully!" });
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const result = await pool.query("SELECT * FROM customer WHERE username = $1", [username]);
    const user = result.rows[0];

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.uuid, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: "Login successful", token });
});

function verifyToken(req, res, next) {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = decoded; 
        next();
    });
}

app.get("/profile", verifyToken, async (req, res) => {
    const user = await pool.query("SELECT username, email FROM users WHERE uuid = $1", [req.user.userId]);
    res.json(user.rows[0]);
});
app.put("/update", verifyToken, async (req, res) => {
    try {
        const { currentPassword, newPassword, newPhoneNumber } = req.body;

        const userResult = await pool.query("SELECT * FROM customer WHERE uuid = $1", [req.user.userId]);
        const user = userResult.rows[0];

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid current password" });
        }

        if (!newPassword && !newPhoneNumber) {
            return res.status(400).json({ message: "No new information provided to update" });
        }

        const updates = [];
        if (newPassword) {
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);
            updates.push({ column: 'password', value: hashedNewPassword });
        }
        if (newPhoneNumber) {
            updates.push({ column: 'phone_number', value: newPhoneNumber });
        }

        for (const update of updates) {
            await pool.query(
                `UPDATE customer SET ${update.column} = $1 WHERE uuid = $2`,
                [update.value, req.user.userId]
            );
        }

        res.json({ message: "Information updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

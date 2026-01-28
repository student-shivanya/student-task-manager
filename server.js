const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const DATA_FILE = path.join(__dirname, 'data', 'tasks.json');

app.use(express.json());
app.use(express.static('public'));


app.get('/tasks', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    res.json(data);
});


app.post('/tasks', (req, res) => {
    const newTask = req.body.task;
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    data.push(newTask);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.status(201).json({ message: "Task added!", tasks: data });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
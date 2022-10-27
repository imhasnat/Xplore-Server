const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const seletedData = courses.find(course => course.category_id == id);
    res.send(seletedData);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const seletedData = courses.find(course => course._id == id);
    res.send(seletedData);
})


app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
})
import express from "express"
import mongoose from "mongoose"
import { Employee } from "./models/employees.js";
import { names, languages, cities, randomItem } from "./data/data.js"


await mongoose.connect('mongodb://127.0.0.1:27017/company2');

const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', { foo: 'FOO' });
})
app.get('/generate', async (req, res) => {

    await Employee.deleteMany({})
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: randomItem(names),
            salary: Math.floor(Math.random()*22000),
            language: randomItem(languages),
            city: randomItem(cities),
            isManager: Math.random() > 0.5 ? true : false
        })
        console.log(e)
    }
    res.render('index.ejs', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
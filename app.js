const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const taskRouter = require('./routes/task')
const connectDB = require('./db/connect')
const notFound = require('./middleware/route-middleware')
const errorHandler = require('./middleware/error-handler')
const port = process.env.PORT || 3000


const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, (req, res) => {
            console.log('App is listening on Port 3000');
        })

    } catch (error) {
        console.log(error)
    }
}

//Middleware
app.use(express.json())
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Home Page');
// })

app.use('/api/vi/tasks', taskRouter);

//Not found middleware
app.use(notFound)
app.use(errorHandler)
start()
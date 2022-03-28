const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
            //useCreateIndex: true,
            //useFindAndModify: false,
    })
}

/*
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
        //useCreateIndex: true,
        //useFindAndModify: false,
}).then(() => {
    console.log('Connected to the db...')
}).catch((err) => console.log(err))

*/

module.exports = connectDB;
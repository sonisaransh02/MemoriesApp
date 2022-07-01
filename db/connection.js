const mongoose = require("mongoose");

const DB = 'mongodb+srv://saranshsoni1:saranshsoni01@cluster0.uogyjt7.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true , useFindAndModify: false})
.then(() => console.log("connected to mongodb server"))
.catch((error) => console.log(error))

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db')
})

mongoose.connection.on('error', (err) => {
    console.log(err.message)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected.')
})

process.on('SIGINT', async () => {    // SIGINT will trigger when you click ctrl+c to close the server
    await mongoose.connection.close()
    process.exit(0)
})

//server ci run

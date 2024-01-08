require('dotenv').config()


const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const alarmRoutes = require('./routes/alarmStatus')
const alarmControllers = require('./controllers/alarmControllers');



const app = express()
app.use(cors());
//routes
app.use('/api/alarmStatus',alarmRoutes)

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})


//connnect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.set('db', mongoose.connection);
    const alarmStatusDb = mongoose.connection.useDb('alarmStatus');
    const alarmsCollection = alarmStatusDb.collection('lockedStatus');

    // Initialize change stream setup here
    alarmControllers.setUpChangeStream(alarmsCollection);
    
    app.listen(process.env.PORT,() => {
        console.log('listening on port and connected to db', process.env.PORT)
    })
}).catch((error) => {console.log(error)})




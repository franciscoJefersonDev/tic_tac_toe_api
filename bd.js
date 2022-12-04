const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://francisco:devFrancisco2004@cluster0.ssul8mw.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;

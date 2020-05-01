const mongoose = require('mongoose');
const connString = 'mongodb+srv://skiptrack:skiptrack@cluster0-la06s.mongodb.net/skippingtracker?retryWrites=true&w=majority'


const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(connString,{
            useNewUrlParser: true,
            useCreateIndex:true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }

}



module.exports = connectDB;
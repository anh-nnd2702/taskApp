const mongoose = require('mongoose');

const connectDB = async (connectionUri) => {

    mongoose.connect(connectionUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.once('open', () => {
        console.log('database connected');
    });

    db.on('error', (error) => {
        console.error('fail to connect database:', error);
    });
}

module.exports = {connectDB};

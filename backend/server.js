import config from './src/config.js';
import app from './src/app.js'
import mongoose from 'mongoose';

const DB = config.DATABASE_URL.replace('<PASSWORD>', config.DATABASE_PASSWORD);


const connectDB = async () => {
    try {
        console.log(DB)
        await mongoose.connect(DB, {
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true,
        });
    } catch (error) {
        console.error(error);
    }
};

connectDB();

mongoose.connection.once('open', async () => {
    app.listen(config.PORT, () => {
        console.log(`LIstening on port: ${config.PORT}`)
    })
})

const mongoose = require('mongoose');

export const connectToDb = async function connectToDb(env: any){
    try {
        console.log(`mongodb://${env.MONGODB_HOST}:${env.MONGODB_PORT}/avia-sales`)
        await mongoose.connect(`mongodb://${env.MONGODB_HOST}:${env.MONGODB_PORT}/avia-sales`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch(ex) {
        console.log(ex);
        process.exit(1);
    }
};

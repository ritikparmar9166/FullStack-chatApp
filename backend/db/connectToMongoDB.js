import mongoose from 'mongoose';

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to mongoDB');
    }catch(err){
        console.log('Error connecting to mongoDB', err.mesage);
    }
};
export default connectToMongoDB;
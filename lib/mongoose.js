import mongoose from 'mongoose';

export default  async function connectDB(){
    try{
       await mongoose.connect(process.env.MONGODB_URI)
       console.log("connected to db")
    }
    catch(err){
        console.log("not connected to db: ",err)
    }
}


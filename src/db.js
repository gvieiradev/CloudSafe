import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://inggabrielvieira:cloudsafe@cloudsafe.cc2lfke.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB is connected")
    } catch (error) {
        console.log(error);
    }
};
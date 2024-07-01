import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MedicAid"
    }).then(()=>{
        console.log("Database Connection Succesful ");
    }).catch((err)=>{
        console.log(`Some Error occurred while connecting to Database: ${err}`);
    })
}
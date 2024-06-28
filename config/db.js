const mongoose=require('mongoose')
const colors=require('colors')

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb ${mongoose.connection.host}`.bgCyan.white)
    } catch (error) {
        console.log(`mongodb connection error ${error}`.bgBlack.white)
    }
}

module.exports=connectDB
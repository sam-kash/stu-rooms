import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
    name : {type: String, required: true},
    capacity : Number,
    amenities : [String],
    isAvailable : {type : Boolean, default : true}
});

export default mongoose.model("Room", roomSchema)
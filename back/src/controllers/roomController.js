import Room from "../models/Room";

export const getRooms = async (req, res) => {
    try{
        const rooms = await Room.find();
        res.json(rooms);
    }catch(error){
        res.status(500).json({
            "message" : "Error fetching rooms"
        })
    }       
}
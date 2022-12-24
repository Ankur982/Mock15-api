const mongoose = require("mongoose");


const TicketSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date :{ 
        type: String , 
        default: new Date().toLocaleDateString()
    }


}, { timestamps: true });


module.exports = mongoose.model("Ticket", TicketSchema);
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    uniformNumber:{
        type: Number,
        required: true
    },
    position:{
        type: String,
        enum: [ "C","1B", "2B", "3B", "SS", "LF", "CF", "RF", "SP", "RP", "CL"]
    },
    
    secondaryPosition:{
        type: String,
        enum: ["None", "C","1B", "2B", "3B", "SS", "LF", "CF", "RF", "SP", "RP", "CL"]
    },
    isCoach: {
        type: Boolean,
        default: false
    },
    teamName: {
        type: String,
        required: true
    },

    bats:{
        type: String,
        enum: ["Left", "Right", "Switch"]
    },

    throws:{
        type: String,
        enum:["Left", "Right", "Ambidextrous"]
    },
    created_date:{
        type: Date,
        default: Date.now
    }
    
})
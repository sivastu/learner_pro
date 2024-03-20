import { Schema, model } from "mongoose";

const WebinarSchema = new Schema({

    name:{
        type : String,
        required : true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    certificateName:{
     type : String,
     reequired: true
    },
    currentPosition:{
        type: String,
        required: true,
        enum:["workingprofessional","lookingforcareer","student"]
    }
})

export const WebinarModel = model("Webinar", WebinarSchema)
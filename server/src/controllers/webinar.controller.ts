import { Elysia, t } from "elysia";
import { WebinarModel } from "../models/Webinar";


export const WebinarController = new Elysia({ prefix: "/webinar" })

.post("/register", 
     async ({body,set}:any ) => {
    const { name, email, phoneNumber, certificateName, currentPosition } = body;
    if(!name || !email || !phoneNumber || !certificateName || !currentPosition) {
        set.status = 400
        return {
            message: "All fields are required",
            ok: false,
        }
    }
    try {
     let studentExists = await WebinarModel.findOne({ phoneNumber });

     if(studentExists){
        set.status = 400
        return {
            message: "Student already exists",
            ok: false,
        }
     }

     const newStudent = new WebinarModel({
         name,
         email,
         phoneNumber,
         certificateName,
         currentPosition
     })

     await newStudent.save();
    
     return {
         message: "Student registered successfully",
         data: newStudent,
         ok:true
     }

    } catch (error : any) {
        set.status = 500
        return {
            message: error.message,
            ok: false
        }
    }   
},
{
    body: t.Object({
        phoneNumber: t.String({
            minLength: 10,
            error: "Invalid phone number",
        }),
        email: t.String({
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            error: "Invalid email",
        }),
        name: t.String({
            error: "Name is required",
        }),
        certificateName: t.String({
            error: "certificateName is required", 
        }),
        currentPosition: t.String({
            error: "currentPosition is required",
            enum:["workingprofessional","lookingforcareer","student"]
        })
    }),
    detail:{
        tags:["Webinar"],
        responses:{
            200:{
                description:"Webinar registration successfully",
                content:{
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string"
                                },
                                data: {
                                    type: "object"
                                },
                                ok: {
                                    type: "boolean"
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}
)

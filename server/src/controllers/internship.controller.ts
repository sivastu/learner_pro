import { Elysia,t } from "elysia";
import { InternshipModel } from "../models/InternShip";
import { fileUpload } from "../lib/files";


export const InternshipController = new Elysia({prefix:"/internship"})

.post("/register",async ({body,set}:any ) => {
    const {name,collegeName,email,fieldofStudy,phoneNumber,areaofInterest,gender,classMode} = body
    if(!name || !collegeName || !email || !fieldofStudy || !phoneNumber || !areaofInterest || !gender || !classMode )
    {
        set.status =  400
        return{
            message:"All fields are required",
            ok:false
        }
    }
    try {
      
        let  existingDetails = await InternshipModel.findOne({phoneNumber})

        if(existingDetails){
            set.status = 400
            return{
                message:"Already registered",
                ok:false
            }
        }
        const intershipDetails = new InternshipModel({
            name,
            collegeName,
            phoneNumber,
            email,
            areaofInterest,
            fieldofStudy,
            gender,
            classMode,
        })    

        await intershipDetails.save();
        return{
            message:"Internship registered successfully",
            ok:true,
            data:intershipDetails
        }
    } catch (error : any) {
        set.status = 409
        return{
            message:error.message,
            ok:false
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
        collegeName: t.String({
            error: "collegeName is required",
        }),
        fieldofStudy: t.String({
            error: "fieldofStudy is required",
        }),
        areaofInterest: t.String({
            error: "areaofInterest is required",
            enum:["python","webdevlopement","ui/uxdesigning"]
        }),
         gender: t.String({
             error: "gender is required",
             enum:["male","female"]
         }),
         classMode: t.String({
             error: "classMode is required",
             enum:["online","offline"]
         }),
       
        
    }),
    detail:{
        tags:["InternShip"],
        responses:{
            200:{
                description:"Internship registration successfully",
                content:{
                    "application/json":{
                        schema:{
                            type:"object",
                            properties:{
                                message:{
                                    type:"string"
                                },
                                data:{
                                    type:"object"
                                },
                                ok:{
                                    type:"boolean"
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
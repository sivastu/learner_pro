import {Schema,model} from "mongoose"

const InternShipSchema = new Schema({
    
 name:{
    type : String,
    required : true
 },
 collegeName:{
    type : String,
    required : true
 },
 email:{
    type : String,
    required : true
 },
 fieldofStudy:{
    type : String,
    required : true
 },
 phoneNumber:{
    type : String,
    required : true
 },
 gender:{
     type : String,
     required : true,
     enum:["male","female"]
 },
 areaofInterest:{
    type : String,
    required : true,
    enum:["python","webdevlopement","ui/uxdesigning"]
 },
 classMode : {
    type : String,
    required : true,
    enum:["online","offline"]
 },
//  image:{
//    type : String,
//    required : true
//  }
})

export const InternshipModel = model("Internship",InternShipSchema)
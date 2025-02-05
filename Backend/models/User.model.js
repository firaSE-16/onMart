import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    googleId: { type: String, unique: true, sparse: true },
    role:{
        type:String,
        default:'user'
    },
    location:{
        type:String,
        default:''

    },
    phone:{
        type:String,
        default:''
    },
    contact:[
        {
            name:{
                type:String
            },
            link:{
                type:String
            }
            
        }
    ],
    profilePic:{
        type:String,
        default:''
    },
    
},{
    timestamps:true
})

const User = mongoose.models.User|| mongoose.model('User',UserSchema)

export default User;
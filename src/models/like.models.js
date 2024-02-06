<<<<<<< HEAD
import mongoose,{Schema} from "mongoose";


const likeSchema= new Schema(
    {
        comment:{
            type:Schema.Types.ObjectId,
            ref:"Comment"
        },
        video:{
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        likedBy:{
            type:Schema.Types.ObjectId,
            ref:"User"
        },
        tweet:{
            type:Schema.Types.ObjectId,
            ref:"Tweet"
        }
    },{timestamps:true}
)

=======
import mongoose,{Schema} from "mongoose";


const likeSchema= new Schema(
    {
        comment:{
            type:Schema.Types.ObjectId,
            ref:"Comment"
        },
        video:{
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        likedBy:{
            type:Schema.Types.ObjectId,
            ref:"User"
        },
        tweet:{
            type:Schema.Types.ObjectId,
            ref:"Tweet"
        }
    },{timestamps:true}
)

>>>>>>> 70857d0b1e22b5a4f500ddec480e2d1b1f768775
export const Like=mongoose.model("Like",likeSchema)
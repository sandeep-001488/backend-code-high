<<<<<<< HEAD
import mongoose,{Schema} from "mongoose";

const tweetSchema= new Schema(
    {
       owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
       } ,
       content:{
        type:String,
        required:true
       }
    },{timestamps:true}
)

=======
import mongoose,{Schema} from "mongoose";

const tweetSchema= new Schema(
    {
       owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
       } ,
       content:{
        type:String,
        required:true
       }
    },{timestamps:true}
)

>>>>>>> 70857d0b1e22b5a4f500ddec480e2d1b1f768775
export const Tweet= mongoose.model("Tweet",tweetSchema)
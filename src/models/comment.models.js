<<<<<<< HEAD
import mongoose,{Schema, schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const commentSchema=new Schema(
    {
         content:{
            type:String,
            required:true 
         },
         video:{
            type:Schema.Types.ObjectId,
            ref:"Video"
         },
         owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
         }
    },{timestamps:true}
)

commentSchema.plugin(mongooseAggregatePaginate)

export const Comment=mongoose.model("Comment",commentSchema)
=======
import mongoose,{Schema, schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const commentSchema=new Schema(
    {
         content:{
            type:String,
            required:true 
         },
         video:{
            type:Schema.Types.ObjectId,
            ref:"Video"
         },
         owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
         }
    },{timestamps:true}
)

commentSchema.plugin(mongooseAggregatePaginate)

export const Comment=mongoose.model("Comment",commentSchema)
>>>>>>> 70857d0b1e22b5a4f500ddec480e2d1b1f768775

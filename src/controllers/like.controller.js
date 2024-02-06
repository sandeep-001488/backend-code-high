import mongoose from "mongoose";
import { Like } from "../models/like.models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";


const toggleVideoLike=asyncHandler(async(req,res)=>{
    const {videoId}=req.params
    // TODO : toggle like on video
})

const toggleCommentLike=asyncHandler(async(req,res)=>{
    const {commentId}=req.params
    // TODO : toggle like on comment
})


const toggleTweetLike=asyncHandler(async(req,res)=>{
    const {tweetId}=req.params
    // TODO toggle like on tweet

})

const getLikedVideos=asyncHandler(async(req,res)=>{
    // get all liked videos
})


export{
    toggleVideoLike,
    toggleCommentLike,
    toggleTweetLike,
    getLikedVideos
}
import { asyncHandler } from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { User } from '../models/user.models.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'



const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation -not empty
  // check if user already exists
  // check for images , check for avatar
  // upload them to cloudinary
  // create user object -create entry in db
  // remove password and refresh tokwn field from response
  // check for user-creation 
  // return response

  const {fullName,email,username,password}=req.body
  console.log(req.body)
   /*  
  if(fullName===""){
    throw new ApiError(400,"full name is required")
  }
  */ // but doing one by one is not a good practice
  if(
    [fullName,email,username,password].some((field)=>
    field?.trim()==="")
  ){
     throw new ApiError(400,"all fields are required")
  }

 const existedUser= await User.findOne({
    $or:[{username},{email}]
  })
  if(existedUser){
    throw new ApiError(409,"user with email or username already exists") 
  }
   console.log(req.files)
  const avatarLocalPath= req.files?.avatar[0]?.path;


  //const coverImageLocalPath= req.files?.coverImage[0]?.path;  // -> we should avoid using such segment when something is not necessary
  let coverImageLocalPath;
  if (req.files && Array.isArray(req.files.
    coverImage) && req.files.coverImage.length>0) {
    
      coverImageLocalPath= req.files.coverImage[0]?.path;
  }
  if(!avatarLocalPath){
    throw new ApiError (400,"Avatar file is required")
  }
  // coverImageLocalPath is not much required

  const avatar=await uploadOnCloudinary(avatarLocalPath)
  const coverImage=await uploadOnCloudinary(coverImageLocalPath)

  if (!avatar) {
    throw new ApiError (400,"Avatar upload is required")
  }

  const user= await User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username:username
  })
  const createdUser=await User.findById(user._id).select(
    "-password  -refreshToken" // which data we don't want
  )
 
  if(!createdUser) {
    throw new ApiError(500,"something went wrong while registering the user")
  }

  return res.status(201).json(
    new ApiResponse(200,createdUser,"user registered successfullly")
  )

})

export {registerUser,}
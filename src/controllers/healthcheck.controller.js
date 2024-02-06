<<<<<<< HEAD
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";


const healthCheck= asyncHandler(async(req,res)=>{
    // TODO:build a health check response that simply returns the OK status as json with a message
})

=======
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";


const healthCheck= asyncHandler(async(req,res)=>{
    // TODO:build a health check response that simply returns the OK status as json with a message
})

>>>>>>> 70857d0b1e22b5a4f500ddec480e2d1b1f768775
export {healthCheck}
class ApiError extends Error {
    constructor(
        statusCode,
        meassge="Something went wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=this.message
        this.success=false
        this.errors=errors

        if(statck){
            this.stack=statck
        }else{

            Error.captureStackTrace(this,this.constructor)
                
            }
        }
    }
export {ApiError}
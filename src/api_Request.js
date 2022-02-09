
const api_Request=async(url,objOption=null,errMsg=null)=>{
    try{
        const response=await fetch(url,objOption);
        if(!response.ok) throw Error('Error Occured');
    }catch(err){
        errMsg=err.message;
    }finally{
        return errMsg;
    }
}

export default api_Request;
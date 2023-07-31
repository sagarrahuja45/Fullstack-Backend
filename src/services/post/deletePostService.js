import Post from "../../models/post";

async function deletePostService(req,res){
    try{
        await Post.deleteOne({
            _id : req.query._id

        })
    }
    catch (error){
        console.log(error)
    }
}

export default deletePostService;

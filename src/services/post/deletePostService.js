import Post from "../../models/post";

async function deletePostService(req,res){
    try{
        const id = req.params.id;
        console.log(id);
        const deletePost = await Post.deleteOne({
            _id : id

        })
        res.status(200).json({message : "deleted"})
        console.log("post deleted")
    }
    catch (err){
        console.log(err)
    }
}

export default deletePostService;

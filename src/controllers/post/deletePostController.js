const Post = require('../model/post')

async function deletePost(req,res){
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

module.exports = {
    deletePost
}
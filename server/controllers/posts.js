import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    const { page } = req.query;
    try {
        const LIMIT = 30;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query
    try {
        const title = new RegExp(searchQuery, 'i');

        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ] });

        res.json( {data: posts} );
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post With That Id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post Deleted Successfully' })
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post With That Id');
    
    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdUpdate(id, {likePost: post.likePost +1}, {new: true})
   
    res.json(updatedPost);
}





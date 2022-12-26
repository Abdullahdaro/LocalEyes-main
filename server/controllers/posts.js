import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import User from "../models/user.js"
import UserModal from "../models/user.js";
import jwt from "jsonwebtoken";

const secret = 'test';


class APIfeatures  {
    constructor(query, queryString){
      this.query = query;
      this.queryString = queryString;
    }
  }

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

export const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json( {message: error.message });
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

export const saveUnsavePost = async (req, res) => {
    const { id } = req.params;

    try {

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`NO post with id: ${id}`)

    if (!mongoose.Types.ObjectId.isValid(req.userId)) return res.status(404).send(`NO user with id: ${req.userId}`)

    const post = await PostMessage.findById(req.params.id);

    const oldUser = await UserModal.findById(req.userId)

    if (!post) {
        return res.status(404).json({message: " Post Not Found"})
    }

    if (oldUser.saved.includes(post._id.toString())) {
        oldUser.saved = oldUser.saved.filter((p) => p.toString() !== post._id.toString())
        post.savedBy = post.savedBy.filter((p) => p.toString() !== req.userId.toString())
        await oldUser.save();
        await post.save();

        return res.status(200).json({
            success: true,
            message: "Post Unsaved"
        });
    } else {
        oldUser.saved.push(post._id)
        post.savedBy.push(req.userId)

        await oldUser.save();
        await post.save();

        return res.status(200).json({
            success: true,
            message: "Post Saved"
        }); 
    } } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
};

/* export const saveUnsavePost = async (req, res) => {
    const { id } = req.params;
    const { email  } = req.body;

    const oldUser = await UserModel.findOne( email );

    console.log("me", oldUser)

    if (!oldUser) {
        return res.json({ message: "Unauthenticated"})
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`NO post with id: ${id}`)

    if (!mongoose.Types.ObjectId.isValid(req.userId)) return res.status(404).send(`NO user with id: ${req.userId}`)

    const user = await User.findById(req.userId)

    console.log("another me", user)

    const post = await PostMessage.findById(req.params.id);

    const myUser = oldUser._id.toString()

    console.log("hello", req.userId, myUser)

    if (!post) {
        return res.status(404).json({message: " Post Not Found"})
    }

    if (user.saved.includes(post._id.toString())) {
        user.saved = user.saved.filter((p) => p.toString() !== post._id.toString())
        post.savedBy = post.savedBy.filter((p) => p.toString() !== req.userId.toString())
        await user.save();
        await post.save();

        return res.status(200).json({
            success: true,
            message: "Post Unsaved"
        });
    } else {
        user.saved.push(post._id)
        post.savedBy.push(req.userId)

        await user.save();
        await post.save();

        return res.status(200).json({
            success: true,
            message: "Post Saved"
        });
    }
}; */


export const getSavedPosts = async (req,res) => {
    const { id } = req.query;

    try {
        const user = await User.findById(req.userId)

        if(!user) {
            const error = new Error("User id is not correct");
            error.status = 403;
            throw error;
        }

        const features = new APIfeatures ( PostMessage.find({ _id : {$in: user.saved}})); 
        const savePosts = await features.query.sort([])

        res.json( {data: savePosts} )
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
};

/* export const addToFavorites = async (req, res) => {
    try {
        const { id: postId } = req.params;
        // const post = req.body;
        const userId = req.userId;
        const userExists = await User.findById(userId);
        if(!userExists) {
            const error = new Error("User id is not correct");
            error.status = 403;
            throw error;
        }

        const favoritesList = await Favorite.findOne({userId});

        if(!favoritesList.posts.include(postId)) {
            await favoritesList.posts.push(postId);
            await favoritesList.save();

        } else {
            const postIndex = favoritesList.posts.findIndex(postId);
            favoritesList.posts.splice(postIndex, 1);
            await favoritesList.save();
        }
        res.status(200).json(favoritesList);

    } catch (err) {
        if(!err.status) {
            err.status = 500;
            err.message = "Database error";
        }
        console.log(err.message || err);
        res.json({message: err.message || err});
    }
}


export const getFavorites = async (req, res) => {
    const userId = res.userId;
    const favorites = await Favorite.findById(userId);
    res.json(favorites.posts.populate("Post Message"));
}
 */
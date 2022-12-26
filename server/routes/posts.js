import express from 'express';
import { getPostsBySearch, getPosts, createPost, getPost, updatePost, deletePost, saveUnsavePost, getSavedPosts} from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router();


router.get('/search', getPostsBySearch);
router.get("/mylist", auth, getSavedPosts)
router.get('/', getPosts);
router.get('/:id', getPost);


router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/mylist', auth, saveUnsavePost);



export default router;
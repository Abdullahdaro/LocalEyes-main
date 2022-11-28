import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const PostDetails = () => {
  const { post, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const { customURL } = useParams();

  return (
    <div>
      <h1>
        {posts.title}
      </h1>
    </div>
  )
}

export default PostDetails
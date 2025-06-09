import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { Container, Typography } from '@mui/material';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2}>Lista de Posts</Typography>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default PostList;

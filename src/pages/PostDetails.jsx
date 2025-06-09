import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) return <CircularProgress sx={{ mt: 4, ml: 4 }} />;

  return (
    <Container>
      <Typography variant="h4" mt={4}>{post.title}</Typography>
      <Typography variant="body1" mt={2}>{post.body}</Typography>
    </Container>
  );
};

export default PostDetails;
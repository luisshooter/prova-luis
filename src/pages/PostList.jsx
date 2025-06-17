import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Button,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Container sx={{ marginTop: 8 }}>
      <Button
        variant="contained"
        startIcon={<HomeIcon />}
        onClick={() => navigate('/')}
        sx={{ marginBottom: 3, backgroundColor: '#1976d2' }}
      >
        Página Inicial
      </Button>

      <Typography variant="h3" align="center" gutterBottom color="primary">
        Lista de Posts
      </Typography>

      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default PostList;

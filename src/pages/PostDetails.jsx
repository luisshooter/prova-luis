import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Stack,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do post:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ marginTop: 10, textAlign: 'center' }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ marginTop: 2 }}>Carregando...</Typography>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="sm" sx={{ marginTop: 10 }}>
        <Typography variant="h6" color="error">Post não encontrado.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 8 }}>
      <Stack direction="row" spacing={2} sx={{ marginBottom: 3 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/post')}
        >
          Voltar para Lista
        </Button>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={() => navigate('/')}
        >
          Página Inicial
        </Button>
      </Stack>

      <Card elevation={4} sx={{ backgroundColor: '#e3f2fd' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom color="primary">
            {post.title}
          </Typography>
          <Typography variant="body1">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostDetails;

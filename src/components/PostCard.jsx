import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: '100%', backgroundColor: '#e3f2fd' }}>
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          {post.title.length > 40 ? post.title.slice(0, 40) + '...' : post.title}
        </Typography>
        <Typography variant="body2">
          {post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          startIcon={<VisibilityIcon />}
          onClick={() => navigate(`/dados/${post.id}`)}
        >
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;

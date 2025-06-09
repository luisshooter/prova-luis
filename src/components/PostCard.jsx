import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dados/${post.id}`);
  };

  return (
    <Card sx={{ margin: 2 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h6" gutterBottom>{post.title}</Typography>
          <Typography variant="body2" color="text.secondary">{post.body}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;

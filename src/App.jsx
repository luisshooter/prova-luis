import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from './context/ThemeContext';

import PostList from './pages/PostList';
import PostDetails from './pages/PostDetails';

function Header() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          Projeto Posts
        </Typography>

        <IconButton color="inherit" onClick={() => navigate('/post')}>
          <ArticleIcon />
        </IconButton>

        <IconButton sx={{ ml: 1 }} color="inherit" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <Container sx={{ textAlign: 'center', marginTop: 10 }}>
      <Typography variant="h3" gutterBottom color="primary">
        Bem-vindo ao Projeto de Posts
      </Typography>
      <Button
        variant="contained"
        startIcon={<ArticleIcon />}
        onClick={() => navigate('/post')}
      >
        Acessar Lista de Posts
      </Button>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/dados/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

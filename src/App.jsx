import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Rating,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E1E2F',
    },
    secondary: {
      main: '#FF6F61',
    },
    background: {
      default: '#0D0D16',
      paper: '#2A2A40',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
    },
    h4: {
      color: '#FF6F61',
    },
  },
});

const App = () => {
  const movies = [
    {
      id: 1,
      title: 'Inception',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description:
        'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      image: 'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',
      rating: 4.9,
    },
    {
      id: 4,
      title: 'Avengers: Endgame',
      description:
        'After the devastating events of Avengers: Infinity War, the Avengers assemble once more in order to reverse Thanos\'s actions and restore balance to the universe.',
      image: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
      rating: 4.9,
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Paper
        style={{
          minHeight: '100vh',
          margin: 0,
          padding: 0,
        }}
        square
      >
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6">Movies</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            {movies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} key={movie.id}>
                <Card
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#3E3E58',
                    border: 'none',
                    height: '100%', // Забезпечуємо рівну висоту для всіх карток
                    display: 'flex',
                    flexDirection: 'column', // Задаємо вертикальний розклад елементів
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={movie.title}
                    height="300"
                    image={movie.image}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                  <CardContent
                    style={{
                      flex: 1, // Розтягуємо контент на всю доступну висоту
                      display: 'flex',
                      flexDirection: 'column', // Розташовуємо елементи вертикально
                      justifyContent: 'space-between', // Забезпечуємо рівномірний простір між елементами
                    }}
                  >
                    <div>
                      <Typography variant="h6" gutterBottom>
                        {movie.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" paragraph>
                        {movie.description}
                      </Typography>
                    </div>
                    <div>
                      <Rating value={movie.rating} readOnly />
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        style={{
                          marginTop: '10px',
                          borderRadius: '20px',
                          padding: '10px',
                          fontWeight: 'bold',
                        }}
                      >
                        LEARN MORE
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default App;

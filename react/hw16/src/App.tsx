import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            My Application
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant='h4' gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>

        <Button variant='contained' onClick={handleClickOpen}>
          Открыть Dialog
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Использовать Material UI?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Это простое диалоговое окно, созданное с помощью Material UI. Вы
              можете закрыть его, нажав на кнопки ниже или кликнув вне диалога.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Отмена</Button>
            <Button onClick={handleClose} variant='contained'>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

export default App;

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar><Link to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >HOME
          </IconButton></Link>
         <Link to="/cadastro"> <Button color="inherit">CADASTRO
         </Button></Link>
         <Link to="/exemplo"> <Button color="inherit">EXEMPLOS
         </Button></Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
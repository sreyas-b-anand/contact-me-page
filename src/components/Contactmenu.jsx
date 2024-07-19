import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import dots from '../assets/dot.jpg';
import mail from '../assets/mail.jpg';
import phone from '../assets/phone.jpg';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IconButton ><img src={dots} alt="menu" style={{height : '35px' , width :'35px' , borderRadius : '50%'}}/></IconButton>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><IconButton><img style={{height : '20px', width:'20px'}} src={phone} alt="ph" /></IconButton>7736736085</MenuItem>
        <MenuItem onClick={handleClose}><IconButton><img style={{height : '20px', width:'20px'}} src={mail} alt='mail'/></IconButton><a href="mailto:sreyas1045@gamil.com" style={{textDecoration : 'none' , fontFamily : 'monospace' , fontWeight : "lighter", color:'gray'}}>Email</a></MenuItem>
        <MenuItem onClick={handleClose}><p style={{fontFamily : 'monospace' , fontWeight : 'bold', padding :0}}>Have a nice day :)</p></MenuItem>
      </Menu>
    </div>
  );
}

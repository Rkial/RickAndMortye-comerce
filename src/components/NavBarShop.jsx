import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Styles from "../styles/Shop.module.css";
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import {useStateValue} from "../StateProvide";

export default function NavBarShop() {
  const [{basket},dispatch]=useStateValue();

  return (

    <AppBar position="static" >
      <Toolbar className={Styles.buscar}>
        <Link to='shop'><p className={Styles.title}>Tienda</p></Link>
        <div className={Styles.grow}/>
        <Link to='checkoutpage'>
        <IconButton aria-label='show cart items' color='inherit'>
          <Badge badgeContent={basket?.length} color='success'>
          <ShoppingCart fontSize='large' className={Styles.carrito} />
          </Badge>
          
        </IconButton>
        </Link>
        

      </Toolbar>
    </AppBar>

  );
}

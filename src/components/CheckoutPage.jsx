import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Styles from "../styles/Shop.module.css";
import { useStateValue } from '../StateProvide';
import { Grid, Typography } from '@mui/material';
import Product from './Product';
import { Box } from '@mui/system';
import NavBarShop from './NavBarShop';
import CheckoutCard from './CheckoutCard';
import Total from './Total';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CheckoutPage = () => {

    const [{ basket }, dispatch] = useStateValue();
    function FormRow() {
        return (
            <React.Fragment>
               
                {basket?.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <CheckoutCard key={item.id} product={item} />
                    </Grid>
                ))}
            </React.Fragment>

        );
    }

    return (
        < >
        <NavBarShop/>
        <div className={Styles.fondo}>
        <Box sx={{ flexGrow: 1, padding: "4rem" }}>
             
            <Grid  container spacing={3}>
                <Grid item xs={12}>
                    <Typography fontFamily="Rampart One, cursive" color='black' align='center' gutterBottom variant='h4'>
                        Carrito
                    </Typography>
                </Grid>
                <Grid xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid xs={12} sm={4} md={3}>
                    <Typography fontFamily="Rampart One, cursive" color='black' align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>          
            </Grid>
        </Box >
        </div>
        </>
    );
};

export default CheckoutPage;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import { menuClasses } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {useStateValue} from "../StateProvide";
import { actionTypes } from '../reducer';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CheckoutCard({ product: { id, name, productType, image, price, rating, description } }) {
  
  const [{basket},dispatch]=useStateValue();

  const removeItem=()=>dispatch({
    type: actionTypes.REMOVE_ITEM,
    id,
    
  })
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            className={menuClasses.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <img src={image}
        height="194"
        alt="Rick"
      />

      <CardActions disableSpacing>

        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton>
          <DeleteIcon fontSize='large' onClick={removeItem}/>
        </IconButton>

      </CardActions>

    </Card>
  );
}

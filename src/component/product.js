"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../store/cart-slice';
import Link from 'next/link';

const Product = (props) => {
    const { id, title, description, price, image } = props
    const item = useSelector(state => state.items.find(item => item.id === id))

    const dispatch = useDispatch()
    const addToCartHandler = () => {
        dispatch(cartAction.addItemToCart(
            { id, title, description, price, image }
        ))
    }
    const removeFromCartHandler = () => {
        dispatch(cartAction.removeItemFromCart(id))
    }

    return (
        <Grid item sx={{width:{xs:"100%", sm:"50%", md:"30%"}}}>
            <Card sx={{ height: "100%", borderRadius:"0.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Link href={`/${id}`} style={{ textDecoration: "none", color:"black" }}>
                    <CardMedia
                        sx={{ height: 140, backgroundSize: "contain" }}
                        image={image}
                        title={`Image for a(n) ${title}`}
                    />
                    <CardContent>
                        <Typography fontSize={24} gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h5" component="h3">
                            ${price}
                        </Typography>
                    </CardContent>
                </Link>


                <CardActions>
                    <Button size="small" onClick={addToCartHandler}>Add</Button>
                    {item && <Typography>{item.quantity}</Typography>}
                    {item && <Button size="small" onClick={removeFromCartHandler}>Remove</Button>}
                </CardActions>
            </Card>
        </Grid >
    )
}

export default Product
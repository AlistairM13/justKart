"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import Link from 'next/link';

const Cart = () => {
    const [totalItems, totalAmount, cartItems] = useSelector(state => [state.totalItems, state.totalAmount, state.items])

    return (
        <Stack paddingTop={4} sx={{ padding: { xs: "0 1rem", sm: "0" } }} direction="column" maxWidth="lg" margin={"auto"}>
            <Typography paddingBottom={2}>
                Total: ${totalAmount.toFixed(2)} Items: {totalItems}
            </Typography>
            <hr />
            {cartItems.map(item =>
                <ItemCard key={item.id} item={item} />
            )}

        </Stack>
    )
}

const ItemCard = ({ item }) => {
    const dispatch = useDispatch()
    const addToCartHandler = () => {
        dispatch(cartAction.addItemToCart(
            { ...item }
        ))
    }
    const removeFromCartHandler = () => {
        dispatch(cartAction.removeItemFromCart(item.id))
    }
    return (
        <Card sx={{ display: 'flex', borderRadius: "1rem", padding: "0.5rem", flexDirection: { xs: "column", sm: 'row' }, margin: "0.5rem 0 1rem" }} >
            <CardMedia
                component="img"
                sx={{ width: { xs: "50%", sm: "20%" },alignSelf:"center", borderRadius: "1rem" }}
                image={item.image}
                alt={`Image of ${item.title}`}
            />
            <CardContent sx={{ flex: 1 }}>
                <Link href={`/${item.id}`} >
                    <Typography component="h2" variant="h5" fontSize={24}>
                        {item.title}
                    </Typography>
                </Link>

                <Typography component="h3" variant="h6" fontSize={20} >
                    ${item.price.toFixed(2)}
                </Typography>
                <Typography variant="subtitle1" fontSize={16} color="text.secondary" paragraph>
                    {item.description}
                </Typography>
                <Stack direction={'row'} alignItems={"center"} gap={2} marginTop={4}>
                    <Button sx={{ fontSize: "16px", textTransform: "none" }} variant='contained'
                        onClick={addToCartHandler}
                    >Add</Button>
                    <Typography>
                        {item.quantity}
                    </Typography>
                    <Button variant='contained' sx={{ fontSize: "16px", textTransform: "none" }}
                        onClick={removeFromCartHandler}
                    >Remove</Button>
                </Stack>
                <Typography variant="h2" fontSize={24} paddingTop={4}>
                    Total: ${item.totalPrice.toFixed(2)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Cart
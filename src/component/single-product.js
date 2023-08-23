"use client"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../store/cart-slice';

const SingleProduct = (props) => {
    const { id, title, description, price, image } = props.product
    const dispatch = useDispatch()
    const item = useSelector(state => state.items.find(item => item.id === id))

    const addToCartHandler = () => {
        dispatch(cartAction.addItemToCart(
            { ...props.product }
        ))
    }
    const removeFromCartHandler = () => {
        dispatch(cartAction.removeItemFromCart(id))
    }
    return (
        <Stack direction={{ xs: 'column', md: 'row' }}>
            <img src={image} className='image' style={{ width: "50%", alignSelf: "center", objectFit: "contain" }} />
            <Stack direction={'column'} justifyContent={'space-between'} paddingLeft={{ md: 4 }}>
                <Stack>
                    <Typography gutterBottom variant="h5" component="h1">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        {price}
                    </Typography>
                    <Typography variant="subtitle1" fontSize={16} color="text.secondary" paragraph>
                        {description}
                    </Typography>
                </Stack>
                <Stack direction={'row'} gap={2} marginTop={4}>
                    <Button onClick={addToCartHandler} sx={{ fontSize: "16px", textTransform: "none" }} variant='contained'>Add Item</Button>
                    {item && <Typography>
                        {item.quantity}
                    </Typography>}
                    {item && <Button onClick={removeFromCartHandler} variant='contained' sx={{ fontSize: "16px", textTransform: "none" }}>Remove Item</Button>}
                </Stack>
            </Stack>
        </Stack>
    )
}
export default SingleProduct
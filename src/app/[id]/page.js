import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SingleProduct from '../../component/single-product';

const SingleProductPage = async ({ params: { id } }) => {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

    return (
        <>
            <CssBaseline />
            <Container sx={{ py: 8 }} maxWidth="lg">
                <SingleProduct key={product.id} product={product} />
            </Container>
        </>
    )
}


export default SingleProductPage


import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Product from '../component/product';

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json()

  return (
    <>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid  container sx={{margin:"0 auto"}} spacing={4} justifyContent={'flex-start'} width={"100%"}>
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
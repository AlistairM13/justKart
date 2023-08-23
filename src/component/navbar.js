"use client"
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItemQuantity = useSelector(state => state.totalItems)
    return (
        <AppBar position="relative">
            <Toolbar sx={{ maxWidth: "1200px", padding: "1rem", width: "100%", margin: "0 auto", display: "flex", justifyContent: "space-between" }} >
                <Typography variant="h6" color="inherit" noWrap>
                    <Link href={"/"} style={{ textDecoration: "none", color: "black", outline: "none" }}>
                        JustKart
                    </Link>
                </Typography>
                <Link href={"/cart"} style={{ position: "relative" }}>
                    <ShoppingCartIcon sx={{ color: "white" }} />
                    <div
                        style={{
                            position: "absolute",
                            fontSize: "0.8rem",
                            top: -10,
                            right: -15,
                            width: "1.2rem",
                            height: "1.2rem",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "black",
                            color:"white"
                        }}
                    >{cartItemQuantity}</div>
                </Link>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar
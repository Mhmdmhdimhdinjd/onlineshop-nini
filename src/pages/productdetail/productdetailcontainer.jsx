import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '/src/redux/reducers/CartReducer';
import Productdetailcomponents from '../../components/productdetails/podectdetailcomponent';
import { Paper, Box, Typography } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footercontaier';


const ProductDetailscontainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, [id]);

    const addToCart = (product) => {

        dispatch(addItem(product))
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (

        <>

            <Navbar />

            <Paper elevation={3} sx={{ borderRadius: '30px' , my:4 }}>
                <Box p={4} color="gray">
                    <Typography>{product.category}</Typography>
                </Box>

                <Productdetailcomponents addToCart={addToCart} product={product} />

            </Paper>

            <Footer />

        </>

    )
}

export default ProductDetailscontainer
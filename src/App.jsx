import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import './styles/style.css'
import Home from "./pages/Home/Home";
import Profile from "/src/pages/profile/Profile";
import Products from "./pages/Products/products";
import Shoppingbasket from "./pages/Shoppingbasket/ShoppingBasket";
import store from "./redux/store";
import PrivateRoute from "./navigation/PrivateRoute";
import Notfound from "./components/Notfound/Notfoundcomponents";
import ProductDetails from "./pages/productdetail/ProductDetails";


const Apptest = () => {







    return (

        <>

            <Provider store={store}>

                <Router>

                    <Routes>

                        <Route path='/onlineshop-nini/' element={<Home />} />

                        <Route path='/onlineshop-nini/Home' element={<Home />} />

                        <Route path="/onlineshop-nini/profile" element={<Profile />} />

                        <Route path="/onlineshop-nini/products" element={<Products />} />

                        <Route path="/onlineshop-nini/product/:id" element={<ProductDetails />}/>


                        <Route path="/onlineshop-nini/Shoppingbasket" element={<PrivateRoute><Shoppingbasket /></PrivateRoute>} />

                        <Route path="/onlineshop-nini/*" element={<Notfound />} />
                    </Routes>

                </Router>
            </Provider>

        </>
    )
}

export default Apptest
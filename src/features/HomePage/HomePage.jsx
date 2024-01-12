import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import Grid from '@mui/material/Unstable_Grid2';
import { fetchProducts, selectProducts, selectLoading, selectError } from '../../redux/slice/productSlice';
import { addProduct, shoppingCartProductsState } from '../../redux/slice/shoppingCart';

import "./home-page.css"

const HomePage = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);


    const shoppingCartProducts = useSelector(shoppingCartProductsState);

    const onClickAddShoppingCart = (product) => {
        const exists = (shoppingCartProducts ?? []).some(productE => productE.id == product.id);
        if(!exists) dispatch(addProduct(product));
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <p>Cargando productos...</p>;
      }

    if (error) {
        return <p>Error al obtener productos: {error}</p>;
    }

    return(
        <div className="home-page-container">
            <h1>Mira nuestros Productos</h1>
            <div className="products-grid">
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid key={product.id}>
                        <ProductCard
                            name={product.name}
                            description={product.description}
                            cost={product.cost}
                            imageUrl={product.imageUrl ?? "/src/assets/default-image.png"}
                            onClickAdd={() => onClickAddShoppingCart(product)}
                        />
                    </Grid>
                ))}               
            </Grid>
            </div>

        </div>
    )
}

export default HomePage;
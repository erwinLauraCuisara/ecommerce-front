import React from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartItem from '../../components/ShoppignCartItem/ShoppingCartItem';
import { deleteProduct, shoppingCartProductsState } from '../../redux/slice/shoppingCart';
import "./shopping-cart.css"

const ShoppingCartList = () => {

    const dispatch = useDispatch();

    const shoppingCartProducts = useSelector(shoppingCartProductsState);
    const totalPrice = useMemo(()=> (
        shoppingCartProducts?.reduce((price, product) => price + product.cost, 0)
    ), [shoppingCartProducts])

    const onClickDelete = (product) => {
        dispatch(deleteProduct(product));
    };

    return (
        <div>
            <h2>Total: {totalPrice} BS.</h2>
            {shoppingCartProducts?.length == 0 && <div>No se han agregado productos aun </div>}
            {shoppingCartProducts?.map(product => (
                <div className="shopping-cart-container">
                    <ShoppingCartItem
                        imageUrl={product.imageUrl ?? "/src/assets/default-image.png"} 
                        name={product.name} 
                        description={product.description} 
                        cost={product.cost}
                        onClickDelete={()=> onClickDelete(product)}
                     />
                </div>
            ))}
        </div>
    )
}

export default ShoppingCartList;

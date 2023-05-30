import { useState, useEffect } from 'react';
import Cart from './Cart';
import Form from './Form';

const CartPage = ({
    cartGoods,
    setCartGoods,
    numberOfGoods,
    deleteGoods,
    togglePopup,
    setTogglePopup,
}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const calculateTotalPrice = cartGoods.reduce((prev, el) => prev + el.price * el.number, 0);
        setTotalPrice(calculateTotalPrice);
    }, [cartGoods]);

    return (
        <div className="page cart-page">
            <Form
                cartGoods={cartGoods}
                setCartGoods={setCartGoods}
                togglePopup={togglePopup}
                setTogglePopup={setTogglePopup}
                totalPrice={totalPrice}
            />
            <Cart
                cartGoods={cartGoods}
                setCartGoods={setCartGoods}
                numberOfGoods={numberOfGoods}
                deleteGoods={deleteGoods}
                totalPrice={totalPrice}
            />
        </div>
    );
};

export default CartPage;

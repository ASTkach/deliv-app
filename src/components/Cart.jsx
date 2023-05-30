import CartItem from './CartItem';

const Cart = ({ cartGoods, setCartGoods, deleteGoods, totalPrice }) => {
    return (
        <div className="goods goods--cart">
            {cartGoods.length === 0 && (
                <h2 className="goods__message">Your shopping cart is empty</h2>
            )}
            <ul className="goods__list goods__list--cart">
                {cartGoods.map((goods) => {
                    return (
                        <CartItem
                            key={goods.id}
                            {...goods}
                            cartGoods={cartGoods}
                            setCartGoods={setCartGoods}
                            deleteGoods={deleteGoods}
                        />
                    );
                })}
            </ul>
            {cartGoods.length > 0 && (
                <h2 className="goods__total-price">Total price: {totalPrice}$ </h2>
            )}
        </div>
    );
};

export default Cart;

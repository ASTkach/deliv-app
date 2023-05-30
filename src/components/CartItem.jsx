import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import React from 'react';

const CartItem = ({ title, image, id, price, number, deleteGoods, cartGoods, setCartGoods }) => {
    const [count, setCount] = useState(number);

    const setGoodsNumber = (num) => {
        const updatedCartGoods = cartGoods.map((goods) => {
            if (goods.id === id) {
                goods.number = num;
            }
            return goods;
        });
        setCartGoods(updatedCartGoods);
    };

    const incrementGoods = () => {
        let inc = count + 1;
        setCount(inc);

        setGoodsNumber(inc);
    };

    const decrementGoods = () => {
        if (number === 1) {
            return;
        }

        let dec = count - 1;
        setCount(dec);

        setGoodsNumber(dec);
    };

    return (
        <li className="goods__item goods__item--cart">
            <img
                className="goods__item-img goods__item-img--cart"
                src={image}
                width="150"
                height="112"
            />
            <div className="goods__item-content">
                <h2 className="goods__item-title">{title}</h2>
                <div className="goods__item-calculation">
                    <div className="goods__item-buttons">
                        <button
                            className="goods__item-button goods__item-button--less"
                            onClick={() => decrementGoods()}
                        >
                            -
                        </button>
                        <span className="goods__item-quantity">{count}</span>
                        <button
                            className="goods__item-button goods__item-button--more"
                            onClick={() => incrementGoods()}
                        >
                            +
                        </button>
                    </div>
                    <span className="goods__item-price">{price * count}$</span>
                </div>
            </div>
            <button
                className="goods__item-delete"
                onClick={() => {
                    deleteGoods(id);
                }}
            >
                <BsTrash className="goods__item-icon" />
            </button>
        </li>
    );
};

export default CartItem;

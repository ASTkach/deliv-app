import { useState, useEffect } from 'react';

const GoodsItem = ({ id, title, image, price, addGoods, cartGoods }) => {
    const [buttonText, setButtonText] = useState('add to Cart');
    const [buttonClass, setButtonClass] = useState('add to Cart');

    useEffect(() => {
        cartGoods.forEach((goods) => {
            if (goods.id === id) {
                changeButtonHandler();
            }
        });
    }, [cartGoods]);

    const changeButtonHandler = () => {
        setButtonText('in the Cart');
        setButtonClass('btn--goods-in-cart');
    };

    return (
        <li className="goods__item goods__item--main">
            <h2 className="goods__item-title">{title}</h2>
            <img className="goods__item-img" src={image} width="200" height="150" />
            <h3 className="goods__item-price">Price: {price}$</h3>
            <button
                className={`${'btn btn--goods ' + buttonClass}`}
                onClick={() => {
                    addGoods(title, image, id, price);
                    changeButtonHandler();
                }}
            >
                {buttonText}
            </button>
        </li>
    );
};

export default GoodsItem;

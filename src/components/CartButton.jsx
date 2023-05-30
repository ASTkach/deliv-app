import { BsCart4 } from 'react-icons/bs';

const CartButton = ({ setCurrentPage, currentPageHandler, cartGoods }) => {
    return (
        <>
            <button
                className="nav__button nav__button--cart"
                onClick={() => currentPageHandler(setCurrentPage('cart'))}
            >
                <BsCart4 className="nav__icon" />
                {cartGoods.length > 0 && <span className="nav__bage">{cartGoods.length}</span>}
            </button>
        </>
    );
};

export default CartButton;

import CartButton from './CartButton';
import HomeButton from './HomeButton';

const Nav = ({ currentPage, setCurrentPage, currentPageHandler, cartGoods }) => {
    return (
        <nav className="nav">
            {currentPage !== 'main' && (
                <HomeButton
                    setCurrentPage={setCurrentPage}
                    currentPageHandler={currentPageHandler}
                />
            )}
            <CartButton
                setCurrentPage={setCurrentPage}
                currentPageHandler={currentPageHandler}
                cartGoods={cartGoods}
            />
        </nav>
    );
};

export default Nav;

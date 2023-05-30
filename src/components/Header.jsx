import Logo from './Logo';
import Nav from './Nav';

const Header = ({ currentPage, setCurrentPage, currentPageHandler, cartGoods }) => {
    return (
        <header className="header">
            <Logo setCurrentPage={setCurrentPage} />
            <Nav
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                currentPageHandler={currentPageHandler}
                cartGoods={cartGoods}
            />
        </header>
    );
};

export default Header;

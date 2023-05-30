import { BiHome } from 'react-icons/bi';

const HomeButton = ({ setCurrentPage, currentPageHandler }) => {
    return (
        <button
            className="nav__button nav__button--home"
            onClick={() => currentPageHandler(setCurrentPage('main'))}
        >
            <BiHome className="nav__icon" />
        </button>
    );
};

export default HomeButton;

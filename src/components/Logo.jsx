import logoImg from './logo.png';

const Logo = ({ setCurrentPage }) => {
    const homePageHandler = (event) => {
        event.preventDefault();
        setCurrentPage('main');
    };

    return (
        <div className="logo">
            <a className="logo__link" href="#" onClick={(event) => homePageHandler(event)}>
                <img className="logo__icon" src={logoImg} alt="logo" width="130" height="43" />
            </a>
        </div>
    );
};

export default Logo;

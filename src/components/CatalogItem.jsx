const CatalogItem = ({ id, title, isActive, addActiveClass, setCategory }) => {
    return (
        <li className="catalog__item">
            <button
                className={isActive ? 'btn btn--catalog active' : 'btn btn--catalog'}
                onClick={() => {
                    addActiveClass(id);
                    setCategory(id);
                }}
            >
                {title}
            </button>
        </li>
    );
};

export default CatalogItem;

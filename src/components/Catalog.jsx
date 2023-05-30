import { useState, useEffect } from 'react';
import CatalogItem from './CatalogItem';

const Catalog = ({ setCategory }) => {
    const [activeCatalogItem, setActiveCatalogItem] = useState('');

    const CatalogItems = [
        { id: 'BuBu-Burgers', title: 'BuBu Burgers' },
        { id: 'Meat-The-Meat', title: 'Meet The Meat' },
        { id: 'Pani-Oladka', title: 'Pani Oladka' },
        { id: 'Turtles-Food', title: 'Turtles Food' },
        { id: 'Sushish-Vuha', title: 'Sushish Vuha' },
    ];

    useEffect(() => {
        setActiveCatalogItem('BuBu-Burgers');
    }, []);

    const addActiveClassHandler = (id) => {
        setActiveCatalogItem(id);
    };

    return (
        <div className="catalog">
            <ul className="catalog__list">
                {CatalogItems.map((item) => {
                    return (
                        <CatalogItem
                            key={item.id}
                            {...item}
                            isActive={activeCatalogItem === item.id}
                            addActiveClass={addActiveClassHandler}
                            setCategory={setCategory}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Catalog;

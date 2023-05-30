import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './config/firebase';
import CartPage from './components/CartPage';
import Header from './components/Header';
import MainPage from './components/MainPage';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('main');
    const [cartGoods, setCartGoods] = useState([]);
    const [goods, setGoods] = useState([]);
    const [category, setCategory] = useState('BuBu-Burgers');
    const [togglePopup, setTogglePopup] = useState('hide');

    const goodsCollectionRef = collection(db, category);

    useEffect(() => {
        getLocalGoods();
    }, []);

    useEffect(() => {
        const getGoods = async () => {
            try {
                const data = await getDocs(goodsCollectionRef);
                const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setGoods(filterdData);
            } catch (err) {
                console.error(err);
            }
        };

        getGoods();
    }, [category]);

    useEffect(() => {
        saveLocalGoods();
    }, [cartGoods]);

    const deleteGoodsHandler = (id) => {
        setCartGoods(cartGoods.filter((goods) => goods.id !== id));
    };

    const addGoodsHandler = (title, image, id, price, number = 1) => {
        const newGoods = {
            title,
            image,
            id,
            price,
            number,
        };
        setCartGoods([newGoods, ...cartGoods]);
    };

    const currentPageHandler = (page) => {
        if (page === 'main') {
            return (
                <MainPage
                    goods={goods}
                    setGoods={setGoods}
                    setCategory={setCategory}
                    cartGoods={cartGoods}
                    addGoods={addGoodsHandler}
                />
            );
        } else {
            return (
                <CartPage
                    cartGoods={cartGoods}
                    setCartGoods={setCartGoods}
                    deleteGoods={deleteGoodsHandler}
                    togglePopup={togglePopup}
                    setTogglePopup={setTogglePopup}
                />
            );
        }
    };

    const getLocalGoods = () => {
        if (localStorage.getItem('goods') === null) {
            localStorage.setItem('goods', JSON.stringify([]));
        } else {
            let goodsLocal = JSON.parse(localStorage.getItem('goods'));
            setCartGoods(goodsLocal);
        }
    };

    const saveLocalGoods = () => {
        localStorage.setItem('goods', JSON.stringify(cartGoods));
    };

    return (
        <div className="App">
            <div className="wrapper">
                <div className={`${'container ' + togglePopup}`}>
                    <Header
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        currentPageHandler={currentPageHandler}
                        cartGoods={cartGoods}
                    />
                    {currentPageHandler(currentPage)}
                </div>
            </div>
        </div>
    );
}

export default App;

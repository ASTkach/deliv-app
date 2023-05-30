import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const Form = ({ cartGoods, setCartGoods, togglePopup, setTogglePopup, totalPrice }) => {
    const [data, setData] = useState({ name: '', email: '', tel: '', address: '' });
    const [toggleForm, setToggleForm] = useState('hide-form');
    const [buttonFormText, setButtonFormText] = useState('Show Order Form');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', setWindowDimension);
        return () => {
            window.removeEventListener('resize', setWindowDimension);
        };
    }, []);

    const goodsCoRef = collection(db, 'Order');

    const setWindowDimension = () => {
        setWindowWidth(window.innerWidth);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        addDoc(goodsCoRef, { data, cartGoods, totalPrice: { totalPrice } })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.message);
            });

        setTogglePopup('');
        setData({ name: '', email: '', tel: '', address: '' });
        setCartGoods([]);
    };

    const handleInputChange = (text, type) => {
        setData({ ...data, [type]: text });
    };

    const closePopup = () => {
        setTogglePopup('hide');
    };

    const toggleFormHandler = (event) => {
        event.preventDefault();
        if (toggleForm === 'hide-form') {
            setToggleForm('show-form');
            setButtonFormText('Hide Order Form');
        } else {
            setToggleForm('hide-form');
            setButtonFormText('Show Order Form');
        }
    };

    return (
        <>
            <div className={`${'popup ' + togglePopup}`}>
                <h2 className="popup__text">Thank you for your order</h2>
                <button className="btn btn--popup" onClick={() => closePopup()}>
                    Close
                </button>
            </div>
            <form className="form" onSubmit={handleFormSubmit}>
                {windowWidth < 651 && (
                    <button
                        className=" btn btn--order"
                        onClick={(event) => toggleFormHandler(event)}
                    >
                        {buttonFormText}
                    </button>
                )}

                <div className={`${'form__body ' + toggleForm}`}>
                    <input
                        className="form__input"
                        type="text"
                        required
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => handleInputChange(e.target.value, 'name')}
                    />
                    <input
                        className="form__input"
                        type="email"
                        required
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => handleInputChange(e.target.value, 'email')}
                    />
                    <input
                        className="form__input"
                        type="tel"
                        required
                        placeholder="Phone"
                        value={data.tel}
                        onChange={(e) => handleInputChange(e.target.value, 'tel')}
                    />
                    <input
                        className="form__input"
                        type="text"
                        required
                        placeholder="Address"
                        value={data.address}
                        onChange={(e) => handleInputChange(e.target.value, 'address')}
                    />
                    <button className="btn btn--submit" type="submit">
                        Order
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;

import Catalog from './Catalog';
import Goods from './Goods';

const MainPage = ({ addGoods, goods, setGoods, setCategory, cartGoods }) => {
    return (
        <div className="page main-page">
            <Catalog setCategory={setCategory} />
            <Goods goods={goods} setGoods={setGoods} cartGoods={cartGoods} addGoods={addGoods} />
        </div>
    );
};

export default MainPage;

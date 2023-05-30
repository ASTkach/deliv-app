import GoodsItem from './GoodsItem';

const Goods = ({ addGoods, goods, cartGoods }) => {
    return (
        <div className="goods">
            <ul className="goods__list goods__list--main">
                {goods.map((goods) => {
                    return (
                        <GoodsItem
                            key={goods.id}
                            {...goods}
                            addGoods={addGoods}
                            cartGoods={cartGoods}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Goods;

import css from './Product.module.css'
import { useSelector, useDispatch } from "react-redux";
import { GoodsSelectors, GoodsActions, CartActions, CartSelectors } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from 'antd'


export const Products = () => {
    const dispatch = useDispatch()


    const { type, id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(GoodsActions.fetchGoods({ id, type }))
    }, [])



    const goods = useSelector(GoodsSelectors.getGoods);
    const goodsStatus = useSelector(GoodsSelectors.getGoodsStatus)
    const cart = useSelector(CartSelectors.getCart)

    const good = goods[0]

    const isGoodInCart = () => {
        const cartItem = cart.find((item) => {
            return item.id === good.id
        })
        return cartItem
    }

    const clickNavigate = () => {
        return navigate(-1)
    }

    const addProdToCart = () => {
        dispatch(CartActions.putFetchCart(good))
    }

    const deleteProdInCart = () => {
        dispatch(CartActions.deleteFetchCart(good))
    }

    const deleteButton = <Button onClick={deleteProdInCart}> Удалить из корзины </Button>
    const addButton = <Button onClick={addProdToCart}> Добавить в корзину </Button>

    if (!id || !type) {
        return <h1>"Продукт не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>
    } else if (goodsStatus === 'loaded') {
        return (
                <div className={css.ProductInfo}>
                    <div>
                        <img src={good.img} alt="ProductPhoto" className={css.img} />
                    </div>
                    <div className={css.Info}>
                        <div className={css.label}>
                            {good.label}
                        </div>
                        <div className={css.price}>
                            {good.price}
                        </div>
                        <div className={css.description}>
                            {good.description}
                        </div>
                        <div>
                        {isGoodInCart() ? deleteButton : addButton}
                        </div>
                    </div>
                </div>
        )  
    }

    return (
        <div>
            Страница продукта загружается. Ожидайте.
        </div>
    )
}
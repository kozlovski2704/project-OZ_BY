import { Link } from "react-router-dom";
import { Input, Badge, Button, Avatar } from 'antd'
import { ShoppingOutlined, ShoppingCartOutlined, UserOutlined, } from "@ant-design/icons"
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { CartSelectors, CartActions } from "../../store";
import css from './Header.module.css'



export const Header = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CartActions.getFetchCart())
    }, [])

    const cart = useSelector(CartSelectors.getCart)

    const cartOnClick = () => {

    }
    return (
        <div className={css.Header}>
            <div>
                <Link to={'/'}>
                <div className={css.logo} />
                </Link>
            </div>
            <div>
                <Input placeholder="Введите название в поиск" />
            </div>
            <div>
                <Link to={'/goods'}>
                    <ShoppingOutlined />
                </Link>
            </div>
            <div>   
                <Badge count={cart.length !== 0 ? cart.length : null} className={css.HeaderBadge} >                   
                    <ShoppingCartOutlined onClick={cartOnClick}/>
                </Badge>
            </div>
        </div>
    )
}
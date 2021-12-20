import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { MenuCategoriesSelectors, MenuCategoriesActions } from "../../store/menuCategoriesSlice";
import { Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import css from "./Menu.module.css"

interface categoriesMap {
  id: string,
  type: string,
  label: string
}

export const MenuCategories = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(MenuCategoriesActions.fetchMenuCategories({}))
  },[])

  const categories = useSelector(MenuCategoriesSelectors.getCategories);
  const status = useSelector(MenuCategoriesSelectors.getCategoriesStatus)
  return (
    <Row>
      <Col span={6}>
        <Menu mode="vertical">
          {status === 'loaded' && categories.map((item: categoriesMap) => {
            return (
              <Menu.Item key={item.id}>
                <Link to={`/categories/${String(item.id)}`}> {item.label} </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Col>
      <Col span={18} className={css.slider}></Col>
    </Row>
    
  );
};

import { MENU_CATEGORIES_ACTIONS } from './constants'
import { MenuCategories, GetDataCategory } from './types'
import { Api } from '../../api'
import { Dispatch } from 'react'

export const getMenuCategories = () => ({ type: MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES })

export const getMenuCategoriesSuccess = (menuCategories: MenuCategories[]) => ({
    type: MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES_SUCCESS,
    payload: menuCategories
})

export const getMenuCategoriesFailure = () => ({ type: MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES_FAILURE })



export const fetchMenuCategories = ({ type }: GetDataCategory) => async(dispatch: Dispatch<any>) => {
    dispatch(getMenuCategories())
    new Api().getDataCategory({ type }).then((data) => dispatch(getMenuCategoriesSuccess(data.categories))).catch(() => dispatch(getMenuCategoriesFailure()))
}















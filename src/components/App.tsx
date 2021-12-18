import { Routes, Route } from 'react-router-dom'
import { MainPage } from './MainPage'
import { CategoriesPage } from './CategoriesPage'
import { ProductsPage } from './ProductsPage'
import { Footer } from './Footer'
import { Header } from './Header'
import { GoodsPage } from './GoodsPage'
import 'antd/dist/antd.css';
import css from './Style.module.css'



export function App() {
  return (
    <div className={css.content}>
      <Header />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/product/:type/:id" element={ <ProductsPage /> } />
        <Route path="/categories/:type" element={ <CategoriesPage /> } />
        <Route path="/goods" element={ <GoodsPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}
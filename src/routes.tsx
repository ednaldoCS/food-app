import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Burgers/'
import PizzasPage from './pages/Pizzas/'
import SorvetesPage from './pages/Sorvetes/'
import DrinksPage from './pages/Drinks/'

import MyCartPage from './pages/MyCart/'
import PaymentPage from './pages/Payment/'



export function AppRoutes() {
  return (
    <Routes>
      <Route path='/'  element={<MainPage />}> 
        <Route path='/'  element={<BurgersPage/>} />
        <Route path='/pizzas'  element={<PizzasPage/>} />
        <Route path='/sorvetes'  element={<SorvetesPage/>} />
        <Route path='/bebidas'  element={<DrinksPage/>} />
      </Route> 
      
      <Route path='cart' element={<MyCartPage/>}/>
      <Route path='payment' element={<PaymentPage/>}/>
    </Routes>
  )
}

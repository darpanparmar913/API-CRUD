import React from 'react'
import Product from './Component/Product/Product.jsx'
import { Route, Routes } from 'react-router'
import AddCart from './Component/AddCart/AddCart.jsx'
import Header from './Component/Header/Header.jsx'
import CardView from './Component/cardView/cardView.jsx'
import BhagvatGita from './Component/BhagvatGita/BhagvatGita.jsx'




function App() {
  return (
	<>
		<Header />	

		<Routes>
			<Route path='/' element={<Product/>}></Route>
			<Route path='/cart' element={<AddCart/>}></Route>
			<Route path='/cardView' element={<CardView/>}></Route>
			<Route path='/bGita' element={<BhagvatGita/>}></Route>
		</Routes>
	</>
  )
}

export default App
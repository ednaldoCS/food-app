import { useCart } from '../../../Hooks/useCart';
import {TableDesktop} from './TableDesktop/'
import {TableMobile} from './TableMobile/'
import { useEffect, useState } from 'react';

export function Table(){
	const [windowWindth, setWindowWidth]=useState(document.documentElement.clientWidth)



	const {cart}=useCart()

	if(cart.length===0){
		return <h1>Ops! Você não tem pedidos pendentes</h1>
	}


	useEffect(()=>{
		function updateTableByWidth(){
			const currentWidth=document.documentElement.clientWidth

			setWindowWidth(currentWidth)
		}

		window.addEventListener('riseze',updateTableByWidth)

		return ()=>{
			window.removeEventListener('riseze', updateTableByWidth)
		}

	},[])


	return(
		<>
			{windowWindth > 768 ? <TableDesktop/> : <TableMobile/>}
		</>
	)
}
import {createContext, ReactNode, useEffect, useState} from 'react'

import {useLocalStorage} from 'react-use'

import { toast } from 'react-toastify'

import { SnackData } from '../Interafces/SnackData';

interface Snack extends SnackData{
	quantity:number,
	subtotal:number
}


interface UpdateCartProps{
	snack: string,
	newQuantity: number
}



interface CartContextProps{
	cart: Snack[]
	addSnackIntoCart: (snack : SnackData)=> void
	removeSnackFromCart: ( snack: Snack) => void
	snackIncrement:( snack:Snack)=>void,
	snackDecrement:( snack:Snack)=>void
}


interface CartProviderProps{
	children:ReactNode
}


export const CartContext=createContext({} as CartContextProps)


export function CartProvider({children} : CartProviderProps){
	const [cart, setCart]=useState<Snack[]>([])
	const [cartInLocalStorage,setCartInLocalStorage]= useLocalStorage<Snack[]>('@food-commerce:cart',[])	

	function saveCartInLocalhost(items : Snack[]){
		setCartInLocalStorage(items)

		setCart(items)
	}


	function addSnackIntoCart(snack: SnackData):void{

		//buscar
		const snackExistInCart=cart &&  cart.find(item=> item.snack=== snack.snack && item.id === snack.id) 

		//atualizar 
		if(snackExistInCart){
			const newCart=cart && cart.map((item)=>{
				if(item.id === snack.id){
					const quantity=item.quantity+1
					const subtotal=item.price*quantity

					return {...item, quantity, subtotal}
				}
 
				return item
			})

			toast.success(`Outro(a) ${snack.snack} ${snack.name} adiconado ao pedido`)

			saveCartInLocalhost(newCart)

			return
		}

		//adidionar

		const newSnack={...snack, quantity:1, subtotal:snack.price}

		const newCart=cart && [...cart, newSnack]
 
		toast.success(`${snack.snack} ${snack.name} adiconado ao pedido`)

		saveCartInLocalhost(newCart)


	}


	function removeSnackFromCart( snack:Snack ){
		const newCart=cart && cart.filter((item)=> !(item.id === snack.id  && item.snack === snack.snack))

		saveCartInLocalhost(newCart) 
	}


	function updateSnackQuantity(snack:Snack, newQuantity:number){
		const newCart=cart && cart.filter((item)=> {
			if(item.id===snack.id && snack.snack===item.snack){
				item.quantity=newQuantity
			}

			return item
		})

		saveCartInLocalhost(newCart)

	}


	function snackIncrement( snack:Snack){
		updateSnackQuantity(snack, snack.quantity+1)
	}

	function snackDecrement( snack:Snack){
		if(snack.quantity <= 0){
			updateSnackQuantity(snack, 0+1)
		}

		updateSnackQuantity(snack, snack.quantity-1)
	}


	useEffect(()=>{
		cartInLocalStorage && setCart(cartInLocalStorage)
	},[])



	 return (
	 	<CartContext.Provider value={{
	 		cart, 
	 		addSnackIntoCart,
	 		removeSnackFromCart,
	 		snackIncrement,
	 		snackDecrement
	 	}} >
	 		{children}
	 	</CartContext.Provider>
	 )
}
import {Link} from 'react-router-dom'

import {FaShoppingCart} from 'react-icons/fa'

import {Container, FinishContainer} from './styles'

import logoSvg from  '../../assets/logo.svg'
import { useCart } from '../../Hooks/useCart';
import { currentFormat } from '../../Helpers/CurrentFormat';

interface OrderHeaderProps{
	action?:string
	isProcessingPayment?:boolean
}


export function FinishOrder({action, isProcessingPayment} : OrderHeaderProps){
	const {cart}=useCart()

	const  total = cart.reduce((acc, item)=> (acc+=item.price*item.quantity), 0 )


	return(
		<FinishContainer className='total'>

			{action === 'payment' ? 
				<button type='submit' >{isProcessingPayment ? 'Processando...' : 'Pagar'}</button> 
				: 
				<Link to='/payment'>{action === 'payment' ? 'Pagar' : 'Finalizar pedido'}</Link>
			}

			<div>
				<h2>Total</h2>
				<span>
					{currentFormat(total)}
				</span>
			</div>
		</FinishContainer>
	)
}

export function OrderHeader (){
	const {cart}=useCart()

	return(
		<Container>
			<Link to='/'>
			 <img src={logoSvg}/>
			</Link>
     

			<div className='pedidos'>
				<div>
					<h3>Meus pedidos</h3>

					<strong>{`${cart.length}`.padStart(2,'0')} <span>Lanche(s)</span></strong>
				</div>
				<FaShoppingCart/>
			</div>

		</Container>
	)
	
}
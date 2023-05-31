import { useCart } from '../../../../Hooks/useCart';

import {Container} from './styles'
import { currentFormat } from '../../../../Helpers/CurrentFormat';

import {FaTrashAlt} from 'react-icons/fa'

import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'



export function TableMobile(){
	const {cart, removeSnackFromCart,snackIncrement, snackDecrement} =useCart()
 
	return(
		<Container>
			{cart.map((item)=>(
				<div key={`${item.id}- ${item.snack}`} className='order-item'>
					<div>
						<img src={item.image} alt={item.name}/>
					</div>

					<div>
						<h4>{item.name}</h4>
						<span>{currentFormat(item.price)}</span>

						<div className='buttons'>
							<div>
								<button onClick={()=>snackDecrement(item)}><img src={minusImg} alt="decrease button"/></button>
								<span>{`${item.quantity}`.padStart(2,'0')}</span>
								<button onClick={()=>snackIncrement(item)}><img src={plusImg} alt="Increase button"/></button>
							</div>
							
							<button onClick={()=>removeSnackFromCart(item)}><FaTrashAlt/></button>
						</div>

						<h5><span>Subtotal</span> {currentFormat(item.price*item.quantity)}</h5>

					</div>
				</div>
			))}
		</Container>
	)
}
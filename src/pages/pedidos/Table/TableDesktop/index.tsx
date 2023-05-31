import { useCart } from '../../../../Hooks/useCart';

import {Container} from './styles'
import { currentFormat } from '../../../../Helpers/CurrentFormat';

import {FaTrash} from 'react-icons/fa'

import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'

export function TableDesktop(){
	const {cart, removeSnackFromCart,snackIncrement, snackDecrement} =useCart()

	return(
		<Container>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Lanche</th>
						<th>Qtd</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
				</thead>


				<tbody>
					{cart.map((item)=>(
						<tr key={`${item.snack} - ${item.id} `}>
							<td><img src={item.image} alt={item.name}/></td>
							<td><h4>{item.name}</h4><span>{currentFormat(item.price)}</span></td>
							<td>
								<div className='quantity'>
									<button onClick={()=>snackDecrement(item)}>
										<img src={minusImg}/>
									</button>

									<span>
										{`${item.quantity}`.padStart(2,'0')}
									</span>

									<button onClick={()=>snackIncrement(item)}>
										<img src={plusImg}/>
									</button>
								</div>
							</td>
							<td><h5>{currentFormat(item.quantity*item.price)}</h5></td>
							<td><button onClick={()=>removeSnackFromCart(item)}><FaTrash /></button></td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	)
}
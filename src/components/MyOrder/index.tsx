import {FaShoppingCart} from 'react-icons/fa'
import {Container} from './styles'
import { useCart } from '../../Hooks/useCart';

import {Link} from 'react-router-dom'

export function MyOrder (){

	const { cart } = useCart()
  
	return (
		<Container> 
			<Link to='/cart'>
				<span>Meu pedido</span>
				<FaShoppingCart/>
				<span>{`${cart.length}`.padStart(2,'0')}</span>
			</Link>
		</Container>
	)
	
}
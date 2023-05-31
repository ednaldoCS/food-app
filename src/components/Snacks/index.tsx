import {FiPlus} from 'react-icons/fi'

import {Container} from './styles'

import {currentFormat} from '../../Helpers/CurrentFormat'

import {SkeletonSnack} from './SkeletonSnack/'

import {SnackData} from '../../Interafces/SnackData'

import {useCart} from '../../Hooks/useCart'


interface SnacksProps{
	snacks: SnackData[]
}

export function Snacks ({snacks}:SnacksProps){
	const {addSnackIntoCart,cart}=useCart()


	return(
		<Container>
			{!snacks.length ? ([1,2,3,4].map((n)=><SkeletonSnack key={n} />) ): 
				snacks.map((snack)=>{
					const snackExistent=cart.find((item)=>item.snack===snack.snack &&item.id === snack.id)


					return(
						<div key={snack.id} className='snack'>
							<span>{snackExistent ? snackExistent.quantity : 0}</span>
							<h2>{snack.name}</h2>
							<img src={snack.image} alt={`Ìmage of ${snack.name}`}/>
							<p>{snack.description}</p>

							<div>
								<strong>{currentFormat(snack.price)}</strong>
								<button type='button' onClick={()=>addSnackIntoCart(snack)}>
									<FiPlus/>
								</button>
							</div>
						</div>
					)
				})
			}
		</Container>
	)
	
}
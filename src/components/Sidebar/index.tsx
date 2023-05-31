import {useState} from 'react'
import {NavLink} from 'react-router-dom'

import {Container} from './styles'

import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SorveteIcon } from '../../assets/ice-cream.svg'
import { ReactComponent as BebidaIcon } from '../../assets/soda.svg'

import menuImg from '../../assets/menu.svg'




export function Sidebar (){
	const [menu, setMenu]=useState(false)

	const handleToggleMenu=()=>{
		setMenu(!menu)
	}

	return(
		<Container isMenuOpen={menu} >
			<button type='button' onClick={handleToggleMenu}>
				<img src={menuImg} alt="brand"/>
			</button>

			<nav>
				<ul>
					<li>
						<NavLink to='/' >
							<BurguerIcon/>
							<span>Hanbúrgueres</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/pizzas' >
							<PizzaIcon/>
							<span>Pizzas</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/bebidas' >
							<BebidaIcon/>
							<span>Bebidas</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/sorvetes' >
							<SorveteIcon/>
							<span>Sorvetes</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</Container>
	) 
	
}
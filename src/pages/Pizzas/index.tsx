import {useContext} from 'react'

import {Snacks} from '../../components/Snacks/'

import {Head} from '../../components/Head/'
import {SnackTitle} from '../../components/SnackTitle'

import {getPizzas} from '../../services/api'


import {SnackData} from '../../Interafces/SnackData'

import {useSnack} from '../../Hooks/useSnack'

export default function PizzasPage() {
   const {pizzas} =useSnack()
  return (
   <>
      <Head title='Pizzas' description='a melhor da cidade' />

      <SnackTitle>
        Pizzas
      </SnackTitle>


      <Snacks snacks={pizzas}/>

   </>
  )
}
 
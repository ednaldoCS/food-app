import {useContext} from 'react'

import {Snacks} from '../../components/Snacks/'

import {Head} from '../../components/Head/'
import {SnackTitle} from '../../components/SnackTitle'

import {getDrinks} from '../../services/api'


import {SnackData} from '../../Interafces/SnackData'


import {useSnack} from '../../Hooks/useSnack'



export default function DrinksPage() {
    const {drinks} =useSnack()


  return (
   <>
      <Head title='Bebidas' description='a melhor da cidade' />

      <SnackTitle>
        Drinks
      </SnackTitle>

      <Snacks snacks={drinks}/>
   </>
  )
}
 
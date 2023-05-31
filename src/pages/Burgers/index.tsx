import {useContext} from 'react'
import {useSnack} from '../../Hooks/useSnack'

import {Head} from '../../components/Head/'

import {SnackTitle} from '../../components/SnackTitle'

import {Snacks} from '../../components/Snacks/'

import {getBurgers} from '../../services/api'

import {useQuery} from 'react-query'

import {SnackData} from '../../Interafces/SnackData'

import { SnackContext } from '../../contexts/SnackContext';



export default function BurgersPage() {
  // const [burgers, setBurgers] =useState<SnackData[]>([])   

  const {burgers} =useSnack()


  return (
   <>
      <Head title='Hambúrgueres' description='O melhor da cidade' />

      <SnackTitle>
        Hambúrgers
      </SnackTitle>

      <Snacks snacks={burgers}/>
   </>
  )
}
 
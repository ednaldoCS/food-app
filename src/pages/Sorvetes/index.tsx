import {useContext} from 'react'

import {Snacks} from '../../components/Snacks/'

import {Head} from '../../components/Head/'
import {SnackTitle} from '../../components/SnackTitle'

import {getSorvetes} from '../../services/api'


import {SnackData} from '../../Interafces/SnackData'


import {useSnack} from '../../Hooks/useSnack'


export default function SorvetesPage() {
   const {sorvetes} =useSnack()
  return (
   <>
      <Head title='Sorvetes' description='o melhor da cidade' />

      <SnackTitle>
        Sorvetes
      </SnackTitle>


      <Snacks snacks={sorvetes} />
   </>
  )
}
 
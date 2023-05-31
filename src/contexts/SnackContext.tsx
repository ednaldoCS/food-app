import {useState, useEffect, createContext, ReactNode} from 'react'

import { getBurgers, getDrinks, getPizzas, getSorvetes } from '../services/api';

import { SnackData } from '../Interafces/SnackData';

interface SnackContextProps{
  burgers:SnackData[],
  pizzas:SnackData[],
  drinks:SnackData[],
  sorvetes:SnackData[]

}

  
interface SnackProviderProps{
	children : ReactNode
}

export const SnackContext=createContext({} as SnackContextProps);


export function SnackProvider({children}: SnackProviderProps){
  const [burgers, setBurgers] =useState<SnackData[]>([])   
  const [pizzas, setPizzas] =useState<SnackData[]>([])   
  const [drinks, setDrinks] =useState<SnackData[]>([])   
  const [sorvetes, setSorvetes] =useState<SnackData[]>([])   


  useEffect(()=>{
    (async ()=>{  

      try{
        const burgersReq= await getBurgers()
        const pizzasReq= await   getPizzas()
        const drinksReq= await getDrinks()
        const sorvetesReq= await getSorvetes()

        const requests=[  
          burgersReq,pizzasReq,drinksReq,sorvetesReq
        ]

        const [ 
          {data: burgersData},
          {data: pizzasData},
          {data: drinksData},
          {data: sorvetesData}
        ] = await Promise.all(requests)


        console.log('snack', burgersData)


        setBurgers(burgersData)
        setPizzas(pizzasData)
        setDrinks(drinksData)
        setSorvetes(sorvetesData)

      }catch(err){
        console.log(err)
      }

    })()
  },[])





	return (
		<SnackContext.Provider value={{burgers, pizzas, drinks, sorvetes}}>
			{children}
		</SnackContext.Provider>
	)
}
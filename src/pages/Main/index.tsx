import {Outlet} from 'react-router-dom'


import { Container } from './styles'
import {Sidebar} from '../../components/Sidebar/'
import {MyOrder} from '../../components/MyOrder/'


import logoImg from '../../assets/logo.svg'


export default function MainPage() {
  
  return (
    <Container>

      <MyOrder  />

      <Sidebar/>
      
      <section>
        <div className='brand'>
          <img src={logoImg} alt="brand" />
        </div>

        <Outlet/>

      </section>
    </Container>
  )
}
 
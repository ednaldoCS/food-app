
import { Container } from './styles'
import { Head } from '../../components/Head';

import {OrderHeader, FinishOrder} from '../../components/OrderHeader/'

import {Table} from './Table/'
import { useCart } from '../../Hooks/useCart';

export default function MyCartPage() {
  const {cart}=useCart()

  return (
    <Container>  
      <Head title='Area de pedidos'/>

        <OrderHeader/>

        <Table/>
    </Container>
  ) 
}
  
import {useForm,SubmitHandler, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'


import { Container, Inner, Form} from './styles'
import { Head } from '../../components/Head';

import {FinishOrder,OrderHeader} from '../../components/OrderHeader/'
import { useState } from 'react';

import { IMask, IMaskInput} from 'react-imask'

import {schema, FieldValues } from './Form/validationSchema'

import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js'
import { loadStripe, PaymentMethodCreateParams } from '@stripe/stripe-js';
import { useCart } from '../../Hooks/useCart';
import { PaymentData } from '../../../../food-app-back/src/interfaces/PaymentData';
import { CustomerData } from '../../../../food-app-back/src/interfaces/CustomerData';

import Loading from '../../components/Loading/'


const stripePromise = loadStripe('pk_test_51M3nfhJt26NDgDxU1y4dQHAo0BQK8ryQdVbgHS7qY0k6D7KHHevemBNOy5f8vgzXLIjM6iQnFzOWV9gKXtsXopFT00UwuIoFRB')
  


function PaymentForm() {
  const {
    control,  
    register,
    handleSubmit,
    watch,
    formState:{errors},
  } = useForm<FieldValues>({resolver: yupResolver(schema)})
 
  const {cart}=useCart()

  const  total = cart.reduce((acc, item)=> (acc+=item.price*item.quantity), 0 )


  const [isProcessingPayment, setIsProcessingPayment]=useState(false)
  const [textMessage, setTextessage]=useState('')

  const stripe=useStripe()

  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
      
      console.log(total)

        setIsProcessingPayment(true)
        setTextessage('Validando informaçoes')

        const paymentData: PaymentData = {
          card:{
            number:data.creditCardNumber.toString(),
            exp_month:new Date(data.creditCardExpiration).getMonth(),
            exp_year:new Date(data.creditCardExpiration).getFullYear(),
            cvc:data.cardCvvCode.toString(),
            // name:data.creditCardHolder.toString()
          },
          billing_details:{
              address:{
                  city:data.city,
                  line1:`${data.street}, ${data.number}`
              },
              name:data.fullname,
              email:data.email,
              phone:data.celular
          },
          amount: total*1000
        }

        const customerData : CustomerData = {
          fullanme:data.fullname,
          email: data.email,
          mobile: data.celular,
          document: data.document,
          zipcode: data.zipcode,
          street: data.street,
          number: data.number,
          complement: data.complement as string,
          neighborhood:data.neighborhood,
          city: data.city,
          state: data.state
        }

        const cartData = cart.map((item)=>(
          {id:item.id, quantity:item.quantity}
        ))


        setTextessage('Confimando pagamento')

        const req = await fetch('http://localhost:5000/checkout', {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            payment:paymentData,
            customer: customerData,
            cart
          })
        })

        const res = await req.json()


        if(res.status === 200){
          alert('Pagamento confiado, seu pedido ja esta em produçaõ')
          setIsProcessingPayment(false)
        }else{
          alert('Desculpe, houve algum problema com o Pagamento, tente novamente')
        }
    

  }


  return (
    <Container>   
      <Head title='Pagamento'/>
      <OrderHeader/>
      
      {
        isProcessingPayment ? <Loading textMessage={textMessage}/> : ''
      }

      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Infomações pessoais</h2>
          
            <div className='field'>
              <label htmlFor="fullname">
                Nome e Sobrenome
              </label>

              <Controller 
                name='fullname'
                control={control}
                render={({field})=>(
                  <input type="text" id='fullname' autoComplete='name' {...field} />
                )}
              />

              {errors.fullname && <p className='error'>{errors.fullname.message}</p>}
            </div>  

            <div className='field-group'>
                <div className='field'>
                  <label htmlFor="email">
                   Email
                  </label>
                 
                   <Controller 
                    name='email'
                    control={control}
                    render={({field})=>(
                      <input type="email" id='email' autoComplete='email' {...field} />
                    )}
                  />

                  {errors.email && <p className='error'>{errors.email.message}</p>}
                </div>

                <div className='field'>
                 <label htmlFor="celular">
                   Celular
                  </label>
              
                   <Controller 
                    name='celular'
                    control={control}
                    render={({field})=>(
                        <IMaskInput
                          type='tel'
                          id='celular'
                          autoComplete='phone'
                          mask={'(00) 90000-0000'}
                          {...field}
                      />
                    )}
                  />


                  {errors.celular && <p className='error'>{errors.celular.message}</p>}
                </div>

                <div  className='field'>
                   <label htmlFor="document">
                     CPF/CNPJ
                    </label>
                     <Controller 
                        name='document'
                        control={control}
                        render={({field})=>(
                            <IMaskInput
                              type='text'
                              id='document'
                              mask={[
                                {mask:'000-000-000-00', maxLength:11},
                                {mask:'00.000.000/0000-00'}
                              ]}
                              {...field}
                          />
                        )}
                      />   

                      {errors.document && <p className='error'>{errors.document.message}</p>}

                </div>
            </div>

          <h2>Endereço de entrega</h2>
            <div className='field'>
               <label htmlFor="zipcode">
                 CEP
                </label>
                <Controller 
                        name='zipcode'
                        control={control}
                        render={({field})=>(
                            <IMaskInput
                              type='tel'
                              id='zipcode'
                              autoComplete='zipcode'
                              mask={'00.000-000'}
                              {...field}
                          />
                        )}
                      /> 
                  {errors.zipcode && <p className='error'>{errors.zipcode.message}</p>}
  
            </div>

             <div className='field'>
               <label htmlFor="street">
                 Endereço
                </label>
               
                <Controller 
                  name='street'
                  control={control}
                  render={({field})=>(
                    <input type="text" id='street' autoComplete='street-address' {...field} />
                  )}
                />

                {errors.street && <p className='error'>{errors.street.message}</p>}

            </div>

            <div className='field-group'>
              <div className='field'>
                <label htmlFor="number">
                 Número
                </label>
                <Controller 
                  name='number'
                  control={control}
                  render={({field})=>(
                    <input type="text" id='number' autoComplete='number-address' {...field} />
                  )}
                />

                {errors.number && <p className='error'>{errors.number.message}</p>}

              </div>

              <div className='field'>
               <label htmlFor="complement">
                 Complemento
                </label>
               <Controller 
                  name='complement'
                  control={control}
                  render={({field})=>(
                    <input type="text" id='complement' autoComplete='street-address' {...field} />
                  )}
                />

                {errors.complement && <p className='error'>{errors.complement.message}</p>}

              </div>
            </div>


           <div className='field-group'>
              <div className='field'>
                <label htmlFor="neighborhood">
                 Bairro
                </label>
                <Controller 
                  name='neighborhood'
                  control={control}
                  render={({field})=>(
                    <input type="text" id='neighborhood' autoComplete='street-address' {...field} />
                  )}
                />  

                {errors.neighborhood && <p className='error'>{errors.neighborhood.message}</p>}

              </div>

              <div className='field'>
               <label htmlFor="city">
                 Cidade
                </label>
                <Controller 
                  name='city'
                  control={control}
                  render={({field})=>(
                    <input type="text" id='city' autoComplete='street-address' {...field} />
                  )}
                />  

                {errors.city && <p className='error'>{errors.city.message}</p>}

              </div>

              <div className='field'>
               <label htmlFor="state">
                 Estado
                </label>
                <Controller 
                  name='state'
                  control={control}
                  render={({field})=>(
                    <select id="state" {...field}>
                      <option value="">Selecione</option>
                      <option value="esatdo">Estado1</option>
                      <option value="esatdo">Estado2</option>
                      <option value="esatdo">Estado3</option>
                      <option value="esatdo">Estado4</option>
                      <option value="esatdo">Estado5</option>
                      <option value="esatdo">Estado6</option>
                      <option value="esatdo">Estado7</option>
                      <option value="esatdo">Estado8</option>
                      <option value="esatdo">Estado9</option>
                      <option value="esatdo">Estado10</option>
                      <option value="esatdo">Estado11</option>
                      <option value="esatdo">Estado12</option>
                      <option value="esatdo">Estado13</option>
                      <option value="esatdo">Estado14</option>
                      <option value="esatdo">Estado15</option>
                      <option value="esatdo">Estado16</option>
                      <option value="esatdo">Estado17</option>
                      <option value="esatdo">Estado18</option>
                      <option value="esatdo">Estado19</option>
                      <option value="esatdo">Estado20</option>
                    </select>
                  )}
                />

                 {errors.state && <p className='error'>{errors.state.message}</p>}

              </div>
            </div>

          <h2>Pagamento</h2>
          
            <div className='field'>
                <label htmlFor="creditCardHolder">Nome impresso no cartão</label>
                
                  <Controller 
                      name='creditCardHolder'
                      control={control}
                      render={({field})=>(
                          <input type="text"  id='creditCardHolder'  autoComplete='cc-name' {...field} />
                      )}
                    />

                     {errors.creditCardHolder && <p className='error'>{errors.creditCardHolder.message}</p>}
            </div>

            <div className='field'>
                <label htmlFor="creditCardNumber">Número do cartão</label>
                
                <Controller 
                      name='creditCardNumber'
                      control={control}
                      render={({field})=>(
                          <IMaskInput 
                            type='tel'
                            id='creditCardNumber' 
                            autoComplete='phone'
                           mask={[
                              {mask:'0000 0000 0000 0000'},
                              {mask:'0000 000000 0000 ', maxLength:14},
                              {mask:'0000 000000 00000 ', maxLength:15},
                            ]}
                            {...field}
                        />
                      )}
                    />

                {errors.creditCardNumber && <p className='error'>{errors.creditCardNumber.message}</p>}
            </div>

            <div className='field-group'>
              <div className='field'>
                  <label htmlFor="creditCardExpiration">Vencimento</label>
                  <Controller 
                      name='creditCardExpiration'
                      control={control}
                      render={({field})=>(
                          <IMaskInput 
                            type='tel'
                            id='creditCardExpiration'
                           mask={[
                              {
                                mask:'MM/YY',
                                blocks:{
                                  MM:{
                                    mask:IMask.MaskedRange,
                                    from:0,
                                    to:12
                                  },
                                  YY:{
                                    mask:IMask.MaskedRange,
                                    from:new Date().getFullYear() - 2000,
                                    to:99
                                  }
                                }
                              }
                            ]}
                            {...field}
                        />
                      )}
                    />
                  {errors.creditCardExpiration && <p className='error'>{errors.creditCardExpiration.message}</p>}
              </div>

              <div className='field'>
                  <label htmlFor="cardCvvCode">Código de segurança (CVV)</label>
                
                  <Controller 
                      name='cardCvvCode'
                      control={control}
                      render={({field})=>(
                          <IMaskInput 
                            type='tel'
                            id='cardCvvCode' 
                           mask={'0000'}
                            {...field}
                        />
                      )}
                    />

                  {errors.cardCvvCode && <p className='error'>{errors.cardCvvCode.message}</p>}
              </div>
          </div>
          <FinishOrder action='payment' isProcessingPayment={isProcessingPayment}/> 
        </Form>
      </Inner>
    </Container>
  ) 
}
  
export default function PaymentPage(){
  return(
   <Elements stripe={stripePromise}>
      <PaymentForm/>
   </Elements>
  )
}
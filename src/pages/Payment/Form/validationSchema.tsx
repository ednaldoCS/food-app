import {useForm,SubmitHandler, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {isValidCPF, isValidCNPJ, isValidPhone} from '@brazilian-utils/brazilian-utils'

import { default as isValidCreditCart} from 'card-validator'

export const schema= yup.object({
  fullname:yup
    .string()
    .required('Nome e Sobrenome é obrigatorio')
    .min(3,'Nome e Sobrenome muito curto')
    .matches(/(\w.+\s).+/gi,  'O Nome deve conter o Sobrenome'),
  email:yup.string().required().email('O email deve ser válido'),
  celular:yup
    .string()
    .required('O celular é obrigatório')
    .transform((value)=>value.replace(/[^\d]/g, ''))
    .test('validateCelular', 'O número de celular deve ser válido', (value)=>isValidPhone(value)),
  document:yup
    .string()
    .required('O CPF/CNPJ deve ser válido')
    .transform((value)=>value.replace(/[^\d]/g, ''))
    .test('validateDocument', 'O número do CPF/CNPJ deve ser válido', (value)=>isValidCPF(value)|| isValidCNPJ(value)),
  zipcode:yup
    .string()
    .required('O CEP é obrigatório')
    .transform((value)=>value.replace(/[^\d]/g, '')),
  street:yup.string().required('O endereço é obrigatório'),
  number:yup.string().required('O Número é obrigatório'),
  complement:yup.string(),
  neighborhood:yup.string().required('O bairro é obrigatório'),
  city:yup.string().required('A cidade é obrigatória.'),
  state:yup.string().required('O Estado é obrigatório'),
  creditCardNumber:yup
    .string()
    .required('O Número de cartão é obrigatório')
    .transform((value)=>value.replace(/[^\d]/g, ''))
    .test('validateCreditCardValid', 'O número do cartão deve ser válido', (value)=>isValidCreditCart.number(value).isValid),
  creditCardHolder:yup
    .string()
    .required('O Nome do titular é obrigatorio')
    .min(3, 'O nome do titular devesr completo')
    .matches(/(\w.+\s).+/gi,  'O Nome dot titular deve conter o Sobrenome'),
  creditCardExpiration: yup
    .string()
    .required('A data de validade deve ser válida')
    .transform((value)=>{
      const [month, year]=value.split('/')

      if(month && year && month.length ===2 && year.length===2){
        return new Date(+`20${year}`, +month-1, 1).toISOString()
      }


      return value
    })
    .test('validateCreditExpiration', 'A data de validade é inválida', (value) =>new Date(value)>=new Date()),
    cardCvvCode:yup 
      .string()
      .required('O código de segurança é obrigatório')
})

export type FieldValues=yup.InferType<typeof schema>

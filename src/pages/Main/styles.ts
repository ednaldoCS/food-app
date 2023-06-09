import styled from 'styled-components'

export const Container = styled.main`
  width:100%;
  height:100vh;
  display:flex;

  > section{
    flex:1;
    width:100%;
    height:100%;
    margin-bottom:3rem;
    overflow-y:auto;

    padding:2rem 1.875rem;


    .brand{
      width:10rem;
      margin-bottom:2rem;
    }

    @media (max-width:720px){
        display:flex;
        flex-direction:column;
        padding-bottom:8rem;
        height:85vh;

        .brand{
          align-self:center;
        }
    }

  }


  

 `


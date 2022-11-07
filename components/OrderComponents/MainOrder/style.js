import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
`
Container.Inset = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 1400px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
  }
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .delete{
    height: 30px;
    background: #FF647C;
    width: 60% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 500;
    margin: 10px;
    border-radius: 15px;
    cursor: pointer;
    transition: .1s;
    :hover{
      transform: scale(1.1);
    }
  }
`


export default Container
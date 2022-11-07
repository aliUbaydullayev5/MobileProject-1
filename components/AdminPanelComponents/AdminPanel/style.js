import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  >button{
    font-size: 24px;
    padding: 4px 8px;
    cursor: pointer;
  }
`
Container.Form = styled.div`
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  >input{
    width: 100%;
    height: 50px;
    border: 2px solid #333;
    border-radius: 20px;
    font-size: 22px;
    padding: 0 10px;
  }
  >button{
    font-size: 26px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    border: 2px solid #333;
    border-radius: 20px;
    transition: .1s;
    :active{
      transform: scale(1.1);
    }
`

export default Container
import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--blue);
  width: 400px;
  height: 500px;
  margin: 50px auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  gap: 15px;
  >input{
    width: 100%;
    height: 50px;
    border: 2px solid var(--grey);
    border-radius: 20px;
    font-size: 22px;
    padding: 0 10px;
  }
  >button{
    font-size: 26px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    border: 2px solid var(--grey);
    border-radius: 20px;
    transition: .1s;
    :active{
      transform: scale(1.1);
    }
  }
`

export default Container
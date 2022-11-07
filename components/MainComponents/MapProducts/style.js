import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  padding: 30px 0 0 0;
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
  
`


export default Container
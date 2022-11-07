import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`
Container.Main = styled.div`
  display: grid;
  grid-template-columns: 263px 1fr;
  grid-gap: 20px;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  padding-top: 70px;
  z-index: -1;
  
`
Container.Navigation = styled.div`
    
`
Container.Products = styled.div`
  padding: 20px 60px 16px 0;
  
`
Container.Mini = styled.div`
  height: 100%;
  background: var(--grey);
  border-radius: 6px;
  padding: 20px 28px;
`

Container.PathText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #BBC2D0;
  >span{
    color: var(--green);
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
  }
`


export default Container
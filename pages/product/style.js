import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0 0 0;
`

Container.inset = styled.div`
  height: 100%;
  width: 100%;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 30px;
  position: relative;
  .title{
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    color: var(--blue);
  }
  
`
Container.MainComponent = styled.div`
  width: 100%;
  height: 380px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
  }
  .left{
    background: #F3F5F8;
    border-radius: 16px;
    display: grid;
    grid-template-rows: 1fr 20px;
    >div{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img{
      height: 270px;
    }
  }
  .right{
    >hr{
      width: 95% !important;
      margin: auto;
      border: 1px solid #F7F7F7;
      background-color: #F7F7F7;
    }
  }
  
`
Container.GreyText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #BBC2D0;
  margin: 4px 0;
`
Container.Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #262728;
  margin: 4px 0;

`
Container.Desc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #262728;
`

const TypeKredits = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #00C48C;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

TypeKredits.Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

Container.LeftBottom = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`
Container.LeftRound = styled.div`
  padding: 10px;
  cursor: pointer;
  div{
    width: 12px;
    height: 12px;
    background: #BBC2D0;
    border-radius: 250px;
  }
`

Container.ChaeckBasket = styled.div`
  width: 60px;
  height: 60px;
  background: #FF647C;
  border-radius: 250px;
  position: absolute;
  top: -30px;
  right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export {TypeKredits}
export default Container
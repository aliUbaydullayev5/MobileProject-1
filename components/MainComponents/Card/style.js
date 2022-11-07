import styled from 'styled-components'


const CardBlock = styled.div`
  min-width: 192px;
  max-width: 220px;
  height: 265px;
  padding: 12px;
  display: grid;
  grid-template-rows: 168px 1fr;
  background-color: #fff;
  box-shadow: 0px 10px 30px rgba(138, 149, 158, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  :hover{
    transform: scale(1.1);
  }
  .first{
    background-color: var(--grey);
    border-radius: 6px;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    >img{
      height: 100% !important;
    }
  }
  .second{
    padding: 8px 0;
    >span{
      color: #333;
      font-size: 14px;
    }
  }
  .title{
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: #262728;
  }
  .price{
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: #262728;
    margin: 4px 0;
  }
  .minPrice{
    background: #FF647C;
    border-radius: 2px;
    display: inline-block;
    padding: 2px 4px;
  }
`
export default CardBlock
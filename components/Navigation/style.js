import styled from 'styled-components'
import Image from "next/image";
import Link from "next/link";


const Column = styled.div`
  border-radius: 0px 30px 0px 0px;
  height: 100%;
  background-color: var(--blue);
  padding: 60px 0 0 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  .active{
    background-color: #fff;
    .img{
      path{
        fill: var(--blue);
      }
    }
    p{
      color: var(--blue) !important;
    }
  }
  
`
Column.Row = styled(Link)`
  height: 50px;
  cursor: pointer;
  border-radius: 250px 0 0 250px;
  display: flex;
  align-items: center;
  padding: 0 0 0 30px;
  transition: .2s;
  fill: red !important;
  gap: 15px;
  >p{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #FFFFFF !important;
  }
  :hover{
    background: #FFFFFF;
    .img{
      path{
        fill: var(--blue);
      }
    }
    p{
      color: var(--blue) !important;
    }
  }
  
`

export default Column
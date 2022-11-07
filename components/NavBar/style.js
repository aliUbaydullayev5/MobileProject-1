import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #FFFFFF;
  display: flex;
  justify-content: space-between;
  div{
    display: flex;
    align-items: center;
  }
`

const Logo = styled.div`
  padding: 0 64px 0 64px;
  font-weight: 400;
  font-size: 24px;
  line-height: 19px;
  cursor: pointer;
  >a{
    color: #000000 !important;
  }
`
const RightBlock = styled.div`
  gap: 40px;
`
RightBlock.Profile = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  gap: 12px;
  cursor: pointer;
  padding: 0 var(--padding) 0 var(--padding);
  background-color: var(--blue);
  border-radius: 0px 0px 0px 30px;
  height: 100%;
`
RightBlock.RightTop = styled.div`
  display: flex;
  flex-direction: column;
`


export {Logo, RightBlock}
export default Container
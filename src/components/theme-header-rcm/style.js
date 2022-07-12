import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  border-bottom: 2px solid #C10D0C;
  /* 上右下左 */
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;
  .left{
    display:flex;

    .title{
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }
    .keyword{
      display:flex;
      margin-top:6px;
      .divider{
        margin: 0 15px;
        color: #ccc;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
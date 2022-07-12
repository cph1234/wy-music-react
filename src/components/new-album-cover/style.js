import styled from 'styled-components';

export const NewAlbumCoverWrapper = styled.div`
  width:${props => props.width + "px"};
  height: 200px;
  .album-image{
    position:relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;
    img {
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
    }
    .cover{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      /* text-indent: -9999px; */
    }
  }
  .name{
    margin-top:5px;
    font-size:8px;
  }
  .artist-name{
    font-size:8px;
  }
`
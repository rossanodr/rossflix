import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 197px; 
  height: 298px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: auto ;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 2px;
  /*display: block;*/
  

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
    
    
  }
  
  &:not(:first-child) {
    margin-left: 10px;
  }

  p{  justify-content: last baseline;
      width: 197px; 
      height: 298px;
      opacity: 0;
      &:hover {
        color: white;
        opacity: 1;
        
        
      

    }
    
  }
`;

import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  * {
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${({theme}) => theme.fontSize.base};
    font-weight: 400;
  }

  body {    
    width: 100%;
    height: 100%;
    @media ${({theme}) => theme.device.tablet} {
      font-size: ${({theme}) => theme.fontSize.sm};
    }
    @media ${({theme}) => theme.device.mobile} {
      font-size: ${({theme}) => theme.fontSize.xs};
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
  }

  .wrapper {
    min-height: 100vh;
    position: relative;
    width: 100%;
  }
  
  section {
    padding-bottom: 79px;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default GlobalStyles;

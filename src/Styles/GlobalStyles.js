import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700&display=swap&subset=korean');
    * {
        box-sizing:border-box;
    }
    body {
        background-color: ${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-size:14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 140px;
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration: none;
    }
    input:focus {
        outline:none;
    }

`;
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0; 
    box-sizing: border-box;
}
html{
    font-size:62.5%;
}
body{
    margin:0;
    padding:0;
    font-size:1.4rem;
}
}
ul,li{
    margin:0;
    padding:0;
    list-style:none;
}
a{
    text-decoration:none;
    color:#343333;
}
button,input{
    border:none;
    background:none;
    outline:none;
}

img{
    width:100%;
    display:block;
}


`;

export default GlobalStyle;

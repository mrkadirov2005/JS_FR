import styled from "styled-components";

export const HeaderContainer =styled.header`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
height: 80px;
background-color: rgb(255, 127, 127);
`
export const LOGO=styled.h1`
font-size: 55px;
font-weight: bold;
font-style: italic;
width: 35%;
text-transform: uppercase;
margin: 0;
color: white;

`
export const NAVBAR=styled.menu`
width: 40%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const LIST=styled.li`
padding: 0;
margin: 0;
color: white;
font-size:18px;
text-transform: uppercase;
list-style: none;
`
export const BUTTON=styled.button`
padding: 0;
margin: 0;
color: black;
font-size:18px;
text-transform: uppercase;
background-color: white;
width: 30px;
height: 30px;
`
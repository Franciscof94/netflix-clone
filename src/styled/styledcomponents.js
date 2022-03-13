import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const NetflixInput = styled(InputBase)`
z-index: 30;
background: #fff;
padding: "25.5";
height: "60px";
border-radius: ${({radius}) => (radius ? "5px" : null)};
`


const handleWidth = (wide) => {
    switch(wide) {
        case "fullWidth": return "100%";
        case "medium" : return "260px";
        default: return "130px"
    }
}

export const NetflixButtonLogin= styled.button`
z-index: 15;
color: #fff;
border-radius: ${({radius}) => (radius ? "5px" : null)};
text-transform: inherit;
padding: 7px 0;
font-size: 1.05rem;
border: none;
outline: none;
background-color: ${({color}) => color === "gray" ? "lightgray": "red"};
cursor: pointer;
width: ${({wide}) => handleWidth(wide)}
`

export const NetflixButtonStart= styled.button`
z-index: 15;
color: #fff;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
text-transform: inherit;
padding: 16px 25px;
font-size: 1.5rem;
border: none;
outline: none;
background-color: #e50914;
cursor: pointer;
margin-left: 1px;
`


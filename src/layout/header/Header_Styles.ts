import styled from "styled-components";


const Header = styled.header`
    background-color: #1f1f20e1;
    padding: 20px 0;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99999; // чтобы находился поверх
`

export const S = {
    Header,
}
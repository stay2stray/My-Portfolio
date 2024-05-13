import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0 40px;
    position: relative;
`

const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}

    //font-family: 'Josefin Sans', sans-serif;
    //font-weight: 700;
    //font-size: 22px;
    letter-spacing: 0.14em;
    
`

const SocialItem = styled.li`
    
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
    padding-inline-start: 0;
`

const SocialLink = styled.a`
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${theme.animations.transition};
    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
        background-color: ${theme.colors.accent};
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`

export const S = {
    Footer,
    Name,
    SocialItem,
    SocialList,
    SocialLink,
    Copyright,
}
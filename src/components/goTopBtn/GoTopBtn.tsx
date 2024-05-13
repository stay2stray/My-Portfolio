import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll} from "react-scroll";
import { useEffect, useState } from "react";


export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (

        <>
        {showBtn && (<StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId="arrow" height="15" width="16" viewBox="0 0 16 15"/>
        </StyledGoTopBtn>)}
        
        </>


    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`
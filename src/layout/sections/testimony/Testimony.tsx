import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./../skills/Skills_Styles";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id="testimony">
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" align="center">
                    <S.IconFrame>
                        <Icon iconId="testimony"/>
                    </S.IconFrame>
                    
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    position: relative;

    ${S.IconFrame} {
        margin: 28px 0 72px;
    }
`
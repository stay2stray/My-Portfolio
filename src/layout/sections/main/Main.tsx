import photo from "./../../../assets/images/photo.jpg"; // нужно указывать путь изображения тут и вставлять его в переменную
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';



export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap="wrap"> 
                <div>
                    <S.SmallText>Hi There</S.SmallText>
                    <S.Name>I am <span>Catherine Essen</span></S.Name>
                    {/*<S.MainTitle>A Web Developer. </S.MainTitle>*/}
                    <S.MainTitle>
                        <p>A Web Developer.</p>
                        <Typewriter options={{
                            strings: ['A Web Developer.'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </S.MainTitle>

                    
                </div>
                
                    <Tilt>
                        <S.PhotoFrame>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoFrame>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


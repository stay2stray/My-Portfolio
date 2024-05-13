import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "./../Skills_Styles";

type SkillPropsType = {
    iconId: string
    title: string
    description: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction="column" align="center">
                <S.IconFrame>
                    <Icon iconId={props.iconId}/>
                </S.IconFrame>
                
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};


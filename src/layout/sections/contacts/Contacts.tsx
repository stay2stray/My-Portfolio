import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import {S} from "./Contacts_Styles";
import emailjs from '@emailjs/browser';
import { ElementRef, useRef } from "react";


export const Contact: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();

      if(!form.current) return
  
      emailjs
        .sendForm('service_kd2iaep', 'template_ftv7co8', form.current, {
          publicKey: 'OCqZ3f-h50HJqrnxM',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

        e.target.reset()
    };

    return (
        <S.Contacts id="contacts">

            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder="name" name="user_name" />
                    <S.Field required placeholder="email" name="email" />
                    <S.Field required placeholder="subject" name="subject" />
                    <S.Field required placeholder="message" as="textarea" name="message" />
                    <Button type="submit">Send message</Button>
                </S.Form>
            </Container>
                
        </S.Contacts>
    );
};


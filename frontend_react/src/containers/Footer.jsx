import styled, { css } from "styled-components";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";

const ContactContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 50rem;
  flex-wrap: wrap;
  @media (max-width: 40rem) {
    padding-bottom:3rem;
  }
`;
const ContactForm = styled.div`
  flex: 1;
  min-width: 15rem;
`;
const Form = styled.form``;
const FormItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
`;
const Label = styled.label`
  padding: 0 10px;
  position: absolute;
  left: 2rem;
  top: -0.4rem;
  font-size: 0.75rem;
  font-weight: 800;
  background: var(--main-bg-color);
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 2;
`;

const Strong = styled.strong`
  color: var(--main-accent-color);
  text-transform: uppercase;
`;

const sharedStyles = css`
  padding: 2rem;
  display: block;
  width: 100%;
  background: none;
  color: var(--main-text-color);
  font-size: 1rem;
  font-weight: 200;
  border: 1px solid var(--medium-text-color);
  resize: none;
  outline: 0;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
`;
const Input = styled.input`
  ${sharedStyles};
  height: 2rem;
`;
const Textarea = styled.textarea`
  ${sharedStyles};
  height: 10rem;
`;
const ContactInfo = styled.div`
  flex: 1;
  padding: 2rem;
  border: 1px solid var(--medium-text-color);
  border-radius: 30px;
`;
const Name = styled.h4`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
const Ocupation = styled.p`
  margin-bottom: 2.5rem;
  font-size: 0.875rem;
  letter-spacing: 3px;
  font-weight: 500;
  color: var(--main-accent-color);
  text-transform: uppercase;
`;
const InfoListContainer = styled.div``;
const InfoList = styled.ul``;
const InfoListItem = styled.li`
  position: relative;

  width: 100%;
  margin-bottom: 1.5rem;
  display: inline-block;
  vertical-align: top;
`;
// const Message = styled.div``;

const Footer = () => {
  // const [message, setMessage] = useState(false);
  return (
    <SectionContainer id="contact">
      <Subtitle subtitle="contact" />

      <ContactContainer>
        <ContactForm>
          <Form
            action="https://formsubmit.co/44467ebeb1a44d0d718a5c88766afb9c"
            method="POST"
          >
            <FormItem>
              <Label>
                Full Name <Strong>*</Strong>
              </Label>
              <Input
                type="text"
                name="name"
                placeholder="Your full name"
                required
              />
            </FormItem>
            <FormItem>
              <Label>
                Email Address <Strong>*</Strong>
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="example@domain.com"
                required
              />
            </FormItem>
            <FormItem>
              <Label>
                Message <Strong>*</Strong>
              </Label>
              <Textarea
                name="message"
                placeholder="Write Your message here"
                required
              ></Textarea>
            </FormItem>

            <Button type="submit" title="send message" />
          </Form>
          {/* <Message>
            <p>Thanks, your message is sent successfully.</p>
          </Message> */}
        </ContactForm>

        <ContactInfo>
          <Name>Grzegorz Hajduk</Name>
          <Ocupation>web developer</Ocupation>
          <InfoListContainer>
            <InfoList>
              <InfoListItem>
                <Strong>Residence: </Strong> UK
              </InfoListItem>

              <InfoListItem>
                <Strong>City: </Strong> Harrogate
              </InfoListItem>

              <InfoListItem>
                <Strong>Phone: </Strong> +44 783 088 68 41
              </InfoListItem>

              <InfoListItem>
                <Strong>E-mail: </Strong>
                hajdukdevelop@gmail.com
              </InfoListItem>
            </InfoList>
          </InfoListContainer>
        </ContactInfo>
      </ContactContainer>
    </SectionContainer>
  );
};

export default Footer;

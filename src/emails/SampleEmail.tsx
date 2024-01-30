import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface SampleEmailProps {
    userFirstname: string;
    messageBody?:string
  }
  
  
  export const SampleEmail = ({
    userFirstname = 'Zeno',
    messageBody
  }: SampleEmailProps) => (
    <Html>
      <Head />
      <Preview>
        Una nueva persona intersada en ti.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://media.licdn.com/dms/image/D4E03AQE9eEi2qRZwoA/profile-displayphoto-shrink_800_800/0/1701134403451?e=1709769600&v=beta&t=9z0wvWYSdumn144tOz7uygkM8bHSmgNZgonvuyAKuHM"
            width="180"
            height="180"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Hola {userFirstname},</Text>
          <Text style={paragraph}>
            <p>{messageBody}</p>
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://getkoala.com">
              Aceptar
            </Button>
          </Section>
          <Text style={paragraph}>
            Gonzalo Gutiérrez Desarrollador
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Arequipa, Perú</Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default SampleEmail;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
      padding: '20px 48px',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
  };
  
  const logo = {
    margin: '0 auto',
    borderRadius: '50%',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const btnContainer = {
    textAlign: 'center' as const,
  };
  
  const button = {
    backgroundColor: '#5F51E8',
    padding: '12px',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
  };
  
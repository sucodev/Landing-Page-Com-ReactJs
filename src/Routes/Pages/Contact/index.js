import React from 'react';
import { Helmet } from 'react-helmet';

// Stylesheet
import { Container, Content } from './style';

// Image
import ContactImage from './../../../images/contato.jpg';

const Contact = () => {
  return (
    <Container className="animeLeft">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <img src={ContactImage} alt="Máquina de Escrever" />
      <Content>
        <h1>Entre em Contato</h1>
        <ul>
          <li>marcos@ursopolar.com.br</li>
          <li>(21) 98917-3282</li>
        </ul>
      </Content>
    </Container>
  );
};

export default Contact;

import React from 'react'

import { Head, Title, Nav, Section, About, Media, Contact, Footer } from '../layout'

const Index = () => (
  <div>
    <Head/>
    <Title>
      <Nav
        config={[
          {id: 'about', name: 'About'},
          {id: 'media', name: 'Media'},
          {id: 'contact', name: 'Contact'}
        ]}
      />
    </Title>
    <Section id='about'><About /></Section>
    <Section id="media"><Media /></Section>
    <Section id="contact"><Contact /></Section>
    <Footer />
  </div>
)

export default Index

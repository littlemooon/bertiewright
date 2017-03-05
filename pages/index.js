import React from 'react'

import { Head, Title, Content, Footer, About, Media, Contact } from '../layout'

export default () => (
  <div>
    <Head />
    <Title />
    <Content><About /></Content>
    <Content><Media /></Content>
    <Content><Contact /></Content>
    <Footer />
  </div>
)

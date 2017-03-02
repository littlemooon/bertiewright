import React from 'react'

import Head from './Head' 
import Nav from './Nav' 
import Background from './Background' 
import Title from './Title' 
import Content from './Content' 

const Page = ({children}) => (
  <Background>
    <Head/>
    <Title/>
    <Nav/>
    <Content>{children}</Content>
  </Background>
)

export default Page

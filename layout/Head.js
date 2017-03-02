import React from 'react'
import Head from 'next/head'

const PageHead = () => (
  <Head>
    <meta charset='utf-8'/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <title>Bertie Wright</title>
    <meta property='og:title' content='Bertie Wright'/>

    <meta name='description' content='Since starting to play the melodeon at the age of 6, Bertie has traversed beyond traditional folk to incorporate influences from continental folk and jazz.'/>
    <meta property='og:description' content='Since starting to play the melodeon at the age of 6, Bertie has traversed beyond traditional folk to incorporate influences from continental folk and jazz.'/>

    <meta name='keywords' content='folk melodeon indie modern english independent traditional accordion'/>

    <style>{`
      body {
        margin: 0;
      }
    `}</style>
  </Head>
)

export default PageHead

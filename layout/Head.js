import React from 'react'
import Head from 'next/head'

import v from '../utils/style-vars'

const PageHead = () => (
  <Head>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />

    <title>Bertie Wright</title>
    <meta property='og:title' content='Bertie Wright' />

    <meta name='description' content='Since starting to play the melodeon at the age of 6, Bertie has traversed beyond traditional folk to incorporate influences from continental folk and jazz.' />
    <meta property='og:description' content='Since starting to play the melodeon at the age of 6, Bertie has traversed beyond traditional folk to incorporate influences from continental folk and jazz.' />

    <meta name='keywords' content='folk melodeon indie modern english independent traditional accordion' />

    <style>{`
      html {
        font-size: 100%;
        overflow-y: scroll;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      body {
        background: ${v.color.background};
        color: ${v.color.primary};
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        overflow-x: hidden;
        font-family: ${v.font.default};
        padding: 0;
        font-size: 1.4rem;
        line-height: 2rem;
        margin: 0;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      ::-moz-selection, ::selection {
        background: ${v.color.secondary};
        color: ${v.color.light};
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: ${v.font.header};
        font-weight: normal;
        text-rendering: optimizelegibility;
        a {
          font-weight: inherit;
        }
      }
      p {
        font-size: 16px;
        line-height: 24px;
        margin: 0 0 3rem;
        text-align: justify;
      }
      a {
        color: ${v.color.secondary};
        text-decoration: none;
        transition: all 0.3s ease-out;
        &:hover {
          color: ${v.color.secondaryHover};
          text-decoration: none;
          transition: all 0.3s ease-out;
        }
      }
      a, a:active, a:focus,
      input, input:active, input:focus,
      select, select:active, select:focus,
      textarea, textarea:active, textarea:focus {
        outline: 0 !important;
      }
      img {
        -ms-interpolation-mode: bicubic;
        max-width: 100%;
        overflow-x: visible;
        overflow-y: visible;
        position: static;
      }
      ul {
        padding: 0 0 0 0;
        list-style: none;
      }
    `}</style>
  </Head>
)

export default PageHead

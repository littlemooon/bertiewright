import React from 'react'
import v from '../utils/styles'

const Footer = () => (
  <div className='container'>
    <img src='static/back.jpg' alt='Madrigal of the Shire - back face'/>
    <div className='inner'>
      <h3 className='thanks'>{'Thank you'}</h3>
    </div>
    <style jsx>{`
      .container {
        position: relative;
        width: 100%;
        overflow: hidden;
        padding: ${v.padding.content} 0 0;
        height: calc((100vw * 1920 / 1962) + ${v.padding.content});
        max-height: calc(100vh + ${v.padding.content});
        background: ${v.color.background};
      }
      img {
        width: 100%;
        height: calc(100vw * 1920 / 1962);
        opacity: .4;
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,1)));
      }
      .inner {
        position: absolute;
        top: ${v.padding.content};
        width: 100%;
        height: calc(100vw * 1920 / 1962);
        max-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .thanks {
        color: ${v.color.title};
        padding: 1rem 2rem;
      }
    `}</style>
  </div>
)

export default Footer

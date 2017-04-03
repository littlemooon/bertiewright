import React, { PropTypes } from 'react'
import v from '../utils/styles'

const Title = ({children}) => (
  <div className='container'>
    <img src='static/front.jpg' alt='Madrigal of the Shire' />
    <div className='inner'>
      <div className='title'><h1>{'Bertie'}</h1></div>
      <h2>{'Independent modern folk musician hailing from the UK'}</h2>
      {children}
    </div>
    <style jsx>{`
      .container {
        position: relative;
        overflow: hidden
      }
      img {
        width: 100%;
        position: fixed;
        height: calc(100vw * 1920 / 1962);
        top: 0;
        left: 0;
        z-index: -1;
        opacity: .3;
      }
      .inner {
        width: 100%;
        height: calc(100vw * 1920 / 1962);
        max-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title {
        padding: 1rem 2rem;
      }
      h1 {
        font-family: ${v.font.default};
        color: ${v.color.title};
        font-size: 8rem;
        line-height: 8rem;
        margin: 0;
      }
      h2 {
        font-size: 1.4rem;
        line-height: 4rem;
      }
    `}</style>
  </div>
)

Title.propTypes = {
  children: PropTypes.element
}

export default Title

import React from 'react'
import css from 'next/css'
import v from '../utils/style-vars'

const Footer = () => (
  <div className={style.container}>
    <img className={style.img} src='static/countryside.jpg' />
  </div>
)

const style = {
  container: css({
    background: v.color.background,
    padding: '10rem 0 0'
  }),
  img: css({
    width: '100%',
    height: 'calc(100vw * 720 / 1280)',
    maskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,.5)))'
  })
}

export default Footer

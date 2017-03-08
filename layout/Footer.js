import React from 'react'
import css from 'next/css'
import v from '../utils/styles'

const Footer = () => (
  <div className={style.container}>
    <img className={style.img} src='static/countryside.jpg' />
    <div className={style.inner}>
      <p className={style.thanks}>{'Thank you'}</p>
    </div>
  </div>
)

const style = {
  container: css({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    padding: `${v.padding.content} 0 0`,
    height: `calc((100vw * 720 / 1280) + ${v.padding.content})`,
    background: v.color.background
  }),
  img: css({
    width: '100%',
    height: 'calc(100vw * 720 / 1280)',
    maskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,.7)))'
  }),
  inner: css({
    position: 'absolute',
    top: v.padding.content,
    width: '100%',
    height: 'calc(100vw * 720 / 1280)',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    // @include breakpoint(baby-bear) css({
    //   margin: auto 20% auto 10%;
    //   width: 70%;
    // }),
    // @include breakpoint(mama-bear) css({
    //   margin: auto 35% auto 15%;
    //   width: 50%;
    // }),
  }),
  thanks: css({
    color: v.color.title,
    padding: '1rem 2rem',
    background: v.color.secondary
  })
}

export default Footer

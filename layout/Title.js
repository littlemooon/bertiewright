import React from 'react'
import css from 'next/css'
import v from '../utils/styles'

import Nav from './Nav'

const Title = () => (
  <div className={style.container}>
    <img className={style.background} src='static/tartan.jpg' alt='bertie wright' />
    <div className={style.inner}>
      <div className={style.title}><h1 className={style.h1}>{'Bertie'}</h1></div>
      <h2 className={style.h2}>{'Independent modern folk musician hailing from the UK'}</h2>
      <Nav />
    </div>
  </div>
)

const style = {
  container: css({
    position: 'relative',
    overflow: 'hidden'
  }),
  background: css({
    width: '100%',
    position: 'fixed',
    height: 'calc(100vw * 720 / 1280)',
    maxHeight: '100vh',
    top: '0',
    left: '0',
    zIndex: '-1',
    opacity: '.2'
    // @media screen and (max-width: 1024px) css({ /* Specific to this particular image */
    //   left: 50%;
    //   margin-left: -512px;  /* 50% */
    // }),
  }),
  inner: css({
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
  title: css({
    padding: '1rem 2rem',
    background: v.color.secondary
  }),
  h1: css({
    fontFamily: v.font.default,
    color: v.color.title,
    fontSize: '8rem',
    lineHeight: '8rem',
    margin: '0'
  }),
  h2: css({
    fontSize: '1.4rem',
    lineHeight: '4rem'
  })
}

export default Title

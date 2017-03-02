import React from 'react'
import css from 'next/css'

const Background = ({children}) => (
  <div className={style}>{children}</div>
)

const style = css({
  font: '11px menlo',
  color: '#fff',
  padding: '5%',
  minHeight: '100vh',
  background: '#141E30',
  background: 'linear-gradient(to bottom, #141E30 , #243B55)',
})

export default Background

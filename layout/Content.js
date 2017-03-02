import React from 'react'
import css from 'next/css'

const Content = ({children}) => (
  <div className={style}>{children}</div>
)

const style = css({
  background: 'white',
})

export default Content

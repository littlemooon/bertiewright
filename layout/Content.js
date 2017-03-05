import React, { PropTypes } from 'react'
import css from 'next/css'
import v from '../utils/style-vars'

const Content = ({children}) => (
  <div className={style.container}>
    <div className={style.inner}>
      {children}
    </div>
  </div>
)

Content.propTypes = {
  children: PropTypes.element
}

const style = {
  container: css({
    padding: `10rem 5% 0`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: v.color.background
  }),
  inner: css({
    maxWidth: '30rem'
  })
}

export default Content

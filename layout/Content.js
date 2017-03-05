import React, { PropTypes, PureComponent } from 'react'
import css from 'next/css'
import v from '../utils/styles'

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
    padding: `${v.padding.content} 5% 0`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: v.color.background,
    ':first-child': {
      background: 'red'
    },
    ':last-child': {
      background: 'blue'
    }
  }),
  inner: css({
    maxWidth: '30rem'
  })
}

export default Content

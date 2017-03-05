import React, { PropTypes } from 'react'
import css from 'next/css'

const Button = ({type, children}) => (
  <button type={type} className={style}>{children}</button>
)

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string
}

Button.defaultProps = {
  type: 'submit'
}

const style = css({
  background: 'white',
  float: 'right',
  border: 'none',
  padding: '.4rem 2rem',
  margin: '1rem 0 0',
  cursor: 'pointer',
  fontSize: '1rem'
})

export default Button

import React, { PropTypes } from 'react'
import css from 'next/css'
import v from '../utils/styles'

const Button = ({type, children, onClick}) => (
  <button onClick={onClick} type={type} className={style}>{children}</button>
)

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
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
  fontSize: '1rem',
  ':hover': {
    background: v.color.secondary
  }
})

export default Button

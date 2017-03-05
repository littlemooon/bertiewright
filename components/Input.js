import React, { PropTypes } from 'react'
import css from 'next/css'

const Input = ({type, label}) => (
  <div>
    <p className={style.label}>{label}</p>
    <input type={type} {...css(style.input, type === 'textarea' && style.textarea)} />
  </div>
)

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

const style = {
  label: css({
    margin: '1rem 0 0'
  }),
  input: css({
    width: '100%',
    padding: '0 1rem',
    border: '1px solid white',
    height: '2rem',
    background: 'transparent',
    color: 'white'
  }),
  textarea: css({
    height: '8rem',
    textAlign: 'top'
  })
}

export default Input

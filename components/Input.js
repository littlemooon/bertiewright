import React, { PropTypes } from 'react'
import css from 'next/css'

const Input = ({type, label, value, onChange}) => (
  <div>
    <p className={style.label}>{label}</p>
    {type === 'textarea' ? (
      <textarea
        value={value}
        onChange={onChange}
        type={type}
        {...css(style.input, style.textarea)}
      />
    ) : (
      <input value={value} onChange={onChange} type={type} className={style.input} />
    )}
  </div>
)

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
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
    padding: '1rem',
    border: '1px solid white',
    height: '2rem',
    background: 'transparent',
    color: 'white',
    fontSize: '14px'
  }),
  textarea: css({
    height: '8rem',
    whiteSpace: 'normal',
    resize: 'none'
  })
}

export default Input

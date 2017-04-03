import React, { PropTypes } from 'react'
import v from '../utils/styles'

const Button = ({type, children, onClick}) => (
  <button onClick={onClick} type={type}>
    {children}
    <style jsx>{`
      button {
        background: white;
        float: right;
        border: none;
        padding: .4rem 2rem;
        margin: 1rem 0 0;
        cursor: pointer;
        font-size: 1rem;
      }
      button:hover {
        background: ${v.color.secondary};
      }
    `}</style>
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'submit'
}

export default Button

import React, { PropTypes } from 'react'

const Input = ({type, label, value, onChange}) => (
  <div>
    <p>{label}</p>
    {type === 'textarea' ? (
      <textarea value={value} onChange={onChange} type={type}/>
    ) : (
      <input value={value} onChange={onChange} type={type} />
    )}
    <style jsx>{`
      p {
        margin: 1rem 0 0;
      }
      input, textarea {
        width: 100%;
        padding: 1rem;
        border: 1px solid white;
        height: 2rem;
        background: transparent;
        color: white;
        font-size: 14px;
      }
      textarea {
        height: 8rem;
        white-space: normal;
        resize: none;
      }
    `}</style>
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

export default Input

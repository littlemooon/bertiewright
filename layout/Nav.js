import React, { PropTypes } from 'react'
import v from '../utils/styles'

const Nav = ({config}) => (
  <ul>
    {config.map(x => (
      <li key={x.id}>
        <a href={`#${x.id}`}>{x.name}</a>
      </li>
    ))}
    <style jsx>{`
      ul {
        display: flex;
        justify-content: center;
        margin: 2rem ${v.padding.page};
      }
      a {
        color: #fff;
        padding: 2rem;
        flex-wrap: nowrap;
        width: 8rem;
        text-align: center;
        cursor: pointer;
      }
      a:hover {
        background: rgba(255, 255, 255, .2);
      }
    `}</style>
  </ul>
)

Nav.propTypes = {
  config: PropTypes.array
}

export default Nav

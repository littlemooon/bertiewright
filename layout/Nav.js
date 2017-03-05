import React from 'react'
import css from 'next/css'
import v from '../utils/style-vars'

const Nav = () => (
  <ul className={style.ul}>
    <li className={style.li}>{'About'}</li>
    <li className={style.li}>{'Media'}</li>
    <li className={style.li}>{'Contact'}</li>
  </ul>
)

const style = {
  ul: css({
    display: 'flex',
    justifyContent: 'center',
    margin: `0 ${v.padding.page}`
  }),
  li: css({
    color: '#fff',
    padding: '2rem 0',
    flexWrap: 'nowrap',
    width: '8rem',
    textAlign: 'center',
    cursor: 'pointer',
    ':hover': {
      background: 'rgba(255, 255, 255, .2)'
    }
  })
}

export default Nav

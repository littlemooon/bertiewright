import React, { PropTypes } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import v from '../utils/styles'

const Section = ({ children, id }) => (
  <div>
    <ScrollableAnchor id={id}>
      <div className='container'>
        <div className='inner'>
          {children}
        </div>
      </div>
    </ScrollableAnchor>
    <style jsx>{`
      .container {
        padding: ${v.padding.content} 5% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${v.color.background};
        :first-child: {
          background: red;
        };
        :last-child: {
          background: blue;
        }
      }
      .inner {
        max-width: 30rem;
      }
    `}</style>
  </div>
)

Section.propTypes = {
  children: PropTypes.element,
  id: PropTypes.string,
}

export default Section

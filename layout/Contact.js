import React from 'react'

import { Input, Button } from '../components'

const Contact = () => (
  <div>
    <p>{'Hey :) Please feel free to get in touch.'}</p>
    <form>
      <Input label='Email address' type='email' />
      <Input label='Subject' />
      <Input label='Message' type='textarea' />
      <Button>{'Send'}</Button>
    </form>
  </div>
)

export default Contact

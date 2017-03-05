import React, { PureComponent } from 'react'

import { Input, Button } from '../components'

export default class Contact extends PureComponent {
  constructor () {
    super()
    this.state = {
      email: '',
      subject: '',
      content: ''
    }
  }

  onChange = field => e => this.setState({[field]: e.target.value})

  onSubmit = e => {
    e && e.preventDefault()
    console.log(this.state)
  }

  render () {
    const { email, subject, content } = this.state
    return (
      <div>
        <p>{'Hey :) Please feel free to get in touch.'}</p>
        <form>
          <Input
            value={email}
            onChange={this.onChange('email')}
            label='Email address'
            type='email'
          />
          <Input
            value={subject}
            onChange={this.onChange('subject')}
            label='Subject'
          />
          <Input
            value={content}
            onChange={this.onChange('content')}
            label='Message'
            type='textarea'
          />
          <Button onClick={this.onSubmit}>{'Send'}</Button>
        </form>
      </div>
    )
  }
}

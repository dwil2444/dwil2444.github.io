import React, { Component } from 'react';

import CV from 'react-cv'

export default class Example extends React.Component {
  render () {
    return (
      <CV
        personalData={{
          name: 'Dane Williamson',
          title: 'CS PhD Student',
          image: 'https://bulma.io/images/placeholders/128x128.png',
          contacts: [
            { type: 'email', value: 'dw3zn@virginia.edu' },
            { type: 'phone', value: '804-490-874' },
            { type: 'location', value: 'Charlottesville, VA' },
            { type: 'website', value: 'dwil2444.github.io' },
            { type: 'linkedin', value: 'www.linkedin.com/in/dane-a-williamson' },
            { type: 'github', value: 'github.com/dwil2444' }
        ]}}
        sections= {[{
          type: 'text',
          title: 'Career Profile',
          content: 'When I was child, I always want to be a developer.',
          icon: 'usertie'
        }]}
        branding={true} // or false to hide it.
      />
    )
  }
}
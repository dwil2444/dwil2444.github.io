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
            { type: 'phone', value: '804-490-8574' },
            { type: 'location', value: 'Charlottesville, VA' },
            { type: 'website', value: 'dwil2444.github.io' },
            { type: 'linkedin', value: 'www.linkedin.com/in/dane-a-williamson' },
            { type: 'github', value: 'github.com/dwil2444' }
        ]}}
        sections= {[{
          type: 'text',
          title: 'Career Profile',
          content: 'Incoming PhD in CS Student at the University of Virginia',
          icon: 'usertie'
        }]}
        branding={false} // or false to hide it.
      />
    )
  }
}
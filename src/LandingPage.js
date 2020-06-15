import React, { Component } from 'react';

import CV from 'react-cv';
import { CVData } from './data';

export default class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <CV {...CVData}/>
      </div>
    )
  }
}
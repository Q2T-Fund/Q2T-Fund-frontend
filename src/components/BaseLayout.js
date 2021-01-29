import React, { Component } from 'react';
import { Slot } from 'react-page-layout';
export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Slot name="page-content">
      </div>
    )
  }
}

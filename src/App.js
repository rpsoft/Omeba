import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import Workbench from './components/workbench'
import SideMenu from './components/sideMenu'
import Heading from './components/heading'

export default class App extends Component {
  render() {
    const style = {
      margin: 12,
    };

    return (
      <div>
      {
        // <RaisedButton label="Primary" primary={true} style={style} />
        // <RaisedButton label="Secondary" secondary={true} style={style} />
      }

        <Heading />

        <SideMenu />

        <Workbench />
      </div>
    );
  }
}

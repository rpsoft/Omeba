import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Stream from './stream'

export default class Workbench extends Component {
  render() {
    const style = {
      margin: 12,
    };

    return (
      <div style={{
                position: "absolute",
                // backgroundColor: "yellow",
                width: 6000,
                height: "100%",
                zIndex: 1,
                padding: "70px 70px",
                overflowX: "scroll",
                }}>

            <Stream />
            <Stream />
            <Stream />
    


      </div>
    );
  }
}

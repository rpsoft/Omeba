import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';



export default class Heading extends Component {
  render() {
    const style = {
      margin: 12,
    };

    return (
      <Card style={{
              width : "100%",
              height : 50,
              position: "fixed",
              top: 0,
              left:0,
              backgroundColor: "#424242",
              padding:"5px 5px 10px 0px",
              zIndex : 10}}>
        <div style={{fontWeight:"bolder", fontSize:30, marginLeft:5}}>
            <img src="../../images/logo-Inverted.jpg" style={{height:40,}}/>
        </div>

      </Card>
    );
  }
}

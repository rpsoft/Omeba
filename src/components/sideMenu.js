import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

// import ActionInput from 'material-ui/svg-icons/action/input';
import ActionReceipt from 'material-ui/svg-icons/action/receipt';

import ContentSave from 'material-ui/svg-icons/content/save';
import ContentAdd from 'material-ui/svg-icons/content/add';

import FileDownload from 'material-ui/svg-icons/file/file-download';
// import ContentArchive from 'material-ui/svg-icons/content/archive';


export default class SideMenu extends Component {
  render() {
    const buttonStyle = {
      width: 20,
      marginBottom: 7,
    };

    return (
      <div style={{
        width : 50,
        height : "100%",
        position: "fixed",
        top: 0,
        left:0,
        paddingTop: 50,
        backgroundColor:"#aaaaaa",
        zIndex: 5,
      }}>
      <Card style={{
        width : "100%",
        height : "100%",
        //paddingTop: 55,
        backgroundColor:"#aaaaaa",
        padding : "5px 5px 5px",
      }}>
        <RaisedButton icon={<ContentAdd />} style={buttonStyle} fullWidth={true}/>
        <RaisedButton icon={<ContentSave />} style={buttonStyle} fullWidth={true}/>
        <hr/>
        <RaisedButton icon={<ActionReceipt />} style={buttonStyle} fullWidth={true}/>
        <RaisedButton icon={<FileDownload />} style={buttonStyle} fullWidth={true}/>

      </Card>
      </div>
    );
  }
}

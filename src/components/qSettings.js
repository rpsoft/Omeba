import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import ActionSettings from 'material-ui/svg-icons/action/settings';

import ContentSave from 'material-ui/svg-icons/content/save';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';

import FileDownload from 'material-ui/svg-icons/file/file-download';
import ContentClear from 'material-ui/svg-icons/content/clear';


export default class QSettings extends Component {


  constructor(props) {
    super(props);
    //this.isSubmitted = false;

  }

  componentWillMount() {

  }


  render() {
    const buttonStyle = {
      width: 20,
      marginBottom: 7,
    };

    const style = {

    };

    return (

        <Card style={{
          width : 50,
          height : 250,
          display: "inline-block",
          backgroundColor:"#aaaaaa",
          padding : "5px 5px 5px",
          paddingBottom : 30,
          float:"left",
          marginRight:4

        }}>
        <RaisedButton icon={<ContentAddBox />} style={buttonStyle} fullWidth={true} onClick={this.props.addQuestion}/>
        <RaisedButton icon={<ActionSettings />} style={buttonStyle} fullWidth={true}/>

        <hr/>

        <RaisedButton icon={<FileDownload />} style={buttonStyle} fullWidth={true}/>

        <hr style={{marginTop:44}}/>

        <RaisedButton icon={<ContentClear />} style={buttonStyle} fullWidth={true}/>

        </Card>

    );
  }
}

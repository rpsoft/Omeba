import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import ActionSearch from 'material-ui/svg-icons/action/search';

import TextField from 'material-ui/TextField';

export default class QAdder extends Component {

  constructor(props) {
    super(props);
    var data = [];

    this.state = {
      expanded: false,
      availableQuestions: data,
    };
  }

  componentWillMount = () =>{

      // Aqui pides los estados.
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{position:"absolute",top:50,left:100,zIndex:15, width: "20%"}}>
        <CardHeader
          title="Question Adder"
          subtitle="Add a question to the stream"
          avatar={<ContentAddBox viewBox='0 0 30 30' style={{width:50, height: 50}} />}
        />

        <CardTitle
          style={{width:200,float:'right',zIndex:20}}
          actAsExpander={true}
          showExpandableButton={true}
        >
          <FlatButton backgroundColor='#d1d1ff' label="Advanced Options" onTouchTap={this.handleExpand} />
        </CardTitle>

        <CardTitle>
          <ActionSearch/>
            <TextField
              hintText="Start typing to filter out questions"
              style={{width:600}}
            />
        </CardTitle>



        <CardText expandable={true} >   Filters go here </CardText>


        <Card style={{marginLeft:10,marginRight:10}}>
        <CardTitle title="Available Questions" subtitle="Click on the question you want to add" titleStyle={{fontSize:20}}/>
        <CardText>
        <Table >
            <TableHeader>
              <TableRow >
                <TableHeaderColumn style={{fontSize:16}}>Question Code</TableHeaderColumn>
                <TableHeaderColumn style={{fontSize:16}}>Description</TableHeaderColumn>
                <TableHeaderColumn style={{fontSize:16}}>Root Question</TableHeaderColumn>
                <TableHeaderColumn style={{fontSize:16}}>Included In Waves</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>

              {
                this.state.availableQuestions.map( (q,i) => {
                    return <TableRow key={i}>
                            <TableRowColumn>{q.qCode}</TableRowColumn>
                            <TableRowColumn>{q.qDescription}</TableRowColumn>
                            <TableRowColumn>{q.qRoot}</TableRowColumn>
                            <TableRowColumn>{q.qWaves.join(" - ")}</TableRowColumn>
                          </TableRow>
                })

              }
            </TableBody>
          </Table>

          </CardText>
        </Card>

        <CardActions style={{textAlign:"right"}}>
          <FlatButton label="Cancel" onTouchTap={this.props.toggleAdder} />
          <FlatButton label="Accept/Add" onTouchTap={this.props.questionAdder} />
        </CardActions>
      </Card>
    );
  }
}

import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import ActionSearch from 'material-ui/svg-icons/action/search';

import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import QAdderQuestion from './qAdderQuestion'

function tokensInText (tokens, text) {
  try {
      if ( text.includes("GENDER")){
        console.log("FUCK");
        // debugger;
      }
      var textTokens = text.toLowerCase().match(/\S+/g) || []
      var totalFound = 0
      for (var t in tokens ){
          if (textTokens.find( (e) => ( e.includes(tokens[t].toLowerCase()) ) ) ){
            totalFound++;
          }
      }

      if ( totalFound == tokens.length ){
        return true;
      }
      return false;

    } catch (e) {
      console.warn(e)
      debugger;
    }
  }

class QAdder extends Component {

  constructor(props) {
    super(props);
    this.selectedQuestions = []
    this.selectedQuestionCodes = []

    this.state = {
      expanded: false,
      searchBoxText: "",
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

  toggleQuestion = (q) => {
    var i = this.selectedQuestionCodes.indexOf(q.qcode)
    if ( i < 0 ){
        this.selectedQuestionCodes.push(q.qcode)
        this.selectedQuestions.push(q)
    } else {
       this.selectedQuestionCodes.splice(i,1)
       this.selectedQuestions.splice(i,1)
    }

    alert(this.selectedQuestionCodes)

  }

  handleSearchChange = (event, value) => {

    this.setState ({searchBoxText: value})

  }

  render() {

    if ( !this.props.questions ) {
      return <div></div>
    }

    return (
      <div style={{width:"100%",height:"100%", backgroundColor:"black", position:"absolute", top:0, left:0, zIndex:20}}>
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{position:"absolute",top:50,left:100,zIndex:15, width: "25%"}}>
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
              value={this.state.searchBoxText}
              onChange={ (event, value)=>this.handleSearchChange(event, value)}
            />
        </CardTitle>



        <CardText expandable={true} >   Filters go here </CardText>


        <Card style={{marginLeft:10,marginRight:10}}>
        <CardTitle title="Available Questions" subtitle="Click on the question you want to add" titleStyle={{fontSize:20}}/>
        <CardText>

              <div id='questionsContainer' style={{width:"100%",height:500,overflowY:"scroll",overflowX:"hidden", borderTop:"2px dashed black"}}>
              {
                this.props.questions.filter(
                    (e) => {
                      return tokensInText(
                              (this.state.searchBoxText.match(/\S+/g) || [] ),
                               e.qdescription
                      )
                    }
                ).map(
                    (q,i) => {
                      return <QAdderQuestion key={i} question={q} togglerFunction = {this.toggleQuestion} selected = {this.selectedQuestionCodes.includes(q.qcode)}> </QAdderQuestion>
                })
              }
              </div>
        </CardText>
        </Card>

        <CardActions style={{textAlign:"right"}}>
          <FlatButton label="Cancel" onTouchTap={this.props.toggleAdder} />
          <FlatButton label="Accept/Add" onTouchTap={this.props.questionAdder} />
        </CardActions>
      </Card>
      </div>
    );
  }
}

//export default Question

const mapStateToProps = (state) => {
  return {
    questions : state.questions
  }
}

export default connect(mapStateToProps)(QAdder)

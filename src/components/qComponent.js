import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ContentClear from 'material-ui/svg-icons/content/clear';
import AvEqualizer from 'material-ui/svg-icons/av/equalizer';
import ImageGridOn from 'material-ui/svg-icons/image/grid-on';


export default class QComponent extends Component {

  summariseData = (qData) => {
    var possibleAnswers = []
    var dataPointTotals = {}
    var totalDataPoints = qData.length

    for (var a in qData ){
      if (possibleAnswers.indexOf(qData[a]) < 0){
        possibleAnswers.push(qData[a])
        dataPointTotals[qData[a]] = 1;
      } else {
        dataPointTotals[qData[a]]++;
      }
    }

    return {"dataPointTotals" : dataPointTotals, "possibleAnswers" : possibleAnswers }
  }

  constructor(props) {
    super(props);
    //this.isSubmitted = false;
    var falseData = ["yes","yes","yes","yes","yes","yes","yes","yes","yes","yes","yes","no","no","no","no",
                     "no","no","no","no","no","maybe","maybe","maybe","maybe","maybe","maybe","maybe","maybe",
                     "maybe","other","other","other","other","other","other","other","other","other","other","other"];
    this.state = {
      qWave : "Wave1",
      qCode : props.qCode,
      qDescription : "Q.Bx_7 (Combined files of interest) Proportion - total content types of interest downloaded or accessed legally in the last 3 months (presuming paid as legal) (Rank 780)",
      qRoot : "the root question it comes from.",
      qData : falseData,
      qFilters: {
        include : [],
        exclude : [],
      },
      summarisedData : this.summariseData(falseData),
     }

  }

  deleteQuestion = () => {

    this.props.deleteQuestion(this.state.qCode);
    alert("BOOM!");
  }

  //Top button in component to show data as a plot.
  showDataPlot = () => {



  }

  componentWillMount() {

  }


  render() {


    const buttonStyleIE = {
      width:25, height:25, minWidth:25,margin:2
    };

    const buttonStyle = {
      width:25, height:25,
    };

    const topButtons ={
      position:"relative",
      float:"right",
      top:2 ,
      right:5,
      width:25,
      height:25,
      zIndex: 10,
      marginLeft:5,
    }

    const style = {
      margin: 12,
    };

    if ( !this.state.summarisedData ){
      return <div></div>
    }

    return (
      <Card style={{
          //width:350,
          minHeight:200,
          display: "inline-block",
          marginRight:10,

          // backgroundColor:"blue"
      }} title={this.state.qDescription}>

        <span style={topButtons}>
              <RaisedButton icon={<ContentClear />} style={buttonStyle} fullWidth={true} onClick={this.deleteQuestion} />
        </span>

        <span style={topButtons}>
              <RaisedButton icon={<AvEqualizer />} style={buttonStyle} fullWidth={true}/>
        </span>

        <span style={topButtons}>
              <RaisedButton icon={<ImageGridOn />} style={buttonStyle} fullWidth={true}/>
        </span>

        <CardHeader
        title={this.state.qWave+" : " +this.state.qCode}
        subtitle={this.state.qDescription}
        subtitleStyle={{wordWrap:"break-word", maxWidth:300,paddingRight:0}}
        textStyle={{paddingRight:15}}
        style={{paddingBottom:0}}
        />


       <CardText>

        {
            this.state.summarisedData.possibleAnswers.map( (pAnswer,i) => {
                return <div key={i} style={{fontSize:15}}>
                       <span>

                        <span style={{width:25}}>
                             <RaisedButton icon={<img src="../../images/include.png" style={{height:20,}}/>} style={buttonStyleIE}  onClick={this.deleteQuestion} />
                         </span>
                        <span style={{width:25}}>
                             <RaisedButton icon={<img src="../../images/exclude.png" style={{height:20,}}/>} style={buttonStyleIE}  onClick={this.deleteQuestion} />
                        </span>

                       </span>
                       <span style={{paddingBottom:2, height:20, verticalAlign:'middle',marginLeft:5}}>
                            {pAnswer+" ["+this.state.summarisedData.dataPointTotals[pAnswer]+"]" }
                       </span>
                      </div>

                })
        }
      </CardText>


      </Card>
    );
  }
}

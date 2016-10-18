import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import QComponent from './qComponent'
import QSettings from './qSettings'
import QAdder from './qAdder'

export default class Stream extends Component {

  constructor(props) {
    super(props);


    var falseData = ["yes","yes","yes","yes","yes","yes","yes","yes","yes","yes","yes","no","no","no","no",
                     "no","no","no","no","no","maybe","maybe","maybe","maybe","maybe","maybe","maybe","maybe",
                     "maybe","other","other","other","other","other","other","other","other","other","other","other"];
    this.state = {
      adderVisibility: false,
      refWave : "Wave5",
      selectedQuestions : [
        {
          qCode : "qbx_7_pro_ab",
          qDescription : "Q.Bx_7 (Combined files of interest) Proportion - total content types of interest downloaded or accessed legally in the last 3 months (presuming paid as legal) (Rank 780)",
        },
        {
          qCode : "qbx_7_pro_ab_TEST1",
          qDescription : "Q.Bx_7 (Combined files of interest) Proportion - total content types of interest downloaded or accessed legally in the last 3 months (presuming paid as legal) (Rank 780)",
        },
        // {
        //   qCode : "qbx_7_pro_ab_TEST2",
        //   qDescription : "Q.Bx_7 (Combined files of interest) Proportion - total content types of interest downloaded or accessed legally in the last 3 months (presuming paid as legal) (Rank 780)",
        // },
        // {
        //   qCode : "qbx_7_pro_ab_TEST3",
        //   qDescription : "Q.Bx_7 (Combined files of interest) Proportion - total content types of interest downloaded or accessed legally in the last 3 months (presuming paid as legal) (Rank 780)",
        // }
      ],
      filters : {
          include : [],
          exclude : [],
      },
      data : {
          "qbx_7_pro_ab" : falseData,
          "qbx_7_pro_ab_TEST1" : falseData,
          // "qbx_7_pro_ab_TEST2" : falseData,
          // "qbx_7_pro_ab_TEST3" : falseData,
      }




    }


  }

  deleteQuestion = (qCode) => {

    var selqs = JSON.parse(JSON.stringify(this.state.selectedQuestions));
    var newQuestions = []

    for ( var e in selqs){
      if ( selqs[e].qCode != qCode) {
        newQuestions.push(selqs[e])
      }
    }

    this.setState({selectedQuestions : newQuestions})
  }

  addQuestion = () => {

        var qCode = "newQuestionCode" //for testing
        var selqs = JSON.parse(JSON.stringify(this.state.selectedQuestions));
        var found = false

        for ( var i in selqs){
          if ( qCode == selqs[i].qCode )
            found = true
        }
        if ( !found ) {
          selqs.push({qCode : "newQuestionCode", qDescription : "LA OSTIA!"})
          this.setState({selectedQuestions : selqs})
        }

        this.toggleAdder();
  }

  toggleAdder = () => {
    if ( this.state.adderVisibility ){
      this.setState({adderVisibility : false})
    } else {
      this.setState({adderVisibility : true})
    }
  }

  render() {

    if ( ! this.state.selectedQuestions ){
      return <div></div>
    }
    const style = {
      margin: 12,
    };

    return (
      <div style={{
              // backgroundColor:"",
              minHeight:250,
              marginBottom:15,
              paddingBottom:5,
              borderBottom: "1px dashed black",

              }}>

              <QSettings addQuestion={this.toggleAdder}/>
              {
                  this.state.selectedQuestions.map( (q,i) => <QComponent key={i} deleteQuestion={this.deleteQuestion} qCode={q.qCode}/> )

              }

              {
                this.state.adderVisibility ? <QAdder toggleAdder={this.toggleAdder} questionAdder={this.addQuestion} /> : <div></div>
              }


      </div>
    );
  }
}

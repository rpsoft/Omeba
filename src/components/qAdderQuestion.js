import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';

const styles = {
    checkbox: {
    marginBottom: 16,
  },
};

export default class QAdderQuestion extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount = () =>{

      // Aqui pides los estados.
  }

  toggleCheckBox = () => {
        //this.setState({selected : (this.state.selected ? false : true) })
        this.props.togglerFunction(this.props.question)
  }


  render() {
    const style = {
      margin: 12,
    };
    let props = this.props
    return (
      <div style={{display:"flex",textAlign:"left",paddingTop:5, }}>

        <span style={{paddingLeft:20,width:"2%"}} ><input type="checkbox" style={{width:20,height:20}} value={props.question.qcode} checked={props.selected} onChange={this.toggleCheckBox}/></span>

        <span style={{width:"15%"}} >{props.question.qcode}</span>
        <span style={{width:"38%"}} >{props.question.qdescription}</span>
        <span style={{width:"35%"}} >{props.question.qroot}</span>
      </div>

    );
  }
}

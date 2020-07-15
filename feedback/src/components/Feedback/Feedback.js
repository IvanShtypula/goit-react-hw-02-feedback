import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons.js';
import styleFeedback from './Feedback.module.css';
import ShowStats from '../ShowStats/ShowStats.js';


class Feedback extends Component {  

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  getFeedback = (event) => {    
    const target = event.target.name;    
    this.setState((prev) => ({[target]: prev[target] +1}))
  };

  getTotal = () => {
    const stateAll = this.state;
    const totalVoices = stateAll.good + stateAll.neutral + stateAll.bad;    
    return totalVoices;   
  }

  positiveFeedback = () => {    
    const { good, neutral, bad } = this.state;
    if(good === 0){
      return 0;
    }
    const positivePersent = (good/(good+neutral+bad)*100).toFixed(1);    
    return positivePersent;    
  }
  
  render(){   
    const {good, neutral, bad} = this.state;
    
    return (
      <div className={styleFeedback.block}>
      <Buttons getFeedback={this.getFeedback}/>
      <h2>Statistics</h2>
      {this.getTotal() > 0 ? <ShowStats good={good} neutral={neutral} bad={bad} getTotal={this.getTotal} positiveFeedback={this.positiveFeedback}/> : <p>No feedback</p>}
      
      </div>
    )
  }
}

export default Feedback;
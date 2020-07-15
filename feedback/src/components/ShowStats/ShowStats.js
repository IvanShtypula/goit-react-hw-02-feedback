import React from 'react';
import styleStats from './ShowStats.module.css'

const ShowStats = ({good, neutral, bad, getTotal, positiveFeedback}) => { 
  // const statsArr = Object.keys(state);
  // console.log(statsArr);
 
  return ( 
    <>   
    <ul className={styleStats.list}>
    
        <li className={styleStats["list-item"]}>
        <p className={styleStats["item-name"]}>Good: </p>
  <span className={styleStats["item-quantity"]}>{good}</span>
      </li>
      <li className={styleStats["list-item"]}>
        <p className={styleStats["item-name"]}>Neutral: </p>
  <span className={styleStats["item-quantity"]}>{neutral}</span>
      </li>
      <li className={styleStats["list-item"]}>
        <p className={styleStats["item-name"]}>Bad: </p>
  <span className={styleStats["item-quantity"]}>{bad}</span>
      </li>
      
    </ul>

    <p>Total: {getTotal()}</p>
    <p>Positive Feedback:  {positiveFeedback()}%</p>
    </>
  );
};

export default ShowStats;
import React from 'react';
import styleBtn from './Button.module.css'

const Buttons = ( {getFeedback} ) => {
  return (
    <div>
      <button onClick={getFeedback} name="good" className={styleBtn.button}>Good</button>
      <button onClick={getFeedback} name="neutral" className={styleBtn.button}>Neutral</button>
      <button onClick={getFeedback} name="bad" className={styleBtn.button}>Bad</button>
    </div>
  );
};

export default Buttons;
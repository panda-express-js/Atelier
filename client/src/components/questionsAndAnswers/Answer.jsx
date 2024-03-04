import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Answer({answer}) {

  return (
    <div>
      <p>A: {answer.body}</p>
      <p>by {answer.answerer_name}, {answer.date} Helpful? Yes ({answer.helpfulness})</p>
    </div>
  )
}
export default Answer;
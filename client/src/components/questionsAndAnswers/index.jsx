
import React  ,{ useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';

const QandA = ({product, server, options}) => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (product) {
    axios.get(`${server}/qa/questions?product_id=${product.id}`, options)
    .then((response) => {
      console.log(response.data);
      setQuestions(response.data);
    })
    .catch((err) => console.log(err))
  }
  },[product])


  return (
    <div>
      <h4>questions & Answers</h4>
      {/* <nav>Search</nav> */}
      <QuestionList questions={questions}/>

    </div>
  )
}

export default QandA;
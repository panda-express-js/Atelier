import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';

const QandA = ({ product, server, options }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (product.id) {
      axios.get(`${server}/qa/questions?product_id=${product.id}&page=1&count=5`, options)
        .then((response) => {
          const fetchedQuestions = response.data.results;
          setQuestions(fetchedQuestions);
          fetchedQuestions.forEach(question => {
            axios.get(`${server}/qa/questions/${question.question_id}/answers`, options)
              .then((answersResponse) => {
                setAnswers(prevAnswers => ({
                  ...prevAnswers,
                  [question.question_id]: answersResponse.data.results
                }));
              })
              .catch((err) => console.log(err));
          });
        })
        .catch((err) => console.log(err));
    }
  }, [product]);

  return (
    <div>
      <h4>Questions & Answers</h4>
      <QuestionList questions={questions} answers={answers} />
    </div>
  );
};

export default QandA;

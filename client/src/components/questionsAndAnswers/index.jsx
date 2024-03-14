import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';
import Search from './Search.jsx';


const QandA = ({ questions,product, server, options }) => {
  const [answers, setAnswers] = useState({});
  const [searchInput, setSearchInput] = useState('');

  const updateSearch = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    if (questions.length > 0) {
      // Fetch answers for each question
      Promise.all(questions.map(question =>
        axios.get(`${server}/qa/questions/${question.question_id}/answers?page=1&count=5`, options)
      ))
      .then(answersResponses => {
        const newAnswers = answersResponses.reduce((acc, current, index) => {
          const questionId = questions[index].question_id;
          acc[questionId] = current.data.results;
          return acc;
        }, {});
        setAnswers(newAnswers);
      })
      .catch((err) => console.log("Error fetching answers: ", err));
    }
  }, [questions, server, options]);

  // Filter questions based on the search input
  const filteredQuestions = questions.filter(question =>
    question.question_body.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <h4>Questions & Answers</h4>
      <nav><Search onSearchChange={updateSearch} /></nav>
      <QuestionList
        server={server}
        options={options}
        product={product}
        questions={searchInput.length >= 3 ? filteredQuestions : questions}
        answers={answers}
        searchTerm={searchInput}
      />
    </div>
  );
};

export default QandA;
import React from 'react';
import { render , screen } from '@testing-library/react';
import Question from '../components/questionsAndAnswers/Question.jsx';
import Answer from '../components/questionsAndAnswers/Answer.jsx';

describe('Question Component', () => {
  const question = {
    question_id: 1,
    question_body: 'testing question?',
    question_date: '2024-01-01T00:00:00.000Z',
    asker_name: 'customer123',
    question_helpfulness: 10,
    reported: false,
  };

  it('renders the question', () => {
    render(<Question question={question} answers={[]} />);
    expect(screen.getByText(/testing question\?/)).toBeInTheDocument();
  });

  it('renders the helpfulness count for the question', () => {
    render(<Question question={question} answers={[]} />);
    expect(screen.getByText(/Helpful\? Yes \(10\)/)).toBeInTheDocument();
  });

});

describe('Answer Component', () => {
  const answer = {
    body: 'testing answer',
    date: '2024-01-02T00:00:00.000Z',
    answerer_name: 'Flora',
    helpfulness: 5,
  };

  it('renders the answer', () => {
    render(<Answer answer={answer} />);
    expect(screen.getByText('A: testing answer')).toBeInTheDocument();
  });

  it('renders the helpfulness count for the answer', () => {
    render(<Answer answer={answer} />);
    expect(screen.getByText(/Helpful\? Yes \(5\)/)).toBeInTheDocument();
  });

});
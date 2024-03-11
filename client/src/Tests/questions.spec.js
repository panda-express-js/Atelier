import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Question from '../components/questionsAndAnswers/Question.jsx';
import Answer from '../components/questionsAndAnswers/Answer.jsx';
import QuestionList from '../components/questionsAndAnswers/QuestionList';
import { waitFor } from '@testing-library/react';

const questionsData = [
  {
      question_id: 1,
      question_body: 'testing question?',
      question_date: '2024-01-01T00:00:00.000Z',
      asker_name: 'customer123',
      question_helpfulness: 10,
      reported: false,
  },
  {
      question_id: 2,
      question_body: 'Is this product eco-friendly?',
      question_date: '2024-02-01T00:00:00.000Z',
      asker_name: 'eco123',
      question_helpfulness: 8,
      reported: false,
  }
];

const answersData = {
    1: [
        {
            answer_id: 5993649,
            body: 'testing answer',
            date: '2024-01-02T00:00:00.000Z',
            answerer_name: 'Flora',
            helpfulness: 5,
            photos: []
        },

    ]
};


describe('Question Component', () => {
  it('renders the question', () => {
      render(<Question question={questionsData[0]} answers={[]} />);
      expect(screen.getByText('Q: testing question?')).toBeInTheDocument();
  });

  it('increments helpfulness count by 1 for the question when clicked', async () => {
      render(<Question question={questionsData[0]} answers={[]} />);
      fireEvent.click(screen.getByText('Yes'));
      await waitFor(() => {
          const helpfulnessText = new RegExp('\\(11\\)', 'i');
          expect(screen.getByText(helpfulnessText)).toBeInTheDocument();
      });
  });
});

describe('Answer Component', () => {
  it('renders the answer', () => {
      render(<Answer answer={answersData[1][0]} />);
      expect(screen.getByText('A: testing answer')).toBeInTheDocument();
  });

  it('increments helpfulness count by 1 for the answer when clicked', async () => {
      render(<Answer answer={answersData[1][0]} />);
      fireEvent.click(screen.getByText('Yes'));
      await waitFor(() => {
          const helpfulnessText = new RegExp('\\(6\\)', 'i');
          expect(screen.getByText(helpfulnessText)).toBeInTheDocument();
      });
  });

  it('renders the formatted answer date', () => {
      render(<Answer answer={answersData[1][0]} />);
      expect(screen.getByText(/January 1, 2024/)).toBeInTheDocument();
  });
});

describe('QuestionList', () => {
  it('renders questions sorted by helpfulness', () => {
      render(<QuestionList questions={questionsData} answers={answersData} />);
      expect(screen.getByText('Q: testing question?')).toBeInTheDocument();
      expect(screen.getByText('Q: Is this product eco-friendly?')).toBeInTheDocument();
      expect(screen.getByText('A: testing answer')).toBeInTheDocument();
  });
});




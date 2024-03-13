import React from 'react';
import { render, screen, fireEvent, waitFor  } from '@testing-library/react';
import Question from '../components/questionsAndAnswers/Question.jsx';
import Answer from '../components/questionsAndAnswers/Answer.jsx';
import QuestionList from '../components/questionsAndAnswers/QuestionList';
import Search from '../components/questionsAndAnswers/Search.jsx';
import QandA from '../components/questionsAndAnswers/index.jsx';
import AddAnswer from '../components/questionsAndAnswers/AddAnswer.jsx';
import AddQuestion from '../components/questionsAndAnswers/AddQuestion.jsx';
import AnswerList from '../components/questionsAndAnswers/AnswerList.jsx';


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
const productData = { id: '1', name: 'Mock Product' };

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

  it('opens the AddAnswer modal when the "Add Answer" link is clicked', () => {
    render(<Question question={questionsData[0]} answers={answersData[1]} product={productData} />);
    fireEvent.click(screen.getByText('Add Answer'));
    expect(screen.getByText('Submit Your Answer')).toBeInTheDocument();
  });

  it('closes the AddAnswer modal when the close function is triggered', () => {
    render(<Question question={questionsData[0]} answers={answersData[1]} product={productData} />);
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText('Submit Your Answer')).not.toBeInTheDocument();
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

  it('changes report text to "Reported" when the report link is clicked', async () => {
    render(<Answer answer={answersData[1][0]} />);
    const reportLink = screen.getByText('Report');
    fireEvent.click(reportLink);
    await waitFor(() => {
      const answerText = screen.getByText(/Reported/).textContent.trim();
      expect(answerText).toContain('Reported');
    });
  });
  const answerWithPhotos = {
    ...answersData[1][0],
    photos: [{ url: 'http://example.com/photo.jpg' }]
  };

  it('opens a modal with the image when an image thumbnail is clicked', () => {
    render(<Answer answer={answerWithPhotos} />);
    const imageThumbnail = screen.getByAltText('Thumbnail 1');
    fireEvent.click(imageThumbnail);
    const modalImage = screen.getByRole('img', { name: 'Full size' });
    expect(modalImage).toHaveAttribute('src', 'http://example.com/photo.jpg');
  });

  it('closes the modal when the close button is clicked', () => {
    render(<Answer answer={answerWithPhotos} />);
    const imageThumbnail = screen.getByAltText('Thumbnail 1');
    fireEvent.click(imageThumbnail); // Open modal
    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);
    expect(screen.queryByRole('img', { name: 'Full size' })).not.toBeInTheDocument();
  });

  it('displays a strong tag for the seller\'s name', () => {
    const sellerAnswer = {
      ...answersData[1][0],
      answerer_name: 'seller',
    };
    render(<Answer answer={sellerAnswer} />);
    expect(screen.getByText('Seller')).toBeInTheDocument();
    expect(screen.getByText('Seller').tagName).toBe('STRONG');
  });

});

describe('QuestionList', () => {
  it('renders questions sorted by helpfulness', () => {
      render(<QuestionList questions={questionsData} answers={answersData} product={productData} />);
      expect(screen.getByText('Q: testing question?')).toBeInTheDocument();
      expect(screen.getByText('Q: Is this product eco-friendly?')).toBeInTheDocument();
      expect(screen.getByText('A: testing answer')).toBeInTheDocument();
  });
  it('displays more questions when the "More Answered Questions" button is clicked', () => {
    // Add an extra question to test the button functionality
    const extraQuestionData = [
      ...questionsData,
      {
        question_id: 3,
        question_body: 'Another test question?',
        question_date: '2024-03-01T00:00:00.000Z',
        asker_name: 'tester123',
        question_helpfulness: 7,
        reported: false,
      }
    ];

    render(<QuestionList questions={extraQuestionData} answers={answersData} product={productData} />);
    expect(screen.getAllByText(/Q:/)).toHaveLength(2);
    fireEvent.click(screen.getByText('More Answered Questions'));
    expect(screen.getAllByText(/Q:/)).toHaveLength(3);
  });

});

describe('AnswerList Component', () => {
    const mockAnswers = [
        {
          answer_id: 1,
          body: 'Answer 1 from seller',
          date: '2024-01-02T00:00:00.000Z',
          answerer_name: 'seller',
          helpfulness: 10,
          photos: []
        },
        {
          answer_id: 2,
          body: 'Answer 2 from user',
          date: '2024-01-03T00:00:00.000Z',
          answerer_name: 'user123',
          helpfulness: 5,
          photos: []
        },
        {
          answer_id: 3,
          body: 'Answer 3 from seller',
          date: '2024-01-04T00:00:00.000Z',
          answerer_name: 'seller',
          helpfulness: 8,
          photos: []
        },
        {
          answer_id: 4,
          body: 'Answer 4 from user',
          date: '2024-01-05T00:00:00.000Z',
          answerer_name: 'user789',
          helpfulness: 3,
          photos: []
        }
      ];
      test('renders correctly with no answers', () => {
        render(<AnswerList answers={[]} />);
        expect(screen.queryByText('See more answers')).not.toBeInTheDocument();
      });


      test('renders correctly with many answers and toggles expansion', () => {
        render(<AnswerList answers={mockAnswers} />);
        expect(screen.getByText(/Answer 1 from seller/)).toBeInTheDocument();
        fireEvent.click(screen.getByText('See more answers'));
        expect(screen.getByText(/Answer 3 from seller/)).toBeInTheDocument();
        expect(screen.getByText(/Answer 2 from user/)).toBeInTheDocument();
        fireEvent.click(screen.getByText('Collapse answers'));
      });


      test('sorts answers correctly, prioritizing sellers and helpfulness', () => {
        render(<AnswerList answers={mockAnswers} />);

        if (screen.queryByText('See more answers')) {
          fireEvent.click(screen.getByText('See more answers'));
        }
        const displayedAnswers = screen.queryAllByText(/Answer \d from (user|another user|seller)/);
        expect(displayedAnswers[0]).toHaveTextContent('Answer 1 from seller');
        expect(displayedAnswers[1]).toHaveTextContent('Answer 3 from seller');
        expect(displayedAnswers[2]).toHaveTextContent('Answer 2 from user');
        expect(displayedAnswers[3]).toHaveTextContent('Answer 4 from user');
      });
});


describe('Search', () => {
    test('Search component should render onto the screen', async () => {
        render(<Search onSearchChange={() => {}} />);
        const searchContainer = screen.getByTestId('search-container');
        expect(searchContainer).toBeInTheDocument();
      });


      test('Search component should have the correct placeholder text', async () => {
        render(<Search onSearchChange={() => {}} />);
        const placeholderText = screen.getByPlaceholderText('Have a question? Search for answers…');
        expect(placeholderText).toBeInTheDocument();
      });
})

describe('AddAnswer Component', () => {
    const mockOnSubmitAnswer = jest.fn();
    const mockOnClose = jest.fn();
    const mockProduct = { name: 'Test Product' };
    const mockQuestion = { question_body: 'test question?' };

    beforeEach(() => {
      render(<AddAnswer product={mockProduct} question={mockQuestion} onSubmitAnswer={mockOnSubmitAnswer} onClose={mockOnClose} />);
    });

    it('renders correctly and shows initial blank state', () => {
      expect(screen.getByText('Submit Your Answer')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Example: jack543!')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Example: jack@email.com')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter image URL')).toBeInTheDocument();
      expect(screen.queryByText('Upload your photos')).toBeInTheDocument();
    });

    it('allows a photo URL to be added', () => {
      fireEvent.change(screen.getByPlaceholderText('Enter image URL'), { target: { value: 'http://example.com/photo.jpg' } });
      fireEvent.click(screen.getByText('Add Photo'));
      expect(screen.getByAltText('Uploaded 1')).toBeInTheDocument();
    });

    it('calls onSubmitAnswer with correct data when form is valid', async () => {
      fireEvent.change(screen.getByPlaceholderText('Example: jack543!'), { target: { value: 'nickname' } });
      fireEvent.change(screen.getByPlaceholderText('Example: jack@email.com'), { target: { value: 'email@example.com' } });
      fireEvent.change(screen.getByPlaceholderText('Enter image URL'), { target: { value: 'http://example.com/photo.jpg' } });
      fireEvent.click(screen.getByText('Add Photo'));
      fireEvent.change(screen.getByLabelText('Your Answer: (mandatory)*'), { target: { value: 'This is an answer.' } });

      fireEvent.click(screen.getByText('Submit answer'));

      await waitFor(() => {
        expect(mockOnSubmitAnswer).toHaveBeenCalledWith({
          body: 'This is an answer.',
          name: 'nickname',
          email: 'email@example.com',
          photos: ['http://example.com/photo.jpg'],
        });
      });
    });

    it('calls onClose when close button is clicked', () => {
      fireEvent.click(screen.getByText('Close'));
      expect(mockOnClose).toHaveBeenCalled();
    });
});




describe('AddQuestion Component', () => {

    const mockOnSubmitQuestion = jest.fn();
    const productId = "1";
    const productName = "Test Product";

    const renderAddQuestion = () => {
    render(<AddQuestion productId={productId} productName={productName} onSubmitQuestion={mockOnSubmitQuestion} />);
    };

    beforeEach(() => {
        renderAddQuestion();
    });

  it('opens and then closes the modal when close button is clicked', () => {
    fireEvent.click(screen.getByText('Ask a Question +'));
    expect(screen.getByText('Ask Your Question')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText('Ask Your Question')).not.toBeInTheDocument();
  });


  it('submits the form with valid data', async () => {
    fireEvent.click(screen.getByText('Ask a Question +'));
    fireEvent.change(screen.getByLabelText(/Your Question/i), { target: { value: 'This is a question' } });
    fireEvent.change(screen.getByPlaceholderText(/Example: jackson11!/i), { target: { value: 'MyNickname' } });
    fireEvent.change(screen.getByPlaceholderText(/Why did you like the product or not?/i), { target: { value: 'email@example.com' } });
    fireEvent.click(screen.getByText('Submit question'));

    await waitFor(() => {
      expect(mockOnSubmitQuestion).toHaveBeenCalledWith(expect.objectContaining({
        body: 'This is a question',
        name: 'MyNickname',
        email: 'email@example.com',
        product_id: productId,
      }));
    });
  });

});

describe('QandA Component', () => {
    it('renders without crashing', () => {
        render(<QandA product={productData} questions={questionsData} />);
        expect(screen.getByText('Questions & Answers')).toBeInTheDocument();
      });

})
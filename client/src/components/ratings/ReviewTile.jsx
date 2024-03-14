import React , { useState, useEffect, useRef } from 'react';
import StarDisplay from './star_rating/Star_Display.jsx'
import Helpful from './Helpful.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function ReviewTile ({ rating, date, username, summary, body, recommend, response, helpful, updateHelpfulAPI, reviewID }) {

  const newDate = new Date(date).toDateString();

  const [helpfulness, setHelpfulness] = useState(helpful);

  const ref = React.createRef();
  const [showMore, setShowMore] = React.useState(false);
  const [showLink, setShowLink] = React.useState(false);

  React.useLayoutEffect(() => {
    if (ref.current.clientWidth < ref.current.scrollWidth) {
      setShowLink(true);
    }
  }, [ref]);

  const onClickMore = () => {
    setShowMore(!showMore);
  };


  return <div className="review-tile">
    <div className="username">{username} </div>
    <span className="star-holder"><StarDisplay rating={rating} /></span> <span className="summary">{summary}</span>
    <div className="date">{newDate}</div>
    {
      function () {
        if (response) {
          return <div className="response-box">
            <span className="response">Response from seller </span>
            <span className="response">{response}</span>
          </div>
        }
      }()
    }
    <div>
      <div ref={ref} className={showMore ? "" : "container"}>
      {body}
      </div>
      {showLink && (
        <span className="link more" onClick={onClickMore}>
          {showMore ? "show less" : "show more"}
        </span>
      )}
    </div>
    {
      function () {
        if (recommend === true) {
          return <div className="recommendation-box">
            <span className="recommendation">I recommend this product </span>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        }
      }()
    }
    <Helpful helpful={helpfulness} setHelpful={setHelpfulness} updateHelpfulAPI={updateHelpfulAPI} reviewID={reviewID}/>
  </div>
}
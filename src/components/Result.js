import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={200}
      transitionAppear
      transitionAppearTimeout={200}
    >
      <div className="result_contents">
        <p>당신이 선호하는 투자 분야는 <strong>{props.quizResult}</strong>입니다</p>
      </div>
      <div id="intro_button">
            <Link to="/">리셋</Link>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;

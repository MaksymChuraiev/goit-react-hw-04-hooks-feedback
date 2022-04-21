import React from 'react';
import {
  FeedbackOptionsButton,
  FeedbackOptionsList,
  FeedbackOptionsItem,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map(item => (
        <FeedbackOptionsItem key={item}>
          <FeedbackOptionsButton onClick={onLeaveFeedback}>
            {item}
          </FeedbackOptionsButton>
        </FeedbackOptionsItem>
      ))}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

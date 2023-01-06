import React, { useReducer } from 'react';
import { SubHeading } from './Feedback.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { reducer } from 'reducers/reducer';

export const Feedback = () => {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = evt => {
    const action = evt.target.textContent;
    dispatch(action);
  };

  const { good, neutral, bad } = state;

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <Section>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        handleClick={onLeaveFeedback}
      />
      <SubHeading>Statistics</SubHeading>
      <Statistics
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
        stats={{ good, neutral, bad }}
      />
    </Section>
  );
};

import React, { useState } from 'react';
import { SubHeading } from './Feedback.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    const option = evt.target.textContent;
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

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

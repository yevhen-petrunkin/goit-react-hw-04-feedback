import React, { Component } from 'react';
import { SubHeading } from './Feedback.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const option = e.target.textContent;
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  }

  render() {
    return (
      <Section>
        <FeedbackOptions
          options={Object.keys(this.state)}
          handleClick={this.onLeaveFeedback}
        />
        <SubHeading>Statistics</SubHeading>
        <Statistics
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          stats={this.state}
        />
      </Section>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubHeading } from './Feedback.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class Feedback extends Component {
  static defaultProps = {
    initValue: 0,
  };

  static propTypes = {
    initValue: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initValue,
    neutral: this.props.initValue,
    bad: this.props.initValue,
  };

  onLeaveFeedback = e => {
    const option = e.target.textContent;
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce(
      (acc, value) => acc + value,
      this.props.initValue
    );
  }

  countPositiveFeedbackPercentage() {
    const array = [...Object.keys(this.state)];
    return Math.round((this.state[array[0]] / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <Section>
        <FeedbackOptions
          options={[...Object.keys(this.state)]}
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

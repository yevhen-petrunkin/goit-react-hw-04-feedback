import React, { Component } from 'react';
import { Box } from '../Box';
import { Heading, SubHeading } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { MainStats } from './MainStats/MainStats';
import { Result } from './Result/Result';

export class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  render() {
    return (
      <Box pl="20px">
        <Heading>Please leave feedback</Heading>
        <FeedbackOptions
          options={[...Object.keys(this.state)]}
          onLeaveFeedback={this.OnLeaveFeedback}
        />
        <SubHeading>Statistics</SubHeading>
        <MainStats stats={this.state} />
        <Result total="100" percentage="50%" />
      </Box>
    );
  }
}

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { MainData, Aftermath } from './Statistics.styled';
import { StatItem } from './StatItem/StatItem';
import { Notification } from './Notification/Notification';

export const Statistics = ({ stats, total, positivePercentage }) => {
  return total ? (
    <>
      <MainData>
        {Object.keys(stats).map(stat => {
          const li = {};
          li.id = nanoid();
          return (
            <StatItem key={li.id} stats={stats} stat={stat}>
              {stat}: {stats[stat]}
            </StatItem>
          );
        })}
      </MainData>
      <Aftermath>Total: {total}</Aftermath>
      <Aftermath>Positive feedback: {positivePercentage}%</Aftermath>
    </>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

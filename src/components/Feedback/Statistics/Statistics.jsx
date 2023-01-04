import PropTypes from 'prop-types';
import { MainData, Aftermath } from './Statistics.styled';
import { StatItem } from './StatItem/StatItem';
import { Notification } from './Notification/Notification';

export const Statistics = ({ stats, total, positivePercentage }) => {
  return total ? (
    <>
      <MainData>
        {Object.keys(stats).map(stat => {
          return <StatItem key={stat} label={stat} value={stats[stat]} />;
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

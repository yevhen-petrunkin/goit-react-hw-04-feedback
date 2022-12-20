import PropTypes from 'prop-types';
import { Stat } from './StatItem.styled';

export const StatItem = ({ stats, stat }) => {
  return (
    <Stat>
      {stat}: {stats[stat]}
    </Stat>
  );
};

StatItem.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  stat: PropTypes.string.isRequired,
};

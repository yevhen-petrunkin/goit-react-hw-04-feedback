import PropTypes from 'prop-types';
import { Stat } from './StatItem.styled';

export const StatItem = ({ label, value }) => {
  return (
    <Stat>
      {label}: {value}
    </Stat>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

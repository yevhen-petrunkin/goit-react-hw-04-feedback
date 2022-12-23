import PropTypes from 'prop-types';
import { Box } from '../../Box';
import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <Box pl="10px" display="flex" alignItems="center" style={{ gap: '20px' }}>
      {options.map(option => {
        return (
          <FeedbackBtn key={option} option={option} handleClick={handleClick} />
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleClick: PropTypes.func.isRequired,
};

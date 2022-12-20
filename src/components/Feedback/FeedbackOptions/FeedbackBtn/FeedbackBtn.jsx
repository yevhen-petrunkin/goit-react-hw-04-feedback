import PropTypes from 'prop-types';
import { Button } from './FeedbackBtn.styled';

export const FeedbackBtn = ({ option, handleClick }) => {
  return (
    <Button
      type="button"
      style={{ backgroundColor: getRandomHexColor() }}
      onClick={handleClick}
    >
      {option}
    </Button>
  );
};

FeedbackBtn.propTypes = {
  option: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

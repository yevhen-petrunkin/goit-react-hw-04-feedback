import { Button } from './FeedbackBtn.styled';

export const FeedbackBtn = ({ option }) => {
  return (
    <Button type="button" style={{ backgroundColor: getRandomHexColor() }}>
      {option}
    </Button>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

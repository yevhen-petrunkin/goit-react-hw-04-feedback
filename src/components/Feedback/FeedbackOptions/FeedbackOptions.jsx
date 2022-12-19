import { nanoid } from 'nanoid';
import { Box } from '../../Box';
import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';

export const FeedbackOptions = ({ options }) => {
  return (
    <Box pl="10px" display="flex" alignItems="center" style={{ gap: '20px' }}>
      {options.map(option => (
        <FeedbackBtn option={option} key={nanoid()} />
      ))}
    </Box>
  );
};

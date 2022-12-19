import { Box } from './Box';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <Box
      width="400px"
      m="0 auto"
      pt="20px"
      pb="20px"
      bg="rgb(239 239 239)"
      as="main"
    >
      <Feedback />
    </Box>
  );
};

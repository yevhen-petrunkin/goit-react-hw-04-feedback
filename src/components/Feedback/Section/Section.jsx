import PropTypes from 'prop-types';
import { Box } from '../../Box';
import { Heading } from './Section.styled';

export const Section = ({ children }) => (
  <Box pl="20px" as="section">
    <Heading>Please leave feedback</Heading>
    {children}
  </Box>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

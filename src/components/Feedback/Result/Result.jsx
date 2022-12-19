import { Aftermath } from './Result.styled';

export const Result = ({ total, percentage }) => (
  <>
    <Aftermath>Total: {total}</Aftermath>
    <Aftermath>Positive feedback: {percentage}</Aftermath>
  </>
);

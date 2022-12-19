import { nanoid } from 'nanoid';
import { MainData } from './MainStats.styled';

export const MainStats = ({ stats }) => {
  return (
    <MainData>
      {Object.keys(stats).map(stat => {
        return (
          <li key={nanoid()}>
            {stat}: {stats[stat]}
          </li>
        );
      })}
    </MainData>
  );
};

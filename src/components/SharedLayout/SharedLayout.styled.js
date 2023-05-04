import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: #7e5338;

  &.active {
    color: #cf813a;
  }
`;

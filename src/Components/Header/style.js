import styled from 'styled-components';

export const HeaderNav = styled.header`
  margin-bottom: 2rem;
`;

export const Nav = styled.nav`
  & ul {
    display: flex;
    padding: 0px;
    margin: 0;
    list-style: none;
    & li {
      margin: 1rem;
      & a {
        display: block;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: 'Lato';
        font-weight: bold;
        color: black;
        background: #eee;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        &.active,
        &:hover {
          background: #ddd;
        }
      }
    }
  }
`;

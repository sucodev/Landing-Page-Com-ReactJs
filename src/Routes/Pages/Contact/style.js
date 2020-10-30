import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

export const Content = styled.section`
  ul {
    padding: 0px;
    list-style: none;
  }
  ul li {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
  ul li::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 2px;
    background: #ddd;
    margin-right: 10px;
  }
`;

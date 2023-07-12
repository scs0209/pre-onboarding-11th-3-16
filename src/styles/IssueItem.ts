import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const IssueItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const IssueLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  max-width: 800px;

  &:hover {
    cursor: pointer;
    color: blue;
  }
`;

export const AuthorDate = styled.div`
  display: inline-flex;
  width: 100%;
  margin-bottom: 4px;
`;

export const CommentCount = styled.div`
  float: right;
  text-align: right;
`;

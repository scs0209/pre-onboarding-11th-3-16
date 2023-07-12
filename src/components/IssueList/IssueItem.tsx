import { Link } from 'react-router-dom';

import { AuthorDate, CommentCount, IssueItemContainer } from '@/styles/IssueItem';

const IssueItem = ({ issue }: any) => {
  return (
    <IssueItemContainer>
      <Link to={`/issue/${issue.number}`}>
        <h3>
          #{issue.number}: {issue.title}
        </h3>
        <AuthorDate>
          <div>작성자: {issue.user.login}, </div>
          <div>작성일: {new Date(issue.created_at).toLocaleDateString()}</div>
        </AuthorDate>
      </Link>
      <CommentCount>코멘트 수: {issue.comments}</CommentCount>
    </IssueItemContainer>
  );
};

export default IssueItem;

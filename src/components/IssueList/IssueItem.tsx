import { AuthorDate, CommentCount, IssueItemContainer, IssueLink } from '@/styles/IssueItem';

const IssueItem = ({ issue }: any) => {
  return (
    <IssueItemContainer>
      <IssueLink to={`/issue/${issue.number}`}>
        <h3>
          #{issue.number}: {issue.title}
        </h3>
        <AuthorDate>
          <div>작성자: {issue.user.login}, </div>
          <div>작성일: {new Date(issue.created_at).toLocaleDateString()}</div>
        </AuthorDate>
      </IssueLink>
      <CommentCount>코멘트 수: {issue.comments}</CommentCount>
    </IssueItemContainer>
  );
};

export default IssueItem;

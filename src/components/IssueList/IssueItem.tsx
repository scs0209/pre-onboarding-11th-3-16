const IssueItem = ({ issue }: any) => {
  return (
    <div>
      <h3>
        #{issue.number}: {issue.title}
      </h3>
      <div>작성자: {issue.user.login}</div>
      <div>작성일: {new Date(issue.created_at).toLocaleDateString()}</div>
      <div>코멘트 수: {issue.comments}</div>
    </div>
  );
};

export default IssueItem;

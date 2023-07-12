import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { useIssueDetailContext } from '@/context/IssueDetailContext';
import { AuthorDate, Profile, ProfileImage, TitleContainer } from '@/styles/IssueDetail';

const IssueDetail = () => {
  const { issueNumber } = useParams() as any;
  const { issueDetail, loading, error, updateIssueDetail } = useIssueDetailContext();

  useEffect(() => {
    updateIssueDetail(parseInt(issueNumber));
  }, [issueNumber]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!issueDetail) return <div>No data available</div>;

  return (
    <div className="issue-detail">
      <TitleContainer>
        <Profile>
          <ProfileImage
            src={issueDetail.user.avatar_url}
            alt={`Avatar for ${issueDetail.user.login}`}
          />
          <AuthorDate>
            <h2>
              #{issueDetail.number}: {issueDetail.title}
            </h2>
            <div>
              작성자: {issueDetail.user.login}, 작성일:{' '}
              {new Date(issueDetail.created_at).toLocaleDateString()}
            </div>
          </AuthorDate>
        </Profile>
        <div>코멘트수: {issueDetail.comments}</div>
      </TitleContainer>
      <ReactMarkdown>{issueDetail.body}</ReactMarkdown>
    </div>
  );
};

export default IssueDetail;

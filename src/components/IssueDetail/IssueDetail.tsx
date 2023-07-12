import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { getIssueDetail } from '@/api/github';
import { AuthorDate, Profile, ProfileImage, TitleContainer } from '@/styles/IssueDetail';

interface IssueDetails {
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  comments: number;
  body: string;
}

const IssueDetail = () => {
  const { issueNumber } = useParams() as any;
  const [issueDetails, setIssueDetails] = useState<IssueDetails | null>(null);

  useEffect(() => {
    async function fetchIssueDetails() {
      const fetchedIssueDetails = await getIssueDetail(issueNumber);

      setIssueDetails(fetchedIssueDetails);
    }
    fetchIssueDetails();
  }, [issueNumber]);

  if (!issueDetails) return <div>Loading...</div>;

  return (
    <div className="issue-detail">
      <TitleContainer>
        <Profile>
          <ProfileImage
            src={issueDetails.user.avatar_url}
            alt={`Avatar for ${issueDetails.user.login}`}
          />
          <AuthorDate>
            <h2>
              #{issueDetails.number}: {issueDetails.title}
            </h2>
            <div>
              작성자: {issueDetails.user.login}, 작성일:{' '}
              {new Date(issueDetails.created_at).toLocaleDateString()}
            </div>
          </AuthorDate>
        </Profile>
        <div>코멘트수: {issueDetails.comments}</div>
      </TitleContainer>
      <ReactMarkdown>{issueDetails.body}</ReactMarkdown>
    </div>
  );
};

export default IssueDetail;

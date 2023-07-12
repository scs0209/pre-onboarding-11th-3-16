import ReactMarkdown from 'react-markdown';

import { useIssueDetailContext } from '@/context/IssueDetailContext';
import { AuthorDate, Profile, ProfileImage, TitleContainer } from '@/styles/IssueDetail';

import DataLoader from '../DataLoader/DataLoader';

const IssueDetailItem = () => {
  const { data: issueDetail, loading, error } = useIssueDetailContext();

  return (
    <DataLoader data={issueDetail} loading={loading} error={error}>
      {(issueDetail) => (
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
      )}
    </DataLoader>
  );
};

export default IssueDetailItem;

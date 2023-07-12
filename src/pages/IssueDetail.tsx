import { useParams } from 'react-router-dom';

import { IssueDetailProvider } from '@/context/IssueDetailContext';

import IssueDetailItem from '../components/IssueDetail/IssueDetailItem';

const IssueDetailPage = () => {
  const { issueNumber } = useParams() as any;

  return (
    <IssueDetailProvider issueNumber={parseInt(issueNumber, 10)}>
      <IssueDetailItem />
    </IssueDetailProvider>
  );
};

export default IssueDetailPage;

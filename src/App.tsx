import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import { IssuesProvider } from './context/IssueContext';
import { RepoProvider } from './context/RepoContext';
import IssueDetail from './pages/IssueDetail';
import IssueList from './pages/IssueList';
import { Container } from './styles/App';

function App() {
  return (
    <Container>
      <RepoProvider>
        <Header />
        <IssuesProvider>
          <Routes>
            <Route path="/" element={<IssueList />} />
            <Route path="/issue/:issueNumber" element={<IssueDetail />} />
          </Routes>
        </IssuesProvider>
      </RepoProvider>
    </Container>
  );
}

export default App;

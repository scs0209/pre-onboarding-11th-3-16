import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import IssueDetail from './components/IssueDetail/IssueDetail';
import IssueList from './components/IssueList/IssueList';
import { IssuesProvider } from './context/IssueContext';
import { Container } from './styles/App';

function App() {
  return (
    <Container>
      <Header />
      <IssuesProvider>
        <Routes>
          <Route path="/" element={<IssueList />} />
          <Route path="/issue/:issueNumber" element={<IssueDetail />} />
        </Routes>
      </IssuesProvider>
    </Container>
  );
}

export default App;

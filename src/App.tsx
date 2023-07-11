import IssueList from './components/IssueList/IssueList';
import { IssuesProvider } from './context/IssueContext';

function App() {
  return (
    <div className="App">
      <IssuesProvider>
        <IssueList />
      </IssuesProvider>
    </div>
  );
}

export default App;

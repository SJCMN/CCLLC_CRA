import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import StickyFooter from './Components/StickyFooter/StickyFooter';
import AppHeader from './Components/AppHeader/AppHeader';


function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <StickyFooter />
      </div>
    </Router>
  );
}

export default App;



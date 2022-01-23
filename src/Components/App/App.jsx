import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import StickyFooter from '../StickyFooter/StickyFooter';
import AppHeader from '../AppHeader/AppHeader';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <AppHeader />
        <StickyFooter />
      </div>
    </Router>
  );
}

export default App;



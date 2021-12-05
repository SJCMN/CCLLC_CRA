import './App.css';
import StickyFooter from './Components/StickyFooter/StickyFooter';
import axios from 'axios';
import {useEffect, useState} from 'react'
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  return (
    <div className="App">
      <StickyFooter />
    </div>
  );
}

export default App;

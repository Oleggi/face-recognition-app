import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import RankInfo from './components/RankInfo/RankInfo';
import ImageInput from './components/ImageInput/ImageInput';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <RankInfo />
      <ImageInput /> 
    </div>
  );
}

export default App;

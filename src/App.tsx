import React from 'react';
import './App.css';
import Main from './components/Main';
import useImportScript from './ImportScript';


function App() {

  useImportScript("/path/to/resource.js");

  return (
    <Main />
  );
}

export default App;

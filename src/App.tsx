import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectListScreen from './components/projectList';
import { LoginScreen } from 'components/login';

function App() {
  return (
    <div className="App">
     <ProjectListScreen />
     <LoginScreen />
    </div>
  );
}

export default App;

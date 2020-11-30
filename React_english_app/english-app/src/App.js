import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Score from './Components/Score';
import Library from './Components/Page';
import Training from './Components/Training';
import Learn from './Components/Learn';
import Game from './Components/Games/Game';
import {Context} from './context';
import MainPage from './Components/MainPage';

const App = () => {

  const CheckLevel = () => {
    return Math.floor((0.5 + Math.sqrt(1 + 8*(score)/ (5)) / 2)) - 1;
    
  }
  const [score, setScore] = useState(+localStorage.getItem('score') || 0);
  const [level, setLevel] = useState(CheckLevel());

  const checkLevel = () => {
    setLevel(CheckLevel());
  };
  return (
    <BrowserRouter>
    
    <Context.Provider value={{setScore, score}}>
      <div className="app-wrapper">
         <Nav level={level} />
         <MainPage path='.' component={MainPage} />
         <div className="main-side-wrapper">
              <Score score={score} />
              
              <Route path='/library' component={Library} />
              <Route path='/training' component={Training} />  
              <Route path='/learn'>
                <Learn 
                       checkLevel={checkLevel}
                       setScore={setScore}
                      score={score} 
                       />
              </Route>
              <Route path='/training/check-mode'>
                <Game 
                      checkLevel={checkLevel}
                      />                
              </Route>
              <Route path='/training/write-mode'>
                <Game 
                      checkLevel={checkLevel}
                      />
              </Route>
         </div>
      </div>
      </Context.Provider>
    </BrowserRouter>
              
  )
}


export default App;

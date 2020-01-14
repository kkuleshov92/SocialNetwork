import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';




function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.navbar} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs 
          state={props.state.dialogs} 
          updateNewDialogText={props.updateNewDialogText} 
          addDialogText={props.addDialogText} />} />
          <Route path='/profile' render={() => <Profile 
          state={props.state.profile} 
          addPost={props.addPost} 
          updateNewPostText={props.updateNewPostText} />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
        </div> 
      </div>
    </BrowserRouter>
  )
}

export default App;

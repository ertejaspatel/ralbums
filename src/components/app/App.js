import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../home/home";
import AlbumListContainer from '../albums/AlbumListContainer';
import AlbumPhotoListContainer from "../albums/AlbumPhotoListContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Nav />            
            <Route path="/albums" exact component={AlbumListContainer} />
            <Route path="/albums/:id/photos" exact component={AlbumPhotoListContainer} />
            <Route path="/" exact  component={Home} />
        </div>
    </Router>
    <ToastContainer />
    </div>
  );
}

export default App;

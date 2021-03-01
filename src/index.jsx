import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Cam} from './pages/cam.jsx';
import {Home} from './pages/home.jsx';
import {ChatBot} from './pages/chatbot.jsx';
import {Products} from './pages/products.jsx';

import TopNav from '../components/topnav.js';
import Footer from '../components/footer.js';

const App = (props) => {
    return (
      <Router>
        <main className="bg-dark text-white">
          <div className="header w-full flex justify-evenly bg-opacity-10 bg-gradient-to-r from-pink to-yellow text-white">
            </div>
            <TopNav />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/cam" component={Cam}/>
              <Route path="/chatbot" component={ChatBot}/>
              <Route path="/products" component={Products}/>
            </Switch>
            
        </main>
        
      </Router>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
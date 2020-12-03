import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import './reset.css';
import './index.css';
import './info_styles.css';
import reportWebVitals from './reportWebVitals';
import MainPage from './components/MainPage';
import store from './store'
import {Footer} from './components/Footer'
const user_id = 0

const app = <React.StrictMode>
              <Provider store={store}  key={1}>
                  <Router key={3}>    
                      <Route exact path="/:user_id?" component={MainPage} key={2}/>
                      <Link to={`/${user_id}`} ></Link>
                  </Router>
                  <Footer />
              </Provider>    
            </React.StrictMode>

ReactDOM.render(app,
  document.getElementById('root')
);

reportWebVitals();

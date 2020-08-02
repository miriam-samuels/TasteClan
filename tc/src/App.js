import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './tc/js/login.js';
import Reg from './tc/js/Reg';
import Home from './tc/js/home';
import Menu from './tc/js/menu';
import About from './tc/js/about';
import Blog from './tc/js/blog';
import Comment from './tc/js/comments';
import Addrestaurant from './tc/js/addRestaurant';
import AddDriver from './tc/js/addDriver';
import Patner from './tc/js/patner';
import Contact from './tc/js/contact';
import './tc/css/home.css';
import './tc/css/login.css';
import './tc/css/others.css';




function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Switch> {/* only one route is displayed at time*/}
          <Route path='/Reg' exact component={Reg} />
          <Route path='/login' exact component={Login} />
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/about' exact component={About} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/comments' exact component={Comment} />
          <Route path='/AddRestaurant' exact component={Addrestaurant} />
          <Route path='/AddDriver' exact component={AddDriver} />
          <Route path='/patner' exact component={Patner} />
          <Route path='/contact' exact component={Contact} />

          {/* <Route path ='/' render={()=><div>404</div>}/> */}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './tc/home.css';
import './tc/login.css';
import './tc/others.css';
import Login from './tc/login.js';
import Reg from './tc/Reg';
import Home from './tc/home';
import Menu from './tc/menu';
import About from './tc/about';
import Blog from './tc/blog';
import Comment from './tc/comments';
import Addrestaurant from './tc/addRestaurant';
import AddDriver from './tc/addDriver';
import Patner from './tc/patner';
import Contact from './tc/contact';




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

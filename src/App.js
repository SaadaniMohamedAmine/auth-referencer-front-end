import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './pages/Navbar.js'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login' 
import Feed from './pages/Feed'
import PrivateRoute from './privateRoute';
//the Route will replace the BrowserRouter and it is considered as
//the major component in routing 
//everything in routing must be in Router(BrowserRouter)
//routes must be included in Switch element
function App() {
  return (
    <div className="App">
      <Router> 
        {/*For every Route,we will display a component */}
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/feed' component={Feed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

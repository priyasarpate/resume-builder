import {BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './components/Navbar.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Template from './components/Template';


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path='/'>
<Navbar />
        </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/home'>
        <Navbar/>
        <Home />
        </Route>
      <Route exact path='/template'>
        <Template />
      </Route>
     </Switch>
     </BrowserRouter>
    </>
  );
}

export default App;

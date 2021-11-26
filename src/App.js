import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import Instructors from './components/Instructors/Instructors';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    <Router>
    <Header></Header>
      <Switch>
        <Route path = '/home'>
          <Home></Home>
        </Route>
        <Route path = '/about'>
          <About></About>
        </Route>
        <Route path = '/services'>
          <Services></Services>
        </Route>
        <Route path = '/instructors'>
          <Instructors></Instructors>
        </Route>
        <Route path = '/contact'>
          <Contact></Contact>
        </Route>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path = '*'>
          <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
    </Router>

    





    </div>
  );
}

export default App;

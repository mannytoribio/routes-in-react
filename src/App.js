import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  NavLink } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
    <header>
      <nav style={{ 
          padding: '.3em', 
          backgroundColor: 'darksalmon', 
          display: 'flex',
          justifyContent: 'space-between' }}>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/about">About</NavLink>
        <NavLink exact to="/contact">Contact</NavLink>
      </nav>
    </header>
    <Switch>
      <Route exact path='/'>
        <h1>Home</h1>
      </Route>
      <Route path='/contact'>
        <h1>Contact Us</h1>
      </Route>
      <Route path='/about'>
        <h1>About Us</h1>
      </Route>
      <Route path="/">
        <h1>404 - Page not found</h1>
      </Route>
    </Switch>
  </Router>
  )
}

export default App;

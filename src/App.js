import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </Router>
  );
}


function NavBar() {
  return(
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Bestiary</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
            <Link class="nav-link" to="/characters">Beasts</Link>
            <Link class="nav-link" to="/add-beast">Add to Bestiary</Link>
          </div>
        </div>
        </nav>
      </div>
    </Router>
  )
}


function Home() {
  return (
    <div>
      <h3>Hello User,</h3>
      <img src="" alt="" />
    </div>
    
  )
}

export default App;
